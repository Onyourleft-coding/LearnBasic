import React, { Component } from "react";
import Search from "./components/Seach";
import List from "./components/List";

export default class App extends Component {
  state = {
    users: [],
    isFirst: true, //是否为第一次打开页面
    isLoading: false, //标识是否处于加载中
    err: "", //存储请求相关的错误信息
  }; //初始化状态，users初始值为数组

  // 更新App的state
  updateAppState = (stateObj) => {
    this.setState(stateObj);
  };

  render() {
    // const { users } = this.state;
    return (
      <div className="container">
        <Search updateAppState={this.updateAppState} />
        {/* 批量传递 */}
        <List {...this.state} />
      </div>
    );
  }
}
