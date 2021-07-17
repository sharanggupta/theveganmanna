import { useState, useEffect } from "react";
import Head from "next/head";
import { Col, Row, Image, Modal, Button, Input, message } from "antd";
import { Form } from "antd";
import { Comment as AntdComment, Avatar, Space, Spin } from "antd";
import { MainLayout } from "layouts";
import {
  HeartFilled,
  HeartOutlined,
  ReadOutlined,
  ClockCircleOutlined,
  UserOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/router";
import { Card } from "components";
import { nanoid } from "nanoid";
import { useUser } from "contexts";
import { useRequest } from "ahooks";
import { Comment, Recipe } from "interfaces";
import { getRecipeApi } from "api";
import { createCommentApi, deleteCommentApi } from "api";
import { Storage } from "aws-amplify";

const { TextArea } = Input;

const RecipeComponent = () => {
  const router = useRouter();
  const { query, isReady } = router;
  const slug: any = query.slug;

  const { data, loading, refresh } = useRequest<Recipe>(
    () => getRecipeApi(slug),
    {
      ready: isReady,
    }
  );

  console.log("loading: ", loading);
  console.log("data: ", data);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [commentId, setCommentId] = useState<string>("");
  const [user] = useUser();

  const [urls, setUrls] = useState<any>(null);

  const createAction = useRequest(createCommentApi, {
    manual: true,
    onSuccess: () => {
      message.success("Comment created");
      refresh();
    },
    onError: () => {
      message.error("Comment not created");
    },
  });

  const deleteAction = useRequest(deleteCommentApi, {
    manual: true,
    onSuccess: () => {
      setCommentId("");
      message.success("Comment deleted");
      refresh();
    },
    onError: () => {
      message.error("Comment not deleted");
    },
  });

  const [url, setUrl] = useState<any>(null);

  const onFinish = async (values: any) => {
    if (data) {
      const input: Comment = {
        id: nanoid(),
        recipeID: data?.id,
        userID: user?.id,
        content: values.content,
      };
      createAction.run(input);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  async function asyncForEach(array: any, callback: any) {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array);
    }
  }

  const fetchImage = async (data: Recipe) => {
    if (data.user?.image) {
      const signedUrl: any = await Storage.get(data.user.image);
      setUrl(signedUrl);
    }

    const signedUrls: any = {};

    await asyncForEach(data.comments?.items, async (comment: Comment) => {
      if (comment.user?.image) {
        const signedUrl: any = await Storage.get(comment.user.image);
        signedUrls[`${comment.id}`] = signedUrl;
      } else {
        signedUrls[`${comment.id}`] = null;
      }
    });

    setUrls(signedUrls);
  };

  useEffect(() => {
    if (!loading) {
      if (data) {
        if (data.isArchived === 1) {
          if (user.id === data.userID) {
            message.error("Your recipe is archived, please update your recipe");
            router.push(`/account/recipes/edit/${data.id}`);
          } else {
            message.error("Recipe is archived");
            router.push("/");
          }
        } else {
          fetchImage(data);
        }
      } else {
        message.error("Recipe not found");
        router.push("/");
      }
    }
  }, [loading]);

  return (
    <>
      {!loading && data && urls ? (
        <MainLayout title={data.recipeName} heading={data.recipeName}>
          <div className="recipe">
            <Card recipe={data} full={true} />
            <div className="author">
              {url ? <img src={url} /> : <img src="/author.png" />}
              <div className="author__info">
                <p className="author__name">Hi! I'm {data.user?.id}</p>
                <p className="author__bio">{data.user?.bio}</p>
                <a
                  onClick={() => router.push(`/profile/${data.user?.id}`)}
                  className="custom-btn custom-btn--small custom-btn--green"
                >
                  View Profile
                </a>
              </div>
            </div>
            <div className="comment">
              <h3 className="heading-tertiary">Comment</h3>
              {user && user?.sub !== "" && (
                <Form
                  initialValues={{
                    content: "",
                  }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  className="comment__box"
                >
                  <div style={{ width: "100%" }}>
                    <Form.Item
                      name="content"
                      rules={[
                        {
                          required: true,
                          message: "Required",
                        },
                      ]}
                    >
                      <TextArea
                        placeholder="Enter comment here"
                        required
                        rows={4}
                      />
                    </Form.Item>
                    <Form.Item style={{ marginTop: 10, textAlign: "right" }}>
                      <Button
                        icon={<PlusCircleOutlined />}
                        loading={createAction.loading}
                        type="primary"
                        htmlType="submit"
                      >
                        Post comment
                      </Button>
                    </Form.Item>
                  </div>
                </Form>
              )}
              {data?.comments?.items?.map((comment: Comment) => {
                return (
                  <AntdComment
                    author={
                      <a
                        onClick={() =>
                          router.push(`/profile/${comment.userID}`)
                        }
                      >
                        {comment.userID}
                      </a>
                    }
                    avatar={
                      <span
                        onClick={() =>
                          router.push(`/profile/${comment.userID}`)
                        }
                      >
                        <Avatar
                          src={urls[comment.id] || "/leaf.png"}
                          alt="Alice"
                        />
                      </span>
                    }
                    content={<p>{comment.content}</p>}
                    datetime={
                      <div style={{ display: "flex", gap: 20 }}>
                        <p>
                          {comment?.createdAt &&
                            new Date(comment.createdAt).toDateString()}
                        </p>

                        {user?.id === comment.userID && (
                          <p
                            onClick={() => {
                              setCommentId(comment.id);
                              setIsModalVisible(true);
                            }}
                            style={{ color: "#FD4E86", cursor: "pointer" }}
                          >
                            Delete
                          </p>
                        )}
                      </div>
                    }
                  />
                );
              })}
              {data?.comments?.items?.length === 0 && <p>No comments</p>}
            </div>
          </div>
          <Modal
            title="Delete Comment"
            centered
            visible={isModalVisible}
            onOk={() => setIsModalVisible(false)}
            onCancel={() => setIsModalVisible(false)}
            footer={[
              <Button key="back" onClick={() => setIsModalVisible(false)}>
                Cancel
              </Button>,
              <Button
                key="submit"
                type="primary"
                className="ant-btn__danger"
                loading={deleteAction.loading}
                onClick={() => {
                  deleteAction.run(commentId);
                  setIsModalVisible(false);
                }}
              >
                OK
              </Button>,
            ]}
          >
            <p>Are you sure you want to delete your comment?</p>
          </Modal>
        </MainLayout>
      ) : (
        <MainLayout title="Loading">
          <div style={{ textAlign: "center" }}>
            <Spin size="large" />
          </div>
        </MainLayout>
      )}
    </>
  );
};

export default RecipeComponent;
