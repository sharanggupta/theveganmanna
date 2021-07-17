import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import { Col, Row, Button, Input, message, Spin } from "antd";
import { Form } from "antd";
import { MainLayout } from "layouts";
import {
  SaveOutlined,
  HeartFilled,
  HeartOutlined,
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
import { Card } from "components";
import { useUser } from "contexts";
import { API, Auth, graphqlOperation, Storage } from "aws-amplify";
import { updateUser } from "graphql/mutations";

const { TextArea } = Input;

const Profile = () => {
  const [user] = useUser();
  const [url, setUrl] = useState<any>(null);
  const uploadRef = useRef<any>(null);
  const [initialValues, setInitialValues] = useState<any>(null);

  const onFinish = async (values: any) => {
    try {
      if (
        !user.externalProvider &&
        values.currentPassword !== "" &&
        values?.newPassword === ""
      ) {
        message.warning("Enter your new password");
        return;
      }

      const input = {
        id: user.id,
        bio: values.bio,
        social: {
          instagram: values.instagram,
          twitter: values.twitter,
          facebook: values.facebook,
        },
      };

      await API.graphql(graphqlOperation(updateUser, { input }));

      const currentAuth = await Auth.currentAuthenticatedUser();
      await Auth.changePassword(
        currentAuth,
        values.currentPassword,
        values.newPassword
      );

      message.success("Profile info updated");

      window.location.reload();
    } catch (err) {
      console.log("profile info err:", err);
      if (err?.message) {
        if (err.code === "NotAuthorizedException") {
          message.error("Current password is incorrect");
        } else message.error(err.message);
      } else {
        message.error("Profile info not updated");
      }
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const fetchImage = async (image: string) => {
    const signedUrl = await Storage.get(image);
    setUrl(signedUrl);
  };

  useEffect(() => {
    if (user && user.image) {
      fetchImage(user.image);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      setInitialValues({ bio: user.bio, ...user.social });
    }
  }, []);

  const previewImage = (e: any) => {
    const preview = document.querySelector(
      "#profile_image"
    ) as HTMLImageElement;
    const image = e.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = async () => {
      preview.src = reader.result + "";
      if (image.type === "image/jpeg" || image.type === "image/png") {
        const fileName: string = `${Date.now()}-${image.name}`;
        const res: any = await Storage.put(fileName, image, {
          contentType: image.type,
        });

        try {
          const input = {
            id: user.id,
            image: res.key,
          };
          console.log("input:", input);
          await API.graphql(graphqlOperation(updateUser, { input }));
          message.success("Profile image updated");
        } catch (err) {
          console.log("profile image err:", err);
          message.error("Profile image not updated");
        }
      } else {
        message.success("Please upload jpeg or png");
      }
    };
  };

  return (
    <>
      {user && initialValues ? (
        <MainLayout title="Profile" heading="Profile">
          <div className="profile">
            <div className="author" style={{ alignItems: "flex-start" }}>
              <div className="author__authenticated">
                <div className="author__image">
                  {user.image ? (
                    <img id="profile_image" src={url} />
                  ) : (
                    <img
                      style={{ width: 200, height: 200 }}
                      id="profile_image"
                      src="/author.png"
                    />
                  )}
                  <a
                    onClick={() => uploadRef.current.click()}
                    className="upload custom-btn custom-btn--small custom-btn--green"
                  >
                    Upload image
                  </a>
                  <input
                    ref={uploadRef}
                    type="file"
                    style={{ display: "none" }}
                    onChange={previewImage}
                  />
                </div>

                <div className="author__info">
                  <p className="author__name" style={{ textAlign: "center" }}>
                    Hi! I'm {user.id}
                  </p>
                  <p className="author__bio">
                    {user.bio ? (
                      user.bio
                    ) : (
                      <p style={{ textAlign: "center", fontStyle: "italic" }}>
                        your bio here
                      </p>
                    )}
                  </p>

                  <div
                    className="author__social"
                    style={{ textAlign: "center" }}
                  >
                    {user.social?.instagram ? (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={`https://instagram.com/${user.social?.instagram}`}
                      >
                        <InstagramOutlined className="icon" />
                      </a>
                    ) : (
                      <InstagramOutlined className="icon" />
                    )}
                    {user.social?.twitter ? (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={`https://twitter.com/${user.social?.twitter}`}
                      >
                        <TwitterOutlined className="icon" />
                      </a>
                    ) : (
                      <TwitterOutlined className="icon" />
                    )}
                    {user.social?.facebook ? (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={`https://facebook.com/${user.social?.facebook}`}
                      >
                        <FacebookOutlined className="icon" />
                      </a>
                    ) : (
                      <FacebookOutlined className="icon" />
                    )}
                  </div>
                </div>
              </div>
              <Form
                initialValues={{
                  bio: user.bio,
                  ...user.social,
                  currentPassword: "",
                  newPassword: "",
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <div style={{ width: "100%" }}>
                  <p>Bio</p>
                  <Form.Item
                    name="bio"
                    rules={[
                      {
                        required: true,
                        message: "Required",
                      },
                    ]}
                  >
                    <TextArea spellCheck={false} placeholder="bio" rows={4} />
                  </Form.Item>

                  <p>Instagram</p>
                  <Form.Item
                    name="instagram"
                    rules={[
                      {
                        message: "Required",
                      },
                    ]}
                  >
                    <Input
                      addonBefore="https://instagram.com/"
                      placeholder="instagram username"
                    />
                  </Form.Item>

                  <p>Twitter</p>
                  <Form.Item
                    name="twitter"
                    rules={[
                      {
                        message: "Required",
                      },
                    ]}
                  >
                    <Input
                      addonBefore="https://twitter.com/"
                      placeholder="twitter username"
                    />
                  </Form.Item>

                  <p>Facebook</p>
                  <Form.Item
                    name="facebook"
                    rules={[
                      {
                        message: "Required",
                      },
                    ]}
                  >
                    <Input
                      addonBefore="https://facebook.com/"
                      placeholder="facebook username"
                    />
                  </Form.Item>

                  {!user.externalProvider && (
                    <>
                      <p>Current Password</p>
                      <Form.Item name="currentPassword">
                        <Input.Password />
                      </Form.Item>

                      <p>New Confirmation</p>
                      <Form.Item name="newPassword">
                        <Input.Password />
                      </Form.Item>
                    </>
                  )}

                  <Form.Item style={{ textAlign: "right" }}>
                    <Button
                      icon={<SaveOutlined />}
                      type="primary"
                      htmlType="submit"
                    >
                      Update Profile
                    </Button>
                  </Form.Item>
                </div>
              </Form>
            </div>

            <div className="popular">
              <div className="u-center-text u-margin-bottom-medium">
                <h2 className="heading-secondary">Most popular</h2>
              </div>

              {/* <div className="cards">
              {[
                {
                  slug: "strawberry-waffles",
                  image: "/strawberry-waffles.jpg",
                },
                {
                  slug: "strawberry-waffles",
                  image: "/strawberry-waffles.jpg",
                },
                {
                  slug: "strawberry-waffles",
                  image: "/strawberry-waffles.jpg",
                },
                {
                  slug: "strawberry-waffles",
                  image: "/strawberry-waffles.jpg",
                },
                {
                  slug: "strawberry-waffles",
                  image: "/strawberry-waffles.jpg",
                },
                {
                  slug: "strawberry-waffles",
                  image: "/strawberry-waffles.jpg",
                },
              ].map((recipe) => (
                <Card recipe={recipe} />
              ))}
            </div> */}
            </div>
          </div>
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

export default Profile;
