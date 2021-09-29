import React, { Component } from "react";
import Pubsub from "pubsub-js";
import "./index.css";
export default class List extends Component {
  state = {
    users: [], //初始化状态，users初始值为数组
    isFirst: true, //是否为第一次打开页面
    isLoading: false, //标识是否处于加载中
    err: "", //存储请求相关的错误信息
  };

  //页面挂载就订阅消息
  componentDidMount() {
    //   订阅消息
    this.token = Pubsub.subscribe("moer", (_, stateObj) => {
      this.setState(stateObj);
      console.log("List组件收到数据了", stateObj);
    });
  }

  //   页面将要卸载时就取消订阅消息
  componentWillUnmount() {
    Pubsub.unsubscribe(this.token);
  }
  render() {
    const { users, isFirst, isLoading, err } = this.state;
    return (
      <div className="row">
        {isFirst ? (
          <h2>欢迎使用</h2>
        ) : isLoading ? (
          <h2>Loading...</h2>
        ) : err ? (
          <h2 style={{ color: "red" }}>{err}</h2>
        ) : (
          users.map((userObj) => {
            return (
              <div className="card" key={userObj.id}>
                <a href={userObj.html_url} target="_blank" rel="noreferrer">
                  <img
                    src={userObj.avatar_url}
                    style={{ width: "100px" }}
                    alt="avater"
                  />
                </a>
                <p className="card-text">{userObj.login}</p>
              </div>
            );
          })
        )}
      </div>
    );
  }
}
