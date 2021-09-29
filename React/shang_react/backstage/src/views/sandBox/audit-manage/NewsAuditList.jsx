import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table, Button, Tag, notification } from "antd";

export default function NewsAuditList(props) {
  const [dataSource, setdataSource] = useState([]);
  const { username } = JSON.parse(localStorage.getItem("token"));
  useEffect(() => {
    //   _ne 不等于0 lte 小于等于
    axios(
      `/news?author=${username}&auditState_ne=0&publishState_lte=1&_expand=category`
    ).then((res) => {
      // console.log(res.data);
      setdataSource(res.data);
    });
  }, [username]);
  const columns = [
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
      title: "新闻分类",
      dataIndex: "category",
      render: (category) => {
        return <div>{category.title}</div>;
      },
    },
    {
      title: "审核状态",
      dataIndex: "auditState",
      render: (auditState) => {
        const colorList = ["", "orange", "green", "red"];
        const auditList = ["草稿箱", "审核中", "已通过", "未通过"];
        return <Tag color={colorList[auditState]}>{auditList[auditState]}</Tag>;
      },
    },
    {
      title: "操作",
      render: (item) => {
        // console.log(item);
        return (
          <div>
            {item.auditState === 1 && (
              <Button
                danger
                style={{ marginRight: "15px" }}
                onClick={() => handlePublish(item)}
              >
                发布
              </Button>
            )}
            {item.auditState === 2 && (
              <Button
                style={{ marginRight: "15px" }}
                onClick={() => {
                  hanldRervert(item);
                }}
              >
                撤销
              </Button>
            )}
            {item.auditState === 3 && (
              <Button
                type="primary"
                style={{ marginRight: "15px" }}
                onClick={() => {
                  handleUpdate(item);
                }}
              >
                更新
              </Button>
            )}
          </div>
        );
      },
    },
  ];
  const handlePublish = (item) => {
    axios
      .patch(`/news/${item.id}`, {
        publishState: 2,
        punlishTime:Date.now()
      })
      .then((res) => {
        // console.log(res, "OK");
        props.history.push("/publish-manage/published");
        notification.info({
          message: "通知",
          description: `新闻以提交,您可以在发布管理/已发布查看您的新闻`,
          placement: "bottomRight",
        });
      });
  };
  const handleUpdate = (item) => {
    props.history.push(`/news-manage/update/${item.id}`);
  };
  const hanldRervert = (item) => {
    setdataSource(dataSource.filter((data) => data.id !== item.id));
    axios
      .patch(`/news/${item.id}`, {
        auditState: 0,
      })
      .then((res) => {
        // console.log(res.data);
        notification.info({
          message: "通知",
          description: `新闻以提交,您可以在草稿箱中查看`,
          placement: "bottomRight",
        });
      });
  };
  return (
    <div>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{ pageSize: 5 }}
        rowKey={(item) => item.id}
      />
    </div>
  );
}
