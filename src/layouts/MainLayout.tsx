import React from "react";
import type { FC } from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import { MainLayoutWrapper } from "./MainLayout.Wrapper";
import Logo from "@/components/Logo/Logo";

const { Header, Content, Footer } = Layout;

const MainLayout: FC = () => {
  return (
    <MainLayoutWrapper>
      <Header className="MainLayoutHeader">
        <Logo />
      </Header>
      <Content className="MainLayoutContent">
        <Outlet />
      </Content>
      <Footer className="MainLayoutFooter">小慕问卷-在线免费的问卷平台</Footer>
    </MainLayoutWrapper>
  );
};

export default MainLayout;
