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
      title: "??????",
      dataIndex: "region",
      filters: [
        ...regionList.map((item) => ({
          text: item.title,
          value: item.value,
        })),
        {
          text: "??????",
          value: "??????",
        },
      ],
      onFilter: (value, item) => {
        if (value === "??????") {
          return item.region === "";
        }
        return item.region === value;
      },
      render: (region) => {
        return <b>{region === "" ? "??????" : region}</b>;
      },
    },
    {
      title: "????????????",
      dataIndex: "role",
      render: (role) => {
        //   ???????????????????????????
        return role?.roleName;
      },
    },
    {
      title: "?????????",
      dataIndex: "username",
    },
    {
      title: "????????????",
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
      title: "??????",
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
      title: "???????????????????",
      icon: <ExclamationCircleOutlined />,
      // content: "Some descriptions",
      okText: "???????????????",
      okType: "danger",
      cancelText: "????????????",
      onOk() {
        console.log("OK");
        // ????????????
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
        // post??????????????????id????????????datasource?????????????????????????????????
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
  //????????????
  const deleteMethod = (item) => {
    setdataSource(dataSource.filter((data) => data.id !== item.id));
    axios.delete(`/users/${item.id}`).then((res) => {
      console.log("????????????");
    });
  };
  // ??????????????????
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
    // ????????????????????? ????????????
    setTimeout(() => {
      setisUpdateVisible(true);
      if (item.roleId === 1) {
        //??????
        setisUpdateDisabled(true);
      } else {
        //????????????
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
  // pageSize??????????????????
  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setisAddVisible(true);
        }}
      >
        ????????????
      </Button>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{ pageSize: 5 }}
        rowKey={(item) => item.id}
      />
      <Modal
        visible={isAddVisible}
        title="????????????"
        okText="??????"
        cancelText="??????"
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
        title="????????????"
        okText="??????"
        cancelText="??????"
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
