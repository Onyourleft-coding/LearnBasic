import { Table, Button, Modal, Tree } from "antd";
import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  DeleteOutlined,
  ExclamationCircleOutlined,
  MenuOutlined,
} from "@ant-design/icons";

const { confirm } = Modal;
export default function RoleList() {
  const [dataSource, setdataSource] = useState([]);
  const [rightList, setrightList] = useState([]);
  const [currentRights, setcurrentRights] = useState([]);
  const [currentId, setcurrentId] = useState(0);
  const [isModalVisible, setisModalVisible] = useState(false);
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      render: (id) => {
        return <b>{id}</b>;
      },
    },
    {
      title: "角色名称",
      dataIndex: "roleName",
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
              style={{ marginRight: "15px" }}
            ></Button>
            <Button
              type="primary"
              shape="circle"
              icon={<MenuOutlined />}
              onClick={() => {
                setisModalVisible(true);
                setcurrentRights(item.rights);
                setcurrentId(item.id);
              }}
            ></Button>
          </div>
        );
      },
    },
  ];
  useEffect(() => {
    axios.get("/roles").then((res) => {
      //   console.log(res.data);
      setdataSource(res.data);
    });
  }, []);
  useEffect(() => {
    axios.get("/rights?_embed=children").then((res) => {
      //   console.log(res.data);
      setrightList(res.data);
    });
  }, []);
  const confirmMethod = (item) => {
    confirm({
      title: "你确认删除吗?",
      icon: <ExclamationCircleOutlined />,
      // content: "Some descriptions",
      okText: "我确定好了",
      okType: "danger",
      cancelText: "让我想想",
      onOk() {
        // console.log("OK");
        // 调用方法
        deleteMethod(item);
      },
      onCancel() {
        // console.log("Cancel");
      },
    });
  };

  const deleteMethod = (item) => {
    // 拿到删除项
    setdataSource(dataSource.filter((data) => data.id !== item.id));
    axios.delete(`/roles/${item.id}`);
  };

  const handleOk = () => {
    // console.log(currentRights);
    setisModalVisible(false);
    //同步datasource
    setdataSource(
      dataSource.map((item) => {
        if (item.id === currentId) {
          return {
            ...item,
            rights: currentRights,
          };
        }
        return item;
      })
    );
    //patch
    axios.patch(`/roles/${currentId}`, {
      rights: currentRights,
    });
  };

  const handleCancel = () => {
    setisModalVisible(false);
  };

  const onCheck = (checkedKeys) => {
    // console.log("onCheck", checkedKeys);
    setcurrentRights(checkedKeys.checked);
  };
  return (
    <div>
      <Table
        dataSource={dataSource}
        columns={columns}
        rowKey={(item) => item.id}
      ></Table>
      <Modal
        title="权限分配"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Tree
          checkable
          checkedKeys={currentRights}
          onCheck={onCheck}
          treeData={rightList}
          checkStrictly={true}
        />
      </Modal>
    </div>
  );
}
