import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../../views/sandBox/home/Home";
import UserList from "../../views/sandBox/user-manage/UserList";
import RoleList from "../../views/sandBox/right-manage/role/RoleList";
import RightList from "../../views/sandBox/right-manage/right/RightList";
import NoPermission from "../../views/sandBox/noPermission/NoPermission";
import NewsDraft from "../../views/sandBox/news-manage/NewsDraft";
import NewsAdd from "../../views/sandBox/news-manage/NewsAdd";
import NewsPreview from "../../views/sandBox/news-manage/NewsPreview";
import NewsCategory from "../../views/sandBox/news-manage/NewsCategory";
import NewsAudit from "../../views/sandBox/audit-manage/NewsAudit";
import NewsAuditList from "../../views/sandBox/audit-manage/NewsAuditList";
import Unpublished from "../../views/sandBox/publish-manage/Unpublished";
import NewsUpdate from "../../views/sandBox/news-manage/NewsUpdate";
import Published from "../../views/sandBox/publish-manage/Published";
import Sunset from "../../views/sandBox/publish-manage/Sunset";
import axios from "axios";
import { Spin } from "antd";
import { connect } from "react-redux";
// 构建本地路由映射表
const LocalRouteMap = {
  "/home": Home,
  "/user-manage/list": UserList,
  "/right-manage/role/list": RoleList,
  "/right-manage/right/list": RightList,
  "/news-manage/draft": NewsDraft,
  "/news-manage/add": NewsAdd,
  "/news-manage/update/:id": NewsUpdate,
  "/news-manage/preview/:id": NewsPreview,
  "/news-manage/category": NewsCategory,
  "/audit-manage/audit": NewsAudit,
  "/audit-manage/list": NewsAuditList,
  "/publish-manage/unpublished": Unpublished,
  "/publish-manage/published": Published,
  "/publish-manage/sunset": Sunset,
};

function NewsRouter(props) {
  //   数据扁平化
  const [BackRouteList, setBackRouteList] = useState([]);
  useEffect(() => {
    Promise.all([axios.get("/rights"), axios.get("/children")]).then((res) => {
      setBackRouteList([...res[0].data, ...res[1].data]);
      // console.log([...res[0].data, ...res[1].data]);
    });
  }, []);

  const {
    role: { rights },
  } = JSON.parse(localStorage.getItem("token"));

  //   检验路由开关或者当前用户压根没有权限
  const checkRoute = (item) => {
    return (
      LocalRouteMap[item.key] && (item.pagepermisson || item.routepermisson)
    );
  };

  const checkUserPermission = (item) => {
    //   return 当前登录用户权限列表.includes(item.key)
    return rights.includes(item.key);
  };
  return (
    <Spin size="large" spinning={props.isLoading}>
      <Switch>
        {BackRouteList.map((item) => {
          //   验证是否有权限 第一个函数路由开关或者压根没有权限 第二个函数当前登录用户是否有资格显示组件内容
          if (checkRoute(item) && checkUserPermission(item)) {
            return (
              <Route
                exact
                path={item.key}
                key={item.key}
                component={LocalRouteMap[item.key]}
              />
            );
          }
          return null;
        })}
        {/* 重定向到Home页面  开启精准匹配 */}
        <Redirect exact to="/home" from="/" />
        {/* 当用户输入一个无法确定的路径后，跳转显示未授权 */}
        {BackRouteList.length > 0 && (
          <Route path="*" component={NoPermission} />
        )}
      </Switch>
    </Spin>
  );
}
const mapStateToProps = ({ LoadingReducer: { isLoading } }) => ({
  isLoading,
});
export default connect(mapStateToProps)(NewsRouter);
