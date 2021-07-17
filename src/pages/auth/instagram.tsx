import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { Spin } from "antd";
import axios from "axios";
import { Auth, API } from "aws-amplify";

const instagram = () => {
  const router = useRouter();
  const code: any = router.query.code;

  const redirectUri = "https://veganmanna.org/auth/instagram/";

  const exchangeCodeForToken = async () => {
    const res = await axios.post(
      "https://api.instagram.com/oauth/access_token",
      { code }
    );

    console.log("res:", res);
  };

  useEffect(() => {
    if (router.isReady) {
      exchangeCodeForToken();
    }
  }, [router.isReady]);

  return router.isReady ? <div>{code}</div> : <Spin />;
};

export default instagram;
