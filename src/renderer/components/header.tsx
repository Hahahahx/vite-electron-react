import React from "react";
import { Layout, Button } from "antd";
import icon from "../../assets/img/icon.png";
import { useHtmlMeta } from "ux-autoroute";
const { Header: AntdHeader } = Layout;

export const Header = () => {
  const { htmlMeta } = useHtmlMeta();

  return (
    <AntdHeader className="header drag-header">
      <div className="icon">
        {/* <img src={icon} /> */}
      </div>
      <h2 className="title">{htmlMeta?.title}</h2>
      <div className="opt">
        <Button.Group>
          <Button>-</Button>
          <Button>-</Button>
          <Button>x</Button>
        </Button.Group>
      </div>
    </AntdHeader>
  );
};
