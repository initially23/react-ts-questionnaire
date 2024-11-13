import React from "react";
import type { FC } from "react";
import { Space, Typography } from "antd";
import { LogoWrapper } from "./Logo.Wrapper";
import { Link } from "react-router-dom";

const { Title } = Typography;

const Logo: FC = () => {
  return (
    <LogoWrapper>
      <Link to="/">
        <Space className="Space">
          <Title>小慕问卷</Title>
        </Space>
      </Link>
    </LogoWrapper>
  );
};

export default Logo;
