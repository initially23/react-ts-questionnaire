import React from "react";
import type { FC } from "react";

interface PropsTypes {
  id: string;
  title: string;
  isPublished: boolean;
}

const QuestionCard: FC<PropsTypes> = (props) => {
  const { id, title, isPublished } = props;

  const Edit = (id: string) => {
    console.log(id);
  };

  return (
    <div key={id}>
      <span>{title}</span>
      {isPublished ? <span>已发布</span> : <span>未发布</span>}
      <button onClick={() => Edit(id)}>编辑</button>
    </div>
  );
};

export default QuestionCard;
