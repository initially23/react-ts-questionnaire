import React from "react";
import type { FC } from "react";
import { Outlet } from "react-router-dom";

const MainLayout: FC = () => {
  return (
    <>
      <header>MainLayout Header</header>
      <main>
        <Outlet />
      </main>
      <footer>MainLayout Footer</footer>
    </>
  );
};

export default MainLayout;
