import React from "react";
import type { FC } from "react";
import { Link } from "react-router-dom";

const Home: FC = () => {
  return (
    <div>
      <Link to="/register">注册</Link>
      <Link to="/login">登录</Link>
    </div>
  );
};

export default Home;
