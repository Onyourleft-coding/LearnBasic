import React, { useState, useEffect } from "react";
import ParticlesBg from "particles-bg";
import { Form, Input, Checkbox, Button, message, Select } from "antd";
import "./Register.css";
import axios from "axios";
import { Link } from "react-router-dom";
const { Option } = Select;
export default function Register(props) {
  const [categoryList, setcategoryList] = useState([]);
  const onFinish = (values) => {
    // console.log(values);
    axios.get(`/users?username=${values.nickname}`).then((res) => {
      if (res.data.length === 0) {
        // console.log("注册新用户", res.data);
        Promise.all([
          axios.post("/users", {
            username: values.nickname,
            password: values.password,
            roleState: true,
            default: false,
            region: values.region,
            roleId: "3",
          }),
          axios.get("/roles?id=3"),
        ]).then((res) => {
          const userData = res[0].data;
          const userRole = res[1].data;
          Array.prototype.push.apply(userData, userRole);
          localStorage.setItem(
            "token",
            JSON.stringify(userData).replace(/0/g, "role")
          );
          props.history.push("/");
        });
      } else {
        message.error("该账号已被人注册，请重新注册");
      }
    });
  };
  useEffect(() => {
    axios.get("/regions").then((res) => {
      // console.log(res.data);
      setcategoryList(res.data);
    });
  }, []);
  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 6,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 22,
        offset: 2,
      },
    },
  };
  return (
    <div>
      <div className="Registercontainer">
        <p className="title">摩尔新闻后台管理系统</p>
        <Form
          {...formItemLayout}
          name="register"
          onFinish={onFinish}
          scrollToFirstError
        >
          <Form.Item
            name="nickname"
            label="用户名"
            tooltip="您想让我们如何称呼您?"
            rules={[
              {
                required: true,
                message: "请输入您的用户名!",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="region"
            label="地区"
            rules={[{ required: true, message: "请选择您的注册地区!" }]}
          >
            <Select placeholder="请选择您的注册地区!">
              {categoryList.map((item) => (
                <Option value={item.title} key={item.id}>
                  {item.title}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="password"
            label="密码"
            rules={[
              {
                required: true,
                message: "请输入您的密码!",
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="确定密码"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "请确定您的密码!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(new Error("两次密码不一致!"));
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            className="center"
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(new Error("请阅读并同意勾选用户协议")),
              },
            ]}
            {...tailFormItemLayout}
          >
            <Checkbox>
              我已经阅读并同意该<Link to="">用户协议</Link>
            </Checkbox>
          </Form.Item>
          <Form.Item {...tailFormItemLayout} className="center">
            <Button type="primary" htmlType="submit">
              注册并登录
            </Button>
          </Form.Item>
        </Form>
      </div>
      <ParticlesBg type="cobweb" bg={true} />
    </div>
  );
}
