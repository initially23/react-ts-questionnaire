import React from "react";
import type { FC } from "react";
import QuestionCard from "./components/QuestionCard";

const List1: FC = () => {
  const questionList = [
    { id: "q1", title: "问卷1", isPublished: true },
    { id: "q2", title: "问卷2", isPublished: true },
    { id: "q3", title: "问卷3", isPublished: true },
    { id: "q4", title: "问卷4", isPublished: true },
    { id: "q5", title: "问卷5", isPublished: true },
    { id: "q6", title: "问卷6", isPublished: false },
  ];

  return (
    <div className="list-item">
      {questionList.map((item) => {
        const { id, title, isPublished } = item;
        return (
          <QuestionCard
            key={id}
            id={id}
            title={title}
            isPublished={isPublished}
          />
        );
      })}
    </div>
  );
};

export default List1;
