import React from "react";
import { Auth } from "aws-amplify";
import { Button, Divider, message } from "antd";
import { GoogleOutlined, FacebookFilled } from "@ant-design/icons";

const SocialLogin = () => {
  const googleLogin = () => {
    const params: any = { provider: "Google" };
    Auth.federatedSignIn(params);
  };

  const facebookLogin = () => {
    const params: any = { provider: "Facebook" };
    Auth.federatedSignIn(params);
  };

  return (
    <>
      <Divider plain>or</Divider>
      <div className="social-login">
        <Button
          icon={<GoogleOutlined />}
          onClick={() => googleLogin()}
          type="primary"
          htmlType="button"
        >
          Continue with Google
        </Button>

        <Button
          icon={<FacebookFilled />}
          onClick={() => facebookLogin()}
          type="primary"
          htmlType="button"
        >
          Continue with Facebook
        </Button>
      </div>
    </>
  );
};

export default SocialLogin;
