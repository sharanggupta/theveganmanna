import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { Spin } from "antd";
import { Auth, API } from "aws-amplify";

const instagram = () => {
  const router = useRouter();
  const code: any = router.query.code;

  const exchangeCodeForToken = async () => {
    const res = await API.post("instagram", "/auth/token", { code });

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
