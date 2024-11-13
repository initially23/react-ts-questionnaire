import React from "react";
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

const App: React.FC = () => {
  const Navigate = useNavigate();

  return (
    <Result
      status="404"
      title="404"
      subTitle="抱歉你所访问的页面不存在"
      extra={
        <Button type="primary" onClick={() => Navigate("/")}>
          返回首页
        </Button>
      }
    />
  );
};

export default App;
