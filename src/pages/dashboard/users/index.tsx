import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AdminLayout } from "layouts";
import { User } from "interfaces";
import { useRequest } from "ahooks";
import { List, Avatar, Skeleton, Spin, Popconfirm, message } from "antd";
import { Row, Col, Form, Input, Button } from "antd";
import { Switch } from "antd";
import { SearchOutlined, DeleteOutlined } from "@ant-design/icons";
import { getUsers, deleteUsers, deleteUserApi, updateUserStatus } from "api";
import { useUser } from "contexts";
import { useWindow } from "hooks";

const Users = () => {
  const [nextToken, setNextToken] = useState<string | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [form] = Form.useForm();
  const [user] = useUser();
  const [width] = useWindow();

  const isMobile = width <= 600;

  type UsersProps = {
    items: User[];
    nextToken?: string;
  };

  const { data, loading, refresh, run } = useRequest<UsersProps>((value) =>
    getUsers(value || { nextToken, showBanned: false })
  );

  const deleteUserAction = useRequest(deleteUserApi, {
    manual: true,
    onSuccess: () => {
      message.success("User deleted");
      refresh();
    },
    onError: () => {
      message.error("User not deleted");
    },
  });

  const deleteAction = useRequest(deleteUsers, {
    manual: true,
    onSuccess: () => {
      message.success("Users deleted");
      refresh();
    },
    onError: () => {
      message.error("Users not deleted");
    },
  });

  const fetchReports = useRequest<UsersProps>(getUsers, {
    manual: true,
    onSuccess: () => {
      console.log("success");
    },
    onError: () => {
      console.log("err");
    },
  });

  useEffect(() => {
    if (!loading && data) {
      setUsers(data.items);
      setNextToken(data?.nextToken || null);
    }
  }, [loading]);

  useEffect(() => {
    if (!fetchReports.loading) {
      if (fetchReports.data?.items) {
        console.log("new datas:", fetchReports.data?.items);
        setUsers([...users, ...fetchReports.data?.items]);
        setNextToken(fetchReports?.data.nextToken || null);
      }
    }
  }, [fetchReports.loading]);

  const loadRecipes = async (values: FilterForm) => {
    const { username, showBanned } = values;
    await fetchReports.run({ nextToken, username, showBanned });
  };

  const banAction = async (data: { userID: string; isActive: boolean }) => {
    if (user.id === data.userID) {
      message.warning("You can't ban yourself");
      return;
    }

    const { isActive } = data;
    if (isActive) {
      await updateUserStatus({ ...data, isActive: 0 });
      message.success("User banned");
      refresh();
    } else {
      await updateUserStatus({ ...data, isActive: 1 });
      message.success("User ban removed");
      refresh();
    }
  };

  type FilterForm = {
    username: string;
    showBanned: boolean;
  };

  const onFinish = async (values: FilterForm) => {
    const { username, showBanned } = values;
    run({ nextToken: null, username, showBanned });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <AdminLayout title="Users" heading="Users">
        <Form
          form={form}
          className="recipe-form"
          style={{ display: "flex" }}
          initialValues={{
            username: "",
            showBanned: false,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <div style={{ width: "100%" }}>
            <Row gutter={{ xs: 8, sm: 8, md: 16, lg: 16 }}>
              <Col className="gutter-row" span={isMobile ? 24 : 12}>
                <p>Username</p>
                <Form.Item name="username">
                  <Input placeholder="Username" />
                </Form.Item>

                <p>Show banned</p>
                <Form.Item name="showBanned">
                  <Switch
                    checkedChildren="banned"
                    unCheckedChildren="not banned"
                    onChange={() => form.submit()}
                  />
                </Form.Item>
              </Col>
            </Row>

            <Row justify="end" gutter={{ xs: 8, sm: 8, md: 16, lg: 16 }}>
              <Col>
                <Form.Item style={{ textAlign: "right" }}>
                  <Popconfirm
                    title="Are you sure you want to delete all users?"
                    onConfirm={() => deleteAction.run()}
                    okText="Yes"
                    cancelText="No"
                    placement="topRight"
                  >
                    <Button
                      loading={deleteAction.loading}
                      icon={<DeleteOutlined />}
                      type="primary"
                      htmlType="button"
                      className="ant-btn__danger"
                      style={{ marginRight: 30 }}
                    >
                      Delete users
                    </Button>
                  </Popconfirm>

                  {/* <Button
                    icon={<SearchOutlined />}
                    type="primary"
                    htmlType="submit"
                  >
                    Filter
                  </Button> */}
                </Form.Item>
              </Col>
            </Row>
          </div>
        </Form>
        <List
          className="demo-loadmore-list"
          loading={loading}
          itemLayout="horizontal"
          // loadMore={loadMore}
          dataSource={users}
          renderItem={(user: User) => {
            const isActive = user.isActive === 1;

            return (
              <List.Item
                actions={[
                  <Popconfirm
                    title={
                      user.isActive
                        ? "Are you sure you want to remove ban?"
                        : "Are you sure you want to ban user?"
                    }
                    onConfirm={() => banAction({ userID: user.id, isActive })}
                    okText="Yes"
                    cancelText="No"
                    placement="topRight"
                  >
                    <a
                      className="text-danger"
                      key="ban-user"
                      style={{
                        width: 80,
                        display: "inline-block",
                        textAlign: "left",
                      }}
                    >
                      {user.isAdmin ? "" : isActive ? "ban user" : "remove ban"}
                    </a>
                  </Popconfirm>,
                  <Popconfirm
                    title="Are you sure you want to delete this user?"
                    onConfirm={() =>
                      deleteUserAction.run({
                        userID: user.id,
                        username: user.sub,
                      })
                    }
                    okText="Yes"
                    cancelText="No"
                    placement="topRight"
                  >
                    <a
                      className="text-danger"
                      key="ban-user"
                      style={{
                        width: 80,
                        display: "inline-block",
                        textAlign: "left",
                      }}
                    >
                      {user.isAdmin === 0 && "delete user"}
                    </a>
                  </Popconfirm>,
                ]}
              >
                <Skeleton avatar title={false} loading={loading} active>
                  <List.Item.Meta
                    // avatar={
                    //   <Avatar src={signedUrl} />
                    // }
                    title={<Link href={`/profile/${user.id}`}>{user.id}</Link>}
                    // description={report.recipe?.description}
                    description={
                      <div>
                        <span style={{ wordBreak: "break-all" }}>
                          {user.email}
                        </span>
                        <div
                          className="show-xs"
                          style={{ color: "rgba(0, 0, 0, 0.65)" }}
                        >
                          created at {new Date(user.createdAt).toDateString()}
                        </div>
                      </div>
                    }
                  />
                  <div className="hide-xs">
                    created at {new Date(user.createdAt).toDateString()}
                  </div>
                </Skeleton>
              </List.Item>
            );
          }}
        />
        <div
          style={{
            display: "flex",
            marginTop: 40,
            marginBottom: 20,
            justifyContent: "center",
          }}
        >
          {fetchReports.loading ? (
            <Spin size="large" />
          ) : (
            nextToken && (
              <a
                onClick={() => {
                  const values: FilterForm = form.getFieldsValue();
                  loadRecipes(values);
                }}
                className="custom-btn custom-btn--big custom-btn--green btn--animated"
              >
                Load more
              </a>
            )
          )}
        </div>
      </AdminLayout>
    </>
  );
};

export default Users;
