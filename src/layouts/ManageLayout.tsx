import React from "react";
import type { FC } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { ManageLayoutWrapper } from "./ManageLayout.Wrapper";
import { Button, Space, Divider } from "antd";
import {
  PlusOutlined,
  MenuOutlined,
  StarOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

const ManageLayout: FC = () => {
  const Navigate = useNavigate();

  return (
    <ManageLayoutWrapper>
      <div className="left">
        <Space direction="vertical">
          <Button type="primary" size="large" icon={<PlusOutlined />}>
            新建问卷
          </Button>
          <Divider />
          <Button
            onClick={() => Navigate("/manage/list")}
            size="large"
            icon={<MenuOutlined />}
          >
            我的问卷
          </Button>
          <Button
            onClick={() => Navigate("/manage/start")}
            size="large"
            icon={<StarOutlined />}
          >
            星标问卷
          </Button>
          <Button
            onClick={() => Navigate("/manage/trash")}
            size="large"
            icon={<DeleteOutlined />}
          >
            回收站
          </Button>
        </Space>
      </div>
      <main className="right">
        <Outlet />
      </main>
    </ManageLayoutWrapper>
  );
};

export default ManageLayout;
