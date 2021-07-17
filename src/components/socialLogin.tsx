import React from "react";
import { Auth } from "aws-amplify";
import { Button, Divider, message } from "antd";
import { GoogleOutlined, InstagramOutlined } from "@ant-design/icons";

const SocialLogin = () => {
  const googleLogin = () => {
    const params: any = { provider: "Google" };
    Auth.federatedSignIn(params);
  };

  const instragramLogin = () => {
    const appId = "581301996194287";
    const redirectUri = "https://www.veganmanna.org/auth/instagram/";
    const url = `https://api.instagram.com/oauth/authorize?client_id=${appId}&redirect_uri=${redirectUri}&scope=user_profile,user_media&response_type=code`;

    window.location.href = url;
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
          icon={<InstagramOutlined />}
          onClick={() => instragramLogin()}
          type="primary"
          htmlType="button"
        >
          Continue with Instragram
        </Button>
      </div>
    </>
  );
};

export default SocialLogin;
