import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { LoadingOutlined } from "@ant-design/icons";
import { createInstagramUser } from "api";
import { Auth, API } from "aws-amplify";
import { message } from "antd";

const instagram = () => {
  const router = useRouter();
  const code: any = router.query.code;

  const exchangeCodeForToken = async () => {
    const res = await API.post("instagram", "/auth/token", { body: { code } });

    const data: { access_token: string; user_id: number } = JSON.parse(
      res.data
    );

    const graphqlRes = await API.post("instagram", "/auth/username", {
      body: { ...data },
    });

    console.log("data:", data);

    const graphqlData: { id: string; username: string } = JSON.parse(
      graphqlRes.data
    );

    // instagram username
    const username = graphqlData.username;

    // get token
    const openIdRes = await API.post("instagram", "/auth", {
      body: { username },
    });
    const openIdData: { IdentityId: string; Token: string } = openIdRes.data;

    console.log(openIdData.IdentityId);
    console.log(openIdData.Token);

    await createInstagramUser({ username });

    const provider: string = "developer";

    const federatedResponse: any = {
      token: openIdData.Token,
      identity_id: openIdData.IdentityId,
      expires_at: new Date().getTime() + 6 * 60 * 60 * 1000,
    };

    const federatedUser: any = { username };

    await Auth.federatedSignIn(provider, federatedResponse, federatedUser);

    router.push("/");
  };

  useEffect(() => {
    if (router.isReady) {
      if (router.query.code) {
        exchangeCodeForToken();
      } else {
        message.error("Something went wrong, please try again");
        router.push("/auth/login");
      }
    }
  }, [router.isReady]);

  return (
    <div
      style={{
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
      }}
    >
      <LoadingOutlined style={{ fontSize: "1.2rem" }} />
      <span style={{ marginLeft: 10, fontSize: "1.2rem" }}>
        Authenticating via your instagram account
      </span>
    </div>
  );
};

export default instagram;
