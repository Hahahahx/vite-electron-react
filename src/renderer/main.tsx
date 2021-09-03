import React, { useState } from "react";
import ReactDOM from "react-dom";
import { initDB } from "react-indexed-db";
import { DBConfig } from "../config/db.config";
import { HashRouter } from "react-router-dom";
import { Routers } from "ux-autoroute";
import routeConfig from "./router";
import "./styles/index.less";
// import "font-awesome/css/font-awesome.css";
import "../assets/font/iconfont.css";

initDB(DBConfig);

const App = () => {
  const [userAuth, setAuth] = useState(2);
  const routeAuth = [["/tomato", "/potato"], ["/main"]];

  const setUserAuth = (num: number) => {
    return () => {
      setAuth(num);
    };
  };

  const getAuthName = (num?: number) => {
    switch (Number.isInteger(num) ? num : userAuth) {
      case 0:
        return "高级";
      case 1:
        return "中级";
      case 2:
        return "低级";
    }
  };

  return (
    <Routers
      type="hash"
      routers={routeConfig}
      before={(location) => {
        // console.log(location);
        // const { hash } = window.location;
        // const result = routeAuth.some((item, index) => {
        //   return item.some((route) => {
        //     if (hash.includes(route)) {
        //       return Number.isInteger(userAuth)
        //         ? // @ts-ignore
        //           userAuth > index
        //         : true;
        //     }
        //   });
        // });
        // if (result) {
        //   return <>您无权访问</>;
        // }
      }}
    />
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("app")
);
