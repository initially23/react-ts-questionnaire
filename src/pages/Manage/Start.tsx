import React from "react";
import type { FC } from "react";
import { StartWrapper } from "./Start.Wrapper";
import { Typography } from "antd";
import QuestionCard from "@/components/QuestionCard/QuestionCard";

const { Title } = Typography;

const ManageStart: FC = () => {
  const ManageStartList = [
    {
      _id: "q1",
      title: "问卷1",
      isPublished: false,
      isStart: true,
      answerCount: 5,
      createAt: "11月11日 12:51",
    },

    {
      _id: "q2",
      title: "问卷2",
      isPublished: true,
      isStart: true,
      answerCount: 5,
      createAt: "11月11日 12:51",
    },
  ];

  return (
    <StartWrapper>
      <Title>我的问卷</Title>
      <section className="listItem">
        {ManageStartList.length > 0 &&
          ManageStartList.map((item) => {
            const { _id } = item;
            return <QuestionCard key={_id} {...item} />;
          })}
      </section>
    </StartWrapper>
  );
};

export default ManageStart;
