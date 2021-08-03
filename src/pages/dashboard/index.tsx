import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AdminLayout } from "layouts";
import { Report } from "interfaces";
import { useRequest } from "ahooks";
import { Button, Spin, List, Modal, Popconfirm } from "antd";
import { message, Skeleton, Menu, Dropdown } from "antd";
import { Row, Col, Form, Input, Select } from "antd";
import { getReports, sendMessage, updateUserStatus } from "api";
import { changeRecipeStatus } from "api";
import { EllipsisOutlined, SearchOutlined } from "@ant-design/icons";
import { useUser } from "contexts";

const Dashboard = () => {
  const [reportModalVisible, setReportModalVisible] = useState(false);
  const [banModalVisible, setBanModalVisible] = useState(false);
  const [currentReport, setCurrentReport] = useState<Report | null>(null);
  const [nextToken, setNextToken] = useState<string | null>(null);
  const [reports, setReports] = useState<Report[]>([]);
  const [user] = useUser();

  type ReportsProps = {
    items: Report[];
    nextToken?: string;
  };

  const { data, loading, refresh, run } = useRequest<ReportsProps>((value) =>
    getReports(value || { nextToken })
  );

  const fetchReports = useRequest<ReportsProps>(getReports, {
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
      setReports(data.items);
      setNextToken(data?.nextToken || null);
    }
  }, [loading]);

  useEffect(() => {
    if (!fetchReports.loading) {
      if (fetchReports.data?.items) {
        setReports([...reports, ...fetchReports.data?.items]);
        setNextToken(fetchReports?.data.nextToken || null);
      }
    }
  }, [fetchReports.loading]);

  const loadRecipes = async () => {
    await fetchReports.run({ nextToken });
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

  const archiveRecipe = async (data: {
    recipeID: string;
    isArchived: boolean;
  }) => {
    const { isArchived } = data;
    message.success(isArchived ? "Recipe unarchived" : "Recipe archived");

    // reverse the status
    await changeRecipeStatus({ ...data, isArchived: isArchived ? 0 : 1 });
    refresh();
  };

  const sendWarningMessage = async (data: {
    userID: string;
    recipeID: string;
    recipeName: string;
  }) => {
    message.success("Warning message sent to the recipe owner");

    const { userID, recipeID, recipeName } = data;
    sendMessage({
      userID,
      recipeID,
      message: `Your ${recipeName} recipe contains non-vegan ingredients and is reported. Please update your recipe.`,
    });
  };

  const isUpdated = (report: Report) => {
    // const index = report.reportedUsers.length - 1;
    // const lastReportedDate = report.reportedUsers[index].createdAt;
    const firstReportedDate = report.reportedUsers[0].createdAt;
    const recipeUpdatedDate = report.recipe?.updatedAt;

    if (recipeUpdatedDate) {
      return `${
        firstReportedDate < recipeUpdatedDate
          ? "Recipe has updated after report"
          : "Recipe has not updated after report yet"
      }`;
    }

    return "";
  };

  type FilterForm = {
    recipeName: string;
    username: string;
  };

  const onFinish = async (values: FilterForm) => {
    const { recipeName, username } = values;

    const filterProp: any = {};
    if (recipeName) filterProp["recipeName"] = recipeName.trim();
    if (username) filterProp["username"] = username.trim();
    run({ nextToken, filterProp });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <AdminLayout title="Dashboard" heading="Dashboard">
        <Form
          className="recipe-form"
          style={{ display: "flex" }}
          initialValues={{
            recipeName: "",
            username: "",
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <div style={{ width: "100%" }}>
            <Row gutter={{ xs: 8, sm: 8, md: 16, lg: 16 }}>
              <Col className="gutter-row" span={12}>
                <p>Recipe name</p>
                <Form.Item name="recipeName">
                  <Input placeholder="Recipe name" />
                </Form.Item>
              </Col>
              <Col className="gutter-row" span={12}>
                <p>Username</p>
                <Form.Item name="username">
                  <Input placeholder="Username" />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item style={{ textAlign: "right" }}>
              <Button
                icon={<SearchOutlined />}
                type="primary"
                htmlType="submit"
              >
                Filter
              </Button>
            </Form.Item>
          </div>
        </Form>
        <List
          className="demo-loadmore-list"
          loading={loading}
          itemLayout="horizontal"
          dataSource={reports}
          renderItem={(report: Report) => {
            if (!report.recipe) return;

            const isActive: boolean = report.recipe?.user?.isActive === 1;
            const isArchived: boolean = report.recipe.isArchived === 1;
            const userID = report.recipe?.userID;
            const recipeName = report.recipe?.recipeName;

            return (
              <List.Item
                actions={[
                  <>
                    <div className="report-actions">
                      <a
                        onClick={() => {
                          setCurrentReport(report);
                          setReportModalVisible(true);
                        }}
                        key="show-reported-users"
                      >
                        show reporting users
                      </a>

                      <a
                        onClick={() =>
                          archiveRecipe({ recipeID: report.id, isArchived })
                        }
                        style={{
                          width: 100,
                          textAlign: "left",
                        }}
                        className="text-danger"
                        key="send-warning"
                      >
                        {isArchived ? "unarchive recipe" : "archive recipe"}
                      </a>

                      <a
                        onClick={() =>
                          sendWarningMessage({
                            userID,
                            recipeID: report.id,
                            recipeName,
                          })
                        }
                        className="text-warning"
                        key="send-warning"
                      >
                        send warning
                      </a>

                      <Popconfirm
                        title={
                          isActive
                            ? "Are you sure to remove ban?"
                            : "Are you sure to ban user?"
                        }
                        onConfirm={() => banAction({ userID, isActive })}
                        okText="Yes"
                        cancelText="No"
                        placement="topRight"
                      >
                        <a
                          className="text-danger"
                          key="ban-user"
                          style={{
                            width: 80,
                            textAlign: "left",
                          }}
                        >
                          {isActive ? "ban user" : "unban user"}
                        </a>
                      </Popconfirm>
                    </div>

                    <div className="report-actions-mobile">
                      <Dropdown
                        trigger={["click"]}
                        overlay={
                          <Menu>
                            <Menu.Item
                              onClick={() => {
                                setCurrentReport(report);
                                setReportModalVisible(true);
                              }}
                              key="show-reported-users"
                            >
                              <a>show reporting users</a>
                            </Menu.Item>
                            <Menu.Item
                              onClick={() =>
                                archiveRecipe({
                                  recipeID: report.id,
                                  isArchived,
                                })
                              }
                              key="send-warning"
                            >
                              <a className="text-danger">
                                {isArchived
                                  ? "unarchive recipe"
                                  : "archive recipe"}
                              </a>
                            </Menu.Item>
                            <Menu.Item
                              onClick={() =>
                                sendWarningMessage({
                                  userID,
                                  recipeID: report.id,
                                  recipeName,
                                })
                              }
                              key="send-warning"
                            >
                              <a className="text-warning">send warning</a>
                            </Menu.Item>
                            <Menu.Divider />
                            <Menu.Item
                              onClick={() => {
                                setCurrentReport(report);
                                setBanModalVisible(true);
                              }}
                              key="ban-user"
                            >
                              <a
                                className="text-danger"
                                style={{
                                  width: 80,
                                  display: "inline-block",
                                  textAlign: "left",
                                }}
                              >
                                {isActive ? "ban user" : "unban user"}
                              </a>
                            </Menu.Item>
                          </Menu>
                        }
                      >
                        <EllipsisOutlined
                          style={{ fontSize: "1.6rem", cursor: "pointer" }}
                        />
                      </Dropdown>
                    </div>
                  </>,
                ]}
              >
                <Skeleton avatar title={false} loading={loading} active>
                  <List.Item.Meta
                    title={
                      <Link href={`/recipes/${report.id}`}>
                        {report.recipe?.recipeName}
                      </Link>
                    }
                    description={
                      <div>
                        <Link href={`/profile/${report.recipe.userID}`}>
                          {report.recipe?.userID}
                        </Link>
                        <div
                          className="show-xs"
                          style={{ color: "rgba(0, 0, 0, 0.65)" }}
                        >
                          Reported by <strong>{report.count}</strong> users{" "}
                          <br /> {isUpdated(report)}
                        </div>
                      </div>
                    }
                  />
                  <div className="hide-xs" style={{ width: 240 }}>
                    Reported by <strong>{report.count}</strong> users <br />{" "}
                    {isUpdated(report)}
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
                onClick={() => loadRecipes()}
                className="custom-btn custom-btn--big custom-btn--green btn--animated"
              >
                Load more
              </a>
            )
          )}
        </div>

        <Modal
          title="Reported Users"
          centered
          visible={reportModalVisible}
          onOk={() => setReportModalVisible(false)}
          onCancel={() => setReportModalVisible(false)}
          footer={[
            <Button key="back" onClick={() => setReportModalVisible(false)}>
              OK
            </Button>,
          ]}
        >
          {currentReport ? (
            currentReport.reportedUsers.map((user, index) => (
              <p>
                {index + 1}){" "}
                <Link href={`/profile/${user.userID}`}>{user.userID}</Link> -{" "}
                {new Date(user.createdAt).toDateString()}
              </p>
            ))
          ) : (
            <Spin size="large" />
          )}
        </Modal>

        <Modal
          title={
            currentReport?.recipe?.user?.isActive === 1
              ? "Ban user"
              : "Unban user"
          }
          centered
          visible={banModalVisible}
          onOk={() => setBanModalVisible(false)}
          onCancel={() => setBanModalVisible(false)}
          footer={[
            <Button key="back" onClick={() => setBanModalVisible(false)}>
              Cancel
            </Button>,
            <Button
              key="submit"
              type="primary"
              className="ant-btn__danger"
              onClick={() => {
                const userID: any = currentReport?.recipe?.userID;
                const isActive = currentReport?.recipe?.user?.isActive === 1;

                banAction({ userID, isActive });
                setBanModalVisible(false);
              }}
            >
              OK
            </Button>,
          ]}
        >
          Are you sure to{" "}
          {currentReport?.recipe?.user?.isActive === 1
            ? "ban"
            : "remove ban from"}{" "}
          <strong>{currentReport?.recipe?.userID}</strong>
        </Modal>
      </AdminLayout>
    </>
  );
};

export default Dashboard;
