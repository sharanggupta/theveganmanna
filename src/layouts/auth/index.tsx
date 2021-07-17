import { Layout } from "antd";
import Head from "next/head";
import React from "react";
import Footer from "./footer";
import Nav from "./nav";
import { Header } from "components";
// import Sidebar from "./sidebar";

type Props = {
  home?: boolean;
  title?: any;
  heading?: any;
};

const AuthLayout: React.FC<Props> = ({ children, title, heading }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Nav heading={heading} />
      <Layout style={{ padding: "0 15px" }} className="layout">
        {/* <Sidebar /> */}
        <Layout>
          <Layout.Content className="gx-layout-content">
            <div style={{ marginTop: 200 }} className="gx-main-content-wrapper">
              {children}
            </div>
            <Layout.Footer>{/* <Footer /> */}</Layout.Footer>
          </Layout.Content>
        </Layout>
      </Layout>
    </>
  );
};

export default AuthLayout;
