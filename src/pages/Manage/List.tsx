import React, { useState } from "react";
import type { FC } from "react";
import { ListWrapper } from "./ListWrapper";
import QuestionCard from "@/components/QuestionCard/QuestionCard";
import { useSearchParams } from "react-router-dom";

const rawQuestionList = [
  {
    _id: "q1",
    title: "问卷1",
    isPublished: false,
    isStart: false,
    answerCount: 5,
    createAt: "11月11日 12:51",
  },

  {
    _id: "q2",
    title: "问卷1",
    isPublished: false,
    isStart: false,
    answerCount: 5,
    createAt: "11月11日 12:51",
  },
  {
    _id: "q3",
    title: "问卷1",
    isPublished: false,
    isStart: false,
    answerCount: 5,
    createAt: "11月11日 12:51",
  },
  {
    _id: "q4",
    title: "问卷1",
    isPublished: false,
    isStart: false,
    answerCount: 5,
    createAt: "11月11日 12:51",
  },
];

const List: FC = () => {
  const [searchParams] = useSearchParams();
  console.log("keyword", searchParams.get("keyword"));

  const [questionList, setQuestionList] = useState(rawQuestionList);
  console.log(setQuestionList);

  return (
    <ListWrapper>
      <header></header>
      <section>
        {questionList.map((item) => {
          const { _id } = item;
          return <QuestionCard key={_id} {...item} />;
        })}
      </section>

      <footer></footer>
    </ListWrapper>
  );
};

export default List;
