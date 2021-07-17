import { Layout } from "antd";
import Head from "next/head";
import React from "react";
import Footer from "./footer";
import Nav from "./nav";
import { Header, Loader } from "components";
import { useUser } from "contexts";

type Props = {
  home?: boolean;
  title?: any;
  heading?: any;
  headingButton?: any;
};

const MainLayout: React.FC<Props> = ({
  children,
  title,
  heading,
  headingButton,
  home,
}) => {
  const [user] = useUser();

  return (
    <Loader loading={!user || user.id === ""}>
      <Head>
        <title>{title}</title>
      </Head>
      <Nav heading={heading} home={home} headingButton={headingButton} />
      {home && <Header />}
      <Layout className="layout" style={{ padding: home ? 0 : 20 }}>
        {/* <Sidebar /> */}
        <Layout>
          <Layout.Content className="gx-layout-content">
            <div
              style={{ marginTop: home ? 0 : 200 }}
              className="gx-main-content-wrapper"
            >
              {children}
            </div>
          </Layout.Content>
        </Layout>
      </Layout>
      <Footer />
    </Loader>
  );
};

export default MainLayout;
