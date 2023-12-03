import React from "react";
import { Link, Outlet } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";

const { Header, Content, Sider } = Layout;

const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,
      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  }
);
const Main = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout style={{ width: "100vw", height: "auto" }}>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Link to="/" style={{ color: "white", marginInlineStart: "1rem" }}>
          Home
        </Link>
        <Link to="/signup" style={{ color: "white", marginLeft: "1rem" }}>
          Sign Up
        </Link>
        <Link to="/categories" style={{ color: "white", marginLeft: "1rem" }}>
          Categories
        </Link>
      </Header>
      <Layout>
        <Sider
          width={200}
          style={{
            background: colorBgContainer,
          }}
        >
          <Link className="btn-blue" to="categories/add">Add</Link>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{
              height: "100%",
              borderRight: 0,
            }}
            items={items2}
          >

            
          </Menu>
          
        </Sider>
        <Layout
          style={{
            padding: "0 24px 24px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>
              {" "}
              <Breadcrumb />
            </Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default Main;
