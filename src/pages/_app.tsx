import type { AppProps } from "next/app";
import { Auth } from "aws-amplify";
import Amplify from "aws-amplify";
import { UserProvider } from "contexts";
import React, { useEffect, useState } from "react";
import Router, { NextRouter, useRouter } from "next/router";
import { Loader } from "components";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "styles/main.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import config from "aws-exports";

Amplify.configure(config);

NProgress.configure({ easing: "ease", speed: 500, showSpinner: false });
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    checkAuth(router);
  }, [router]);

  const checkAuth = async (route: NextRouter) => {
    const isAuth = route.pathname.startsWith("/auth");
    const isPrivate = route.pathname.startsWith("/account");
    const hasToken = localStorage.getItem("token");
    setLoading(true);

    if (!isAuth && !hasToken) {
      if (isPrivate) await route.push("/auth/login");
    } else if (isAuth && hasToken) {
      await route.push("/");
    }

    setLoading(false);
  };

  return (
    <UserProvider>
      <Loader loading={loading}>
        <Component {...pageProps} />
      </Loader>
    </UserProvider>
  );
};
export default MyApp;
