import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { Spin } from "antd";
import { Auth, API } from "aws-amplify";

const instagram = () => {
  const router = useRouter();
  const code: any = router.query.code;

  const exchangeCodeForToken = async () => {
    const res = await API.post("instagram", "/auth/token", {
      body: {
        code: "AQBmJ7Ip6kpOWh9VhaNNEEJa9SzOHBwsyyajA-8HQxupuZ-UzyGY5dCT7HrVxuRZ4Vlevl7SQTPifKc-tgonu6FRRxkrHz7TgOQsN2WcnAxicsh8esJOrhb2BdnqelKIp0Mpqg02pS3P1HXzDiu7EygtxNH2GKoE99t8ZudVgw-5z-Hxq0a_LUOsb6PGBA-u-zvdw2b5Rd5xtapAEhnQkg0OZh68WZZXtDsZwxjMWHU5-g",
      },
    });

    // const data: { access_token: string; user_id: number } = JSON.parse(
    //   res.data
    // );

    const data: { access_token: string; user_id: number } = {
      access_token:
        "IGQVJVRDdrZAzhXQzVzQTFLRjJSMFUtSklQcHRfdHBDVTEyVUxFd1UxMGh5RXRlWldpNXI1WVpKem9Kc3J1S1RGNDgyUXRlYkJiYXpQMXVxRTNGY3BPdVM2RnJjS3RaczZAHbDFBNzRNU3liUTQ5X2tSM3VOR09mbXRTNWZAr",
      user_id: 17841400707366654,
    };

    const graphqlRes = await API.post("instagram", "/auth/username", {
      body: { ...data },
    });

    const graphqlData: { id: string; username: number } = JSON.parse(
      graphqlRes.data
    );

    // instagram username
    const username = graphqlData.username;

    console.log("username:", username);

    // get username by user_id and access_token

    // create user on dynamodb

    // get open id token

    // const provider: string = "developer";

    // const federatedResponse: any = {
    //   identity_token: "",
    //   expires_at: Date.now() + 60 * 60 + 1000,
    // };

    // const federatedUser: any = null;

    // call federatedSignIn(provider, federatedResponse, federatedUser);
  };

  useEffect(() => {
    if (router.isReady) {
      exchangeCodeForToken();
    }
  }, [router.isReady]);

  return router.isReady ? <div>{code}</div> : <Spin />;
};

export default instagram;
