import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { Spin } from "antd";
import axios from "axios";
import { Auth, API } from "aws-amplify";

const instagram = () => {
  const router = useRouter();
  const code: any = router.query.code;

  const redirectUri = "https://www.veganmanna.org/auth/instagram/";

  const exchangeCodeForToken = async () => {
    var formData = new FormData();
    formData.append("client_id", "581301996194287");
    formData.append("client_secret", "0ddcf245704d6fae9d77b2383b04dc4c");
    formData.append("grant_type", "authorization_code");
    formData.append("redirect_uri", redirectUri);
    formData.append("code", code);

    const res = await axios.post(
      "https://api.instagram.com/oauth/access_token",
      formData
    );

    // const res = {
    //   data: {
    //     access_token:
    //       "IGQVJXOFMxbEs2V3RkemdMQ3NWN25uZAGJtQXZAlWTZAIUGhMWmV3T3pQV2k4STB4cTJHSktTbVBKaUhHN19TT2dDb3ZATSnFKc2xfTEZAvZADhFVEF2WEZACc2ZAGS1I3SDdUbERvX2NGRUVrMDA2MnpnUWowM3NSbmU1NlVWY3I0",
    //     user_id: 17841400707366654,
    //   },
    // };

    console.log("res:", res);

    // const res = await API.post("instagram", "/auth", {});
    // console.log("res:", res);
  };

  useEffect(() => {
    if (router.isReady) {
      exchangeCodeForToken();
    }
  }, [router.isReady]);

  return router.isReady ? <div>{code}</div> : <Spin />;
};

export default instagram;
