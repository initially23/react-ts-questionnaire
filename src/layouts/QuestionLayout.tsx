import React from "react";
import type { FC } from "react";
import { Outlet } from "react-router-dom";

const QuestionLayout: FC = () => {
  return (
    <>
      <header>QuestionLayout Header</header>
      <main>
        <Outlet />
      </main>
      <footer>QuestionLayout Footer</footer>
    </>
  );
};

export default QuestionLayout;
