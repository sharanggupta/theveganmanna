import React from "react";
import { Layout } from "antd";
import Head from "next/head";
import Footer from "./footer";
import Nav from "./nav";
import { Header, Loader } from "components";
import { useUser } from "contexts";

type Props = {
  home?: boolean;
  title?: any;
  heading?: any;
};

const DeactivatedLayout: React.FC<Props> = ({ children, title, heading }) => {
  const [user] = useUser();

  return (
    <Loader loading={!user || user.id === "" || user.id !== "deactivated"}>
      <Head>
        <title>{title}</title>
      </Head>
      <Nav heading={heading} />
      <Layout style={{ padding: "0 15px" }} className="layout">
        {/* <Sidebar /> */}
        <Layout>
          <Layout.Content className="gx-layout-content">
            <div
              style={{ marginTop: 200, textAlign: "center" }}
              className="gx-main-content-wrapper"
            >
              {children}
            </div>
            <Layout.Footer>{/* <Footer /> */}</Layout.Footer>
          </Layout.Content>
        </Layout>
      </Layout>
    </Loader>
  );
};

export default DeactivatedLayout;
