import React, { useState, useEffect } from "react";
import { Table, Popover, Tag, Button, Modal, Switch } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import axios from "axios";

const { confirm } = Modal;

export default function RightList() {
  const [dataSource, setdataSource] = useState([]);
  useEffect(() => {
    axios.get("/rights?_embed=children").then(
      (res) => {
        const list = res.data;
        // 处理首页的children，返回的是数组为空，会影响我们想要的表格效果，变成空字符串就行了
        // list[0].children = "";

        // 优化
        list.forEach((item) => {
          if (item.children.length === 0) {
            item.children = "";
          }
        });
        // console.log(res.data);
        setdataSource(res.data);
      },
      (err) => {
        // console.log(err.message);
      }
    );
  }, []);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      render: (id) => {
        return <b>{id}</b>;
      },
    },
    {
      title: "权限名称",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "权限路径",
      dataIndex: "key",
      render: (key) => {
        return <Tag color="purple">{key}</Tag>;
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
              onClick={() => confirmMethod(item)}
              style={{marginRight:'15px'}}
            ></Button>
            <Popover
              content={
                <div style={{ textAlign: "center" }}>
                  <Switch
                    checked={item.pagepermisson}
                    onChange={() => switchMethod(item)}
                  ></Switch>
                </div>
              }
              title="页面配置项"
              trigger={item.pagepermisson === undefined ? "" : "click"}
            >
              <Button
                type="primary"
                shape="circle"
                icon={<EditOutlined />}
                disabled={item.pagepermisson === undefined}
              ></Button>
            </Popover>
          </div>
        );
      },
    },
  ];
  const switchMethod = (item) => {
    // console.log(item);
    item.pagepermisson = item.pagepermisson === 1 ? 0 : 1;
    setdataSource([...dataSource]);
    if (item.grade === 1) {
      //一级
      axios.patch(`/rights/${item.id}`, {
        pagepermisson: item.pagepermisson,
      });
    } else {
      // 二级菜单
      axios.patch(`/children/${item.id}`, {
        pagepermisson: item.pagepermisson,
      });
    }
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
    // 拿到删除项
    console.log(item);
    // 当前页面同步状态 + 后端同步,过来删除的那个id 这里是删除一级菜单的代码，二级菜单删不了
    if (item.grade === 1) {
      setdataSource(dataSource.filter((data) => data.id !== item.id));
      axios.delete(`/rights/${item.id}`);
    } else {
      //如果是二级，则根据rightId去寻找上一级
      // console.log(item.rightId);
      let list = dataSource.filter((data) => data.id === item.rightId); //找到要删除的那一项
      list[0].children = list[0].children.filter((data) => data.id !== item.id);
      // console.log(list, dataSource); //这里的dataSource已经发生了改变，一层filter不影响，第二层就会改变
      setdataSource([...dataSource]);
      axios.delete(`/children/${item.id}`);
    }
  };

  // pageSize表示分页条数
  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      pagination={{ pageSize: 5 }}
    />
  );
}
