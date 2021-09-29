import React from "react";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { Layout, Dropdown, Menu, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
const { Header } = Layout;
function TopHeader(props) {
  // console.log(props);
  // const [collapsed, setCollapsed] = useState(false);
  const changeCollapsed = () => {
    //   取反
    // setCollapsed(!collapsed);
    // 改变state的isCollapsed
    // console.log(props);
    props.changeCollapsed();
  };
  const {
    role: { roleName },
    username,
  } = JSON.parse(localStorage.getItem("token"));
  const menu = (
    <Menu>
      <Menu.Item key="1">{roleName}</Menu.Item>
      <Menu.Item
        key="2"
        danger
        onClick={() => {
          localStorage.removeItem("token");
          props.history.replace("/login");
        }}
      >
        退出
      </Menu.Item>
    </Menu>
  );
  return (
    <Header className="site-layout-background" style={{ padding: "0 16px" }}>
      {props.isCollapsed ? (
        <MenuUnfoldOutlined onClick={changeCollapsed} />
      ) : (
        <MenuFoldOutlined onClick={changeCollapsed} />
      )}
      <div style={{ float: "right" }}>
        <span>
          欢迎<span style={{ color: "skyblue" }}>{username}</span>
          回来
        </span>
        &nbsp;
        <Dropdown overlay={menu}>
          <Avatar
            style={{ backgroundColor: "#87d068" }}
            icon={<UserOutlined />}
          />
        </Dropdown>
      </div>
    </Header>
  );
}
/*
connect(
  //mapStateToProps
  //mapDispatchToProps
)
(被包装的组件) */
// 结构操作
const mapStateToProps = ({ CollApsedReducer: { isCollapsed } }) => {
  // console.log(state);
  // console.log(isCollapsed);
  return {
    isCollapsed,
  };
};
const mapDispatchToProps = {
  changeCollapsed() {
    return {
      type: "change_collapsed",
      //payload
    }; //action
  },
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(TopHeader));
