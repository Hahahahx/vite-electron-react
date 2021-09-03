import React from "react";
import { Layout, Button } from "antd";
import icon from "../../assets/img/icon.png";
import { useHtmlMeta } from "ux-autoroute";
import { OptBtn } from "./optBtn";
const { Header: AntdHeader } = Layout;

export const Header = () => {
  const { htmlMeta } = useHtmlMeta();

  return (
    <AntdHeader className="header drag-header">
      <div className="icon">
        <span />
      </div>
      <p className="title">
        ipfs crypt system{htmlMeta?.title ? " - " + htmlMeta?.title : ""}
      </p>
      <div className="opt">
        <OptBtn />
      </div>
    </AntdHeader>
  );
};
