import React from "react";
import { Layout, Button } from "antd";
import icon from "../../assets/img/icon.png";
import { useHtmlMeta } from "ux-autoroute";
import { OptBtn } from "./optBtn";
const { Footer: AntdFooter } = Layout;

export const Footer = () => {
  const { htmlMeta } = useHtmlMeta();

  return (
    <AntdFooter className="footer">
      <div className="connector"></div>
      <div className="info"></div>
      <div className="opt"></div>
    </AntdFooter>
  );
};
