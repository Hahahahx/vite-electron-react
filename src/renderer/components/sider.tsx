import React from "react";
import { Layout, Menu } from "antd";
import { useHtmlMeta } from "ux-autoroute";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
const { Sider: AntdSider } = Layout;

const { SubMenu } = Menu;
export const Sider = () => {
  const { htmlMeta } = useHtmlMeta();

  const handleClick = (e: any) => {
    console.log("click ", e);
  };

  return (
    <div className="sider">
      <AntdSider>
        <Menu
          onClick={handleClick}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
        >
          <Menu.ItemGroup key="g1" title="IPFS">
            <Menu.Item key="1">配置</Menu.Item>
            {/* <Menu.Item key="2"></Menu.Item> */}
          </Menu.ItemGroup>
          <Menu.ItemGroup key="g2" title="FILE">
            <Menu.Item key="3">全部文件</Menu.Item>
            <Menu.Item key="4">加密文件</Menu.Item>
            <Menu.Item key="5">普通文件</Menu.Item>
          </Menu.ItemGroup>
        </Menu>
      </AntdSider>
      <div className="drag-box"></div>
    </div>
  );
};
