import React from "react";
import type { FC } from "react";
import { Outlet } from "react-router-dom";
import { QuestionLayoutWrapper } from "./QuestionLayout.Wrapper";

const QuestionLayout: FC = () => {
  return (
    <QuestionLayoutWrapper>
      <header>QuestionLayout Header</header>
      <main className="main">
        <Outlet />
      </main>
      <footer>QuestionLayout Footer</footer>
    </QuestionLayoutWrapper>
  );
};

export default QuestionLayout;
