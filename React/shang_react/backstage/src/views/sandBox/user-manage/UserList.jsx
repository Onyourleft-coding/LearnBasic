import React, { useState, useEffect, useRef } from "react";
import { Table, Button, Modal, Switch } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import axios from "axios";
import UserFrom from "../../../components/user-manage/UserForm";

const { confirm } = Modal;
export default function UserList() {
  const [dataSource, setdataSource] = useState([]);
  const [isAddVisible, setisAddVisible] = useState(false);
  const [roleList, setroleList] = useState([]);
  const [isUpdateVisible, setisUpdateVisible] = useState(false);
  const [regionList, setregionList] = useState([]);
  const [isUpdateDisabled, setisUpdateDisabled] = useState(false);
  const addForm = useRef(null);
  const updateForm = useRef(null);
  const [current, setcurrent] = useState(null);
  const { roleId, region, username } = JSON.parse(
    localStorage.getItem("token")
  );
  useEffect(() => {
    const roleObj = {
      1: "superadmin",
      2: "admin",
      3: "editor",
    };
    axios.get("/users?_expand=role").then(
      (res) => {
        const list = res.data;
        setdataSource(
          roleObj[roleId] === "superadmin"
            ? list
            : [
                ...list.filter((item) => item.username === username),
                ...list.filter(
                  (item) =>
                    item.region === region && roleObj[item.roleId] === "editor"
                ),
              ]
        );
      },
      (err) => {
        // console.log(err.message);
      }
    );
  }, [roleId, region, username]);

  useEffect(() => {
    axios.get("/regions").then(
      (res) => {
        const list = res.data;
        setregionList(list);
      },
      (err) => {
        // console.log(err.message);
      }
    );
  }, []);

  useEffect(() => {
    axios.get("/roles").then(
      (res) => {
        const list = res.data;
        setroleList(list);
      },
      (err) => {
        // console.log(err.message);
      }
    );
  }, []);

  const columns = [
    {
      title: "区域",
      dataIndex: "region",
      filters: [
        ...regionList.map((item) => ({
          text: item.title,
          value: item.value,
        })),
        {
          text: "全球",
          value: "全球",
        },
      ],
      onFilter: (value, item) => {
        if (value === "全球") {
          return item.region === "";
        }
        return item.region === value;
      },
      render: (region) => {
        return <b>{region === "" ? "全球" : region}</b>;
      },
    },
    {
      title: "角色名称",
      dataIndex: "role",
      render: (role) => {
        //   多多思考，三则表达
        return role?.roleName;
      },
    },
    {
      title: "用户名",
      dataIndex: "username",
    },
    {
      title: "用户状态",
      dataIndex: "roleState",
      render: (roleState, item) => {
        return (
          <Switch
            checked={roleState}
            disabled={item.default}
            onChange={() => handleChange(item)}
          ></Switch>
        );
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
              style={{ marginRight: "15px" }}
              disabled={item.default}
            ></Button>
            <Button
              type="primary"
              shape="circle"
              icon={<EditOutlined />}
              disabled={item.default}
              onClick={() => handleUpdate(item)}
            ></Button>
          </div>
        );
      },
    },
  ];

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
  const addFormOK = () => {
    addForm.current
      .validateFields()
      .then((value) => {
        console.log(value);
        setisAddVisible(false);
        addForm.current.resetFields();
        // post到后端，生成id，再设置datasource，方便后面的删除和更新
        axios
          .post(`/users`, {
            ...value,
            roleState: true,
            default: false,
          })
          .then((res) => {
            console.log(res.data);
            setdataSource([
              ...dataSource,
              {
                ...res.data,
                role: roleList.filter((item) => item.id === value.roleId)[0],
              },
            ]);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //删除操作
  const deleteMethod = (item) => {
    setdataSource(dataSource.filter((data) => data.id !== item.id));
    axios.delete(`/users/${item.id}`).then((res) => {
      console.log("删除成功");
    });
  };
  // 更改用户状态
  const handleChange = (item) => {
    // console.log(item);
    item.roleState = !item.roleState;
    setdataSource([...dataSource]);
    axios.patch(`/users/${item.id}`, {
      roleState: item.roleState,
    });
  };
  const handleUpdate = (item) => {
    // console.log(item,'1');
    // 放在异步任务中 同步处理
    setTimeout(() => {
      setisUpdateVisible(true);
      if (item.roleId === 1) {
        //禁用
        setisUpdateDisabled(true);
      } else {
        //取消禁用
        setisUpdateDisabled(false);
      }
      updateForm.current.setFieldsValue(item);
    }, 0);
    setcurrent(item);
  };
  const updateFormOK = () => {
    updateForm.current.validateFields().then((value) => {
      console.log(value);
      setisUpdateVisible(false);
      setdataSource(
        dataSource.map((item) => {
          if (item.id === current.id) {
            return {
              ...item,
              ...value,
              role: roleList.filter((data) => data.id === value.roleId)[0],
            };
          }
          return item;
        })
      );
      setisUpdateDisabled(!isUpdateDisabled);
      axios.patch(`/users/${current.id}`, value);
    });
  };
  // pageSize表示分页条数
  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setisAddVisible(true);
        }}
      >
        添加用户
      </Button>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{ pageSize: 5 }}
        rowKey={(item) => item.id}
      />
      <Modal
        visible={isAddVisible}
        title="添加用户"
        okText="确定"
        cancelText="取消"
        onCancel={() => {
          setisAddVisible(false);
        }}
        onOk={() => {
          // console.log("add", addForm);
          addFormOK();
        }}
      >
        <UserFrom
          regionList={regionList}
          roleList={roleList}
          ref={addForm}
        ></UserFrom>
      </Modal>

      <Modal
        visible={isUpdateVisible}
        title="更新用户"
        okText="更新"
        cancelText="取消"
        onCancel={() => {
          setisUpdateVisible(false);
          setisUpdateDisabled(!isUpdateDisabled);
        }}
        onOk={() => {
          // console.log("add", addForm);
          updateFormOK();
        }}
      >
        <UserFrom
          regionList={regionList}
          roleList={roleList}
          ref={updateForm}
          isUpdateDisabled={isUpdateDisabled}
          isUpdate={true}
        ></UserFrom>
      </Modal>
    </div>
  );
}
