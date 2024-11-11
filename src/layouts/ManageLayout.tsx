import React from "react";
import type { FC } from "react";
import { Outlet } from "react-router-dom";
import { ManageLayoutWrapper } from "./ManageLayout.Wrapper";

const ManageLayout: FC = () => {
  return (
    <ManageLayoutWrapper>
      <div className="left">ManageLayout Left</div>
      <main className="right">
        <Outlet />
      </main>
    </ManageLayoutWrapper>
  );
};

export default ManageLayout;
