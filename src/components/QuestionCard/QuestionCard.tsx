import React from "react";
import type { FC } from "react";
import { QuestionCardWrapper } from "./QuestionCardWrapper";
import {
  EditOutlined,
  StarOutlined,
  SwitcherOutlined,
  DeleteOutlined,
  LineChartOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { Button, Divider, Tag, Popconfirm, Modal, message } from "antd";

interface PropTypes {
  _id: string;
  title: string;
  isPublished: boolean;
  isStart: boolean;
  answerCount: number;
  createAt: string;
}

const QuestionCard: FC<PropTypes> = (props: PropTypes) => {
  const { title, isPublished, isStart } = props;

  const { confirm } = Modal;

  function del() {
    confirm({
      title: "确定删除该问卷吗？",
      icon: <ExclamationCircleOutlined />,
      onOk: () => message.success("已经成功删除"),
      okText: "确定",
      cancelText: "取消",
    });
  }

  return (
    <QuestionCardWrapper>
      <div className="item">
        <div className="top">
          <div className="name">
            {isStart ? (
              <StarOutlined style={{ color: "skyblue", marginRight: "10px" }} />
            ) : (
              ""
            )}
            {title}
          </div>
          <div className="info">
            {isPublished ? (
              <Tag color="#108ee9">已发布</Tag>
            ) : (
              <Tag color="#f0f3fa" style={{ color: "#CCC" }}>
                未发布
              </Tag>
            )}{" "}
            答卷 3月10日 13.23 分
          </div>
        </div>

        <Divider />

        <div className="bottom">
          <div className="left">
            <Button>
              <EditOutlined />
              编辑问卷
            </Button>
            {isPublished ? (
              <Button>
                <LineChartOutlined />
                问卷统计
              </Button>
            ) : (
              <Button disabled>
                <LineChartOutlined />
                问卷统计
              </Button>
            )}
          </div>
          <div className="right">
            {isStart ? (
              <Button>
                <StarOutlined />
                标星
              </Button>
            ) : (
              <Button>
                <StarOutlined />
                未标星
              </Button>
            )}

            <Button>
              <SwitcherOutlined />
              复制
            </Button>

            <Popconfirm
              title="你确定要删除吗？"
              okText="确定"
              cancelText="取消"
            >
              <Button onClick={() => del()}>
                <DeleteOutlined />
                删除
              </Button>
            </Popconfirm>
          </div>
        </div>
      </div>
    </QuestionCardWrapper>
  );
};

export default QuestionCard;
