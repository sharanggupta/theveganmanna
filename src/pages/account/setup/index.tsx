import { useRequest } from "ahooks";
import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { Card, Col, Row, Button, Input, message } from "antd";
import { login, me, createUserApi } from "api";
import { useUser } from "contexts";
import { User } from "interfaces";
import { Form } from "antd";
import { NotFoundLayout } from "layouts";
import { useRouter } from "next/router";
import { LockOutlined, LoginOutlined, UserOutlined } from "@ant-design/icons";
import { useWindow } from "hooks";
import { Auth } from "aws-amplify";

const key = "login";

const Setup = () => {
  const [width] = useWindow();
  const [inputCount, setInputCount] = useState(12);

  const router = useRouter();
  const [form] = Form.useForm();
  const [user, dispatchUser] = useUser();

  const { loading, run } = useRequest(createUserApi, {
    manual: true,
    onSuccess: async () => {
      message.success({ content: "success!", key });
      dispatchUser({ type: "UPDATE", user: (await me()) as User });
      setTimeout(() => {
        router.push("/");
      }, 0);
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
      <NotFoundLayout title="Getting Started" heading="Getting Started">
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
                  placeholder="username"
                  prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                />
              </Form.Item>
              <Form.Item
                style={{ display: "flex", justifyContent: "flex-end" }}
              >
                <Button type="primary" htmlType="submit">
                  Continue
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </NotFoundLayout>
    </>
  );
};

export default Setup;
