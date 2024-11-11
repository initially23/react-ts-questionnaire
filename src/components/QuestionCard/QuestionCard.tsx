import React from "react";
import type { FC } from "react";
import { QuestionCardWrapper } from "./QuestionCardWrapper";

interface PropTypes {
  _id: string;
  title: string;
  isPublished: boolean;
  isStart: boolean;
  answerCount: number;
  createAt: string;
}

const QuestionCard: FC<PropTypes> = (props: PropTypes) => {
  const { _id } = props;
  return (
    <QuestionCardWrapper>
      <div>QuestionCard {_id}</div>
    </QuestionCardWrapper>
  );
};

export default QuestionCard;
