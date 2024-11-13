import React, { useState } from "react";
import type { FC } from "react";
import { ListWrapper } from "./List.Wrapper";
import QuestionCard from "@/components/QuestionCard/QuestionCard";
import { useSearchParams } from "react-router-dom";
import { Typography } from "antd";
import { useTitle } from "ahooks";

const { Title } = Typography;

const rawQuestionList = [
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
    isPublished: false,
    isStart: false,
    answerCount: 5,
    createAt: "11月11日 12:51",
  },
  {
    _id: "q3",
    title: "问卷3",
    isPublished: false,
    isStart: false,
    answerCount: 5,
    createAt: "11月11日 12:51",
  },
  {
    _id: "q4",
    title: "问卷4",
    isPublished: true,
    isStart: false,
    answerCount: 5,
    createAt: "11月11日 12:51",
  },
];

const List: FC = () => {
  const [searchParams] = useSearchParams();
  console.log("keyword", searchParams.get("keyword"));
  useTitle("问卷列表-我的问卷-小慕问卷");

  const [questionList, setQuestionList] = useState(rawQuestionList);
  console.log(setQuestionList);

  return (
    <ListWrapper>
      <Title>我的问卷</Title>
      <section className="listItem">
        {questionList.length > 0 &&
          questionList.map((item) => {
            const { _id } = item;
            return <QuestionCard key={_id} {...item} />;
          })}
      </section>
    </ListWrapper>
  );
};

export default List;
