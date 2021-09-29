import React, { forwardRef, useState, useEffect } from "react";
import { Form, Input, Select } from "antd";

const { Option } = Select;
// 封装组件
const UserForm = forwardRef((props, ref) => {
  const [isDisabled, setisDisabled] = useState(false);
  const { roleId, region } = JSON.parse(localStorage.getItem("token"));
  const roleObj = {
    1: "superadmin",
    2: "admin",
    3: "editor",
  };
  const checkRegionDisabled = (item) => {
    if (props.isUpdate) {
      // 更新阶段
      if (roleObj[roleId] === "superadmin") {
        return false;
      } else {
        return true;
      }
    } else {
      // 创建阶段
      if (roleObj[roleId] === "superadmin") {
        return false;
      } else {
        // return 当前这项 !== region
        return item.value !== region;
      }
    }
  };
  const checkRoleDisable = (item) => {
    if (props.isUpdate) {
      // 更新阶段
      if (roleObj[roleId] === "superadmin") {
        return false;
      } else {
        return true;
      }
    } else {
      // 创建阶段
      if (roleObj[roleId] === "superadmin") {
        return false;
      } else {
        // return 当前这项 !== region
        return roleObj[item.id] !== "editor";
      }
    }
  };
  useEffect(() => {
    setisDisabled(props.isUpdateDisabled);
  }, [props.isUpdateDisabled]);
  return (
    <Form ref={ref} layout="vertical">
      <Form.Item
        name="username"
        label="用户名"
        rules={[
          {
            required: true,
            message: "不能为空!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="password"
        label="密码"
        rules={[
          {
            required: true,
            message: "不能为空!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="region"
        label="区域"
        rules={
          isDisabled
            ? []
            : [
                {
                  required: true,
                  message: "不能为空!",
                },
              ]
        }
      >
        <Select disabled={isDisabled}>
          {props.regionList.map((item) => (
            <Option
              value={item.value}
              key={item.id}
              disabled={checkRegionDisabled(item)}
            >
              {item.title}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        name="roleId"
        label="角色"
        rules={[
          {
            required: true,
            message: "不能为空!",
          },
        ]}
      >
        <Select
          onChange={(value) => {
            // console.log(typeof value);
            if (value * 1 === 1) {
              setisDisabled(true);
              // 选择了超级管理员，用来清空之前的value值
              ref.current.setFieldsValue({
                region: "",
              });
            } else {
              setisDisabled(false);
            }
          }}
        >
          {props.roleList.map((item) => (
            <Option
              value={item.value}
              key={item.id}
              disabled={checkRoleDisable(item)}
            >
              {item.roleName}
            </Option>
          ))}
        </Select>
      </Form.Item>
    </Form>
  );
});
export default UserForm;
