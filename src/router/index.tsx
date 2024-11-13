import React from "react";
import { createBrowserRouter } from "react-router-dom";

import MainLayout from "@/layouts/MainLayout";
import ManageLayout from "@/layouts/ManageLayout";
import QuestionLayout from "@/layouts/QuestionLayout";
import Home from "@/pages/Home/Home";
import Login from "@/pages/Login/Login";
import Register from "@/pages/Register/Register";
import ManageList from "@/pages/Manage/List";
import ManageStart from "@/pages/Manage/Start";
import ManageTrash from "@/pages/Manage/Trash";
import NotFound from "@/pages/NotFound/NotFound";
import QuestionStart from "@/pages/Question/Start/Start";
import QuestionEdit from "@/pages/Question/Edit/Edit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "manage",
        element: <ManageLayout />,
        children: [
          {
            path: "list",
            element: <ManageList />,
          },
          {
            path: "start",
            element: <ManageStart />,
          },
          {
            path: "trash",
            element: <ManageTrash />,
          },
        ],
      },
      {
        path: "question",
        element: <QuestionLayout />,
        children: [
          {
            path: "start/:id",
            element: <QuestionStart />,
          },
          {
            path: "edit/:id",
            element: <QuestionEdit />,
          },
        ],
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;

//常用的路由常量
export const HOME_PATHNAME = "/";
export const LOGIN_PATHNAME = "/login";
export const REGISTER_PATHNAME = "/register";
export const MANAGE_INDEX_PATHNAME = "/manage/list";
