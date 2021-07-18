import { useRequest } from "ahooks";
import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { Card, Col, Row, Button, Input, message } from "antd";
import { register, me } from "api";
import { useUser } from "contexts";
import { User } from "interfaces";
import { Form } from "antd";
import { AuthLayout } from "layouts";
import { useRouter } from "next/router";
import { MainLayout } from "layouts";
import { LockOutlined, LoginOutlined, UserOutlined } from "@ant-design/icons";
import { useWindow } from "hooks";
import { SocialLogin } from "components";

const key = "register";

const Register = () => {
  const [width] = useWindow();
  const [inputCount, setInputCount] = useState(12);

  const router = useRouter();
  const [form] = Form.useForm();
  const [, dispatchUser] = useUser();
  const { loading, run } = useRequest(register, {
    manual: true,
    onSuccess: async (result) => {
      if (result) {
        message.success({ content: "success!", key });
        router.push("/auth/login");
      }
    },
    onError: () => {
      message.error({ content: "error!", key });
    },
  });

  useEffect(() => {
    setInputCount(getCount());
  }, [width]);

  const getCount = () => {
    if (width < 481) {
      return 24;
    } else if (width < 769) {
      return 18;
    } else if (width < 1140) {
      return 12;
    } else {
      return 8;
    }
  };

  return (
    <>
      <MainLayout title="Register" heading="Register">
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify="center">
          <Col
            className="gutter-row"
            span={inputCount}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 30,
            }}
          >
            <Form
              form={form}
              style={{ width: "100%" }}
              initialValues={{
                email: "luckytuvshee@protonmail.com",
                username: "lindsay",
                password: "lindsay_@_example123",
                password_confirm: "lindsay_@_example123",
              }}
              onFinish={(values) => {
                message.loading({ content: "loading!", key });
                console.log(values);
                run(values);
              }}
            >
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Required",
                  },
                ]}
              >
                <Input
                  placeholder="Username"
                  type="text"
                  prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                />
              </Form.Item>

              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Required",
                  },
                ]}
              >
                <Input
                  placeholder="Email address"
                  type="email"
                  prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Required",
                  },
                ]}
              >
                <Input.Password
                  placeholder="Password"
                  prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                />
              </Form.Item>

              <Form.Item
                name="password_confirm"
                rules={[
                  {
                    required: true,
                    message: "Required",
                  },
                ]}
              >
                <Input.Password
                  placeholder="Password confirm"
                  prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={loading}
                  style={{ padding: "0 20px" }}
                  className="full-width-xs"
                >
                  Register
                </Button>
              </Form.Item>

              <SocialLogin />
            </Form>
          </Col>
        </Row>
      </MainLayout>
    </>
  );
};

export default Register;
