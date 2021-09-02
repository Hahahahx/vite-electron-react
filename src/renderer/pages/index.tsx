import { testNode } from "@common/browser";
import React from "react";
import { NavLink } from "react-router-dom";
import { RouterView, useRouter } from "ux-autoroute";
import { Button, Layout } from "antd";
import { Header } from "@renderer/components/header";

const { Footer, Sider, Content } = Layout;

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
            <Button
              onClick={() => {
                testNode();
              }}
            >
              open
            </Button>
            <ul>
              <li> {config?.htmlmeta?.title}</li>
              {routers.map((item, index) => (
                <li key={index}>
                  <NavLink to={item.path}>
                    {item?.config?.htmlmeta?.title}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div>
              {history.location.pathname != "/main"}
              <RouterView />
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default Index;
