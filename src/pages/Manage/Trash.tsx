import React, { useState } from "react";
import type { FC } from "react";
import {
  Empty,
  Typography,
  Table,
  Tag,
  Button,
  Space,
  Modal,
  message,
} from "antd";
import { useSearchParams } from "react-router-dom";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { useTitle } from "ahooks";

const { Title } = Typography;
const { confirm } = Modal;

const rawQuestionList = [
  {
    _id: "q1",
    title: "问卷1",
    isPublished: false,
    isStart: true,
    answerCount: 5,
    createAt: "11月11日 12:51",
  },

  {
    _id: "q2",
    title: "问卷2",
    isPublished: false,
    isStart: false,
    answerCount: 2,
    createAt: "11月11日 12:51",
  },
  {
    _id: "q3",
    title: "问卷3",
    isPublished: false,
    isStart: false,
    answerCount: 3,
    createAt: "11月11日 12:51",
  },
  {
    _id: "q4",
    title: "问卷4",
    isPublished: true,
    isStart: false,
    answerCount: 5,
    createAt: "11月11日 12:51",
  },
];

const tableColum = [
  {
    title: "标题",
    dataIndex: "title",
  },
  {
    title: "是否发布",
    dataIndex: "isPublished",
    render: (isPublished: boolean) =>
      isPublished ? (
        <Tag color="#108ee9">已发布</Tag>
      ) : (
        <Tag color="#f0f3fa" style={{ color: "#333" }}>
          未发布
        </Tag>
      ),
  },
  {
    title: "答卷",
    dataIndex: "answerCount",
  },
  {
    title: "创建时间",
    dataIndex: "createAt",
  },
];

const del = () => {
  confirm({
    title: "是否确认删除",
    icon: <ExclamationCircleOutlined />,
    content: "删除以后不能恢复",
    onOk: () => message.success("成功删除"),
  });
};

const ManageTrash: FC = () => {
  const [searchParams] = useSearchParams();
  console.log("keyword", searchParams.get("keyword"));
  useTitle("回收站-我的问卷-小慕问卷");

  const [questionList, setQuestionList] = useState(rawQuestionList);
  const [selectedIds, setSelectedIds] = useState([]);
  console.log(setQuestionList);
  console.log(selectedIds);

  const TableElem = (
    <>
      <div style={{ marginBottom: "16px" }}>
        <Space>
          <Button type="primary" disabled={selectedIds.length === 0}>
            恢复
          </Button>
          <Button danger disabled={selectedIds.length === 0} onClick={del}>
            删除
          </Button>
        </Space>
      </div>
      <Table
        rowKey={(q) => q._id}
        dataSource={questionList}
        columns={tableColum}
        rowSelection={{
          type: "checkbox",
          onChange: (selectedRowKeys) => {
            setSelectedIds(selectedRowKeys as never[]);
          },
        }}
      ></Table>
    </>
  );

  return (
    <>
      <Title>我的问卷</Title>
      <section className="listItem">
        {questionList.length === 0 && <Empty />}
        {questionList.length > 0 && TableElem}
      </section>
    </>
  );
};

export default ManageTrash;
