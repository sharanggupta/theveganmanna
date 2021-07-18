import { useRequest } from "ahooks";
import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { Card, Col, Row, Button, Input, message } from "antd";
import { login, me } from "api";
import { useUser } from "contexts";
import { User } from "interfaces";
import { Form } from "antd";
import { AuthLayout } from "layouts";
import { useRouter } from "next/router";
import { LockOutlined, LoginOutlined, UserOutlined } from "@ant-design/icons";
import { useWindow } from "hooks";
import { SocialLogin } from "components";

const key = "login";

const Login = () => {
  const [width] = useWindow();
  const [inputCount, setInputCount] = useState(12);

  const router = useRouter();
  const [form] = Form.useForm();
  const [, dispatchUser] = useUser();
  const { loading, run } = useRequest(login, {
    manual: true,
    onSuccess: async (result) => {
      if (result) {
        message.success({ content: "success!", key });
        dispatchUser({ type: "SIGN_IN", user: (await me()) as User });
        router.push("/");
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
      <AuthLayout title="Login" heading="Login">
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
                username: "",
                password: "",
              }}
              onFinish={(values: any) => {
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

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={loading}
                  style={{ padding: "0 20px" }}
                  className="full-width-xs"
                >
                  Login
                </Button>
              </Form.Item>

              <SocialLogin />
            </Form>
          </Col>
        </Row>
      </AuthLayout>
    </>
  );
};

export default Login;
