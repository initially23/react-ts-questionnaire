import React from "react";
import type { FC } from "react";
import { HomeWrapper } from "./Home.Wrapper";
import { Button, Typography } from "antd";
import { useNavigate } from "react-router-dom";

const { Title, Paragraph } = Typography;

const Home: FC = () => {
  const Navigate = useNavigate();

  return (
    <HomeWrapper>
      <div className="container">
        <Title>问卷调查|在线投票</Title>
        <Paragraph>
          已累计创建问卷 100 份，发布问卷 90 份，收到答卷 980 份。
        </Paragraph>
        <div>
          <Button type="primary" onClick={() => Navigate("/manage/list")}>
            开始使用
          </Button>
        </div>
      </div>
    </HomeWrapper>
  );
};

export default Home;
