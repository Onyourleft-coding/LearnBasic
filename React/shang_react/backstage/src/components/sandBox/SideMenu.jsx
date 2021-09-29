import React, { useEffect, useState } from "react";
import { Menu, Layout } from "antd";
import "./SideMenu.css";
import { withRouter } from "react-router-dom";
import axios from "axios";
import {
  TeamOutlined,
  ClusterOutlined,
  ApartmentOutlined,
  FileAddOutlined,
  FolderOpenOutlined,
  BarsOutlined,
  ClockCircleOutlined,
  CheckCircleOutlined,
  UnorderedListOutlined,
  StopOutlined,
  AimOutlined,
} from "@ant-design/icons";
import { connect } from "react-redux";
const { Sider } = Layout;
const { SubMenu } = Menu;

// 模拟数组结构
/* const menuList = [
  { id: "010", title: "首页", key: "/home", icon: <UserOutlined /> },
  {
    id: "020",
    title: "用户管理",
    key: "/user-manage",
    icon: <UserOutlined />,
    children: [
      {
        id: "021",
        title: "用户列表",
        key: "/user-manage/list",
        icon: <UserOutlined />,
      },
    ],
  },
  {
    id: "030",
    title: "权限管理",
    key: "/right-manage",
    icon: <UserOutlined />,
    children: [
      {
        id: "031",
        title: "角色列表",
        key: "/right-manage/role/list",
        icon: <UserOutlined />,
      },
      {
        id: "032",
        title: "权限列表",
        key: "/right-manage/right/list",
        icon: <UserOutlined />,
      },
    ],
  },
]; */

//写一个模拟的iconList
const iconList = {
  "/user-manage/list": <TeamOutlined />,
  "/right-manage/right/list": <ClusterOutlined />,
  "/right-manage/role/list": <ApartmentOutlined />,
  "/news-manage/add": <FileAddOutlined />,
  "/news-manage/draft": <FolderOpenOutlined />,
  "/news-manage/category": <UnorderedListOutlined />,
  "/audit-manage/list": <BarsOutlined />,
  "/publish-manage/unpublished": <ClockCircleOutlined />,
  "/publish-manage/published": <CheckCircleOutlined />,
  "/publish-manage/sunset": <StopOutlined />,
  "/audit-manage/audit": <AimOutlined />,
};
function SideMenu(props) {
  const [menu, setMenu] = useState([]); //初始为空数组
  useEffect(() => {
    axios.get("/rights?_embed=children").then(
      (res) => {
        // console.log(res.data);
        setMenu(res.data);
      },
      (err) => {
        console.log(err.message);
      }
    );
  }, []);
  const {
    role: { rights },
  } = JSON.parse(localStorage.getItem("token"));
  // 这个函数的作用是为了筛选某些页面，当item.pagepermisson 为真 时表示该页面需要渲染到页面上
  const checkPagePermission = (item) => {
    // return item.pagepermisson
    return item.pagepermisson === 1 && rights.includes(item.key);
  };
  const renderMenu = (menuList) => {
    return menuList.map((item) => {
      // item.children?.length > 0  用于判断是否还有子组件，如果没有则不显示下拉框
      if (item.children?.length > 0 && checkPagePermission(item)) {
        return (
          <SubMenu key={item.key} icon={iconList[item.key]} title={item.title}>
            {/* 递归调用 */}
            {renderMenu(item.children)}
          </SubMenu>
        );
      }
      return (
        checkPagePermission(item) && (
          <Menu.Item
            key={item.key}
            icon={iconList[item.key]}
            onClick={() => {
              props.history.push(item.key);
            }}
          >
            {item.title}
          </Menu.Item>
        )
      );
    });
  };
  // console.log(props.location);
  // 这里解决的是刷新后打开某个tab的问题
  const selectKeys = [props.location.pathname];
  const openKys = ["/" + props.location.pathname.split("/")[1]];
  return (
    <Sider trigger={null} collapsible collapsed={props.isCollapsed}>
      <div style={{ display: "flex", height: "100%", flexDirection: "column" }}>
        <div className="logo">摩尔新闻后台管理系统</div>
        <div style={{ flex: 1, overflow: "auto" }}>
          <Menu
            theme="dark"
            mode="inline"
            selectedKeys={selectKeys}
            defaultOpenKeys={openKys}
          >
            {renderMenu(menu)}
          </Menu>
        </div>
      </div>
    </Sider>
  );
}
const mapStateToProps = ({ CollApsedReducer: { isCollapsed } }) => ({
  isCollapsed,
});
//高阶组件获取低阶组件，让低阶组件获取props操作方法
export default connect(mapStateToProps)(withRouter(SideMenu));
