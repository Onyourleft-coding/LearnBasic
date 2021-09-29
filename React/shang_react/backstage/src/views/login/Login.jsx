import React from "react";
import ParticlesBg from "particles-bg";
import { Form, Input, Button, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./Login.css";
import axios from "axios";
export default function Login(props) {
  const onFinish = (values) => {
    // console.log(values);
    axios
      .get(
        `/users?username=${values.username}&password=${values.password}&roleState=true&_expand=role`
      )
      .then((res) => {
        // console.log(res.data);
        if (res.data.length === 0) {
          //   console.log("登录失败");
          message.error("用户名或密码错误");
        } else {
          localStorage.setItem("token", JSON.stringify(res.data[0]));
          props.history.push("/");
        }
      });
  };
  return (
    <div>
      <div className="container">
        <p className="title">摩尔新闻后台管理系统</p>
        <Form name="normal_login" className="login-form" onFinish={onFinish}>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "请输入用户名!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="用户名"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "请输入密码!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="密码"
            />
          </Form.Item>
          <Form.Item className="button">
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              登录
            </Button>
            or
            <a href={`/#/register`} style={{ marginLeft: "10px" }}>
              去注册
            </a>
          </Form.Item>
        </Form>
      </div>
      <ParticlesBg type="cobweb" bg={true} />
    </div>
  );
}
