import { testNode } from "@common/browser";
import React from "react";
import { NavLink } from "react-router-dom";
import { RouterView, useRouter } from "ux-autoroute";
import { Button, Layout } from "antd";
import { Footer, Header, Sider } from "@renderer/components";

const { Content } = Layout;

const Index = () => {
  const { config, routers, history } = useRouter();

  // console.log(routers);

  return (
    <>
      <Layout className="layout">
        <Header></Header>
        <Layout>
          <Sider></Sider>
          <Content>
            <RouterView />
          </Content>
        </Layout>
        <Footer></Footer>
      </Layout>
    </>
  );
};

export default Index;
