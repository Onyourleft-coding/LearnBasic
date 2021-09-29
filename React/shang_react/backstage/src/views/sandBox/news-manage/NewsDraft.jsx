import React, { useState, useEffect } from "react";
import { Table, Button, Modal, notification } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
  MonitorOutlined,
} from "@ant-design/icons";
import axios from "axios";

const { confirm } = Modal;

export default function NewsDraft(props) {
  const { username } = JSON.parse(localStorage.getItem("token"));
  const [dataSource, setdataSource] = useState([]);
  useEffect(() => {
    axios.get(`/news?author=${username}&auditState=0&_expand=category`).then(
      (res) => {
        // console.log(res.data);
        const list = res.data;
        setdataSource(list);
      },
      (err) => {
        // console.log(err.message);
      }
    );
  }, [username]);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      render: (id) => {
        return <b>{id}</b>;
      },
    },
    {
      title: "新闻标题",
      dataIndex: "title",
      render: (title, item) => {
        return <a href={`#/news-manage/preview/${item.id}`}>{title}</a>;
      },
    },
    {
      title: "作者",
      dataIndex: "author",
    },
    {
      title: "分类",
      dataIndex: "category",

      render: (category) => {
        return category.title;
      },
    },
    {
      title: "操作",
      render: (item) => {
        // console.log(item);
        return (
          <div>
            <Button
              danger
              shape="circle"
              icon={<DeleteOutlined />}
              style={{ marginRight: "15px" }}
              onClick={() => confirmMethod(item)}
            ></Button>

            <Button
              shape="circle"
              style={{ marginRight: "15px" }}
              icon={<EditOutlined />}
              onClick={() => {
                props.history.push(`/news-manage/update/${item.id}`);
              }}
            ></Button>
            <Button
              type="primary"
              shape="circle"
              icon={<MonitorOutlined />}
              onClick={() => {
                handleCheck(item.id);
              }}
            ></Button>
          </div>
        );
      },
    },
  ];

  const handleCheck = (id) => {
    axios
      .patch(`/news/${id}`, {
        auditState: 1,
      })
      .then((res) => {
        console.log(res, "OK");
        props.history.push("/audit-manage/list");
        notification.info({
          message: "通知",
          description: `新闻以提交,您可以在${"审核列表"}中查看`,
          placement: "bottomRight",
        });
      });
  };
  const confirmMethod = (item) => {
    confirm({
      title: "你确认删除吗?",
      icon: <ExclamationCircleOutlined />,
      // content: "Some descriptions",
      okText: "我确定好了",
      okType: "danger",
      cancelText: "让我想想",
      onOk() {
        console.log("OK");
        // 调用方法
        deleteMethod(item);
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };
  //删除操作

  /*
  grade: 1表示第一级  grade: 2表示第二级
  rightId: 2 表示关联父级的id为2
  */
  const deleteMethod = (item) => {
    setdataSource(dataSource.filter((data) => data.id !== item.id));
    axios.delete(`/news/${item.id}`);
  };

  // pageSize表示分页条数
  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      pagination={{ pageSize: 5 }}
      rowKey={(item) => item.id}
    />
  );
}
