import React, { Component } from "react";
import axios from "axios";
export default class Search extends Component {
  Search = () => {
    //获取用户的输入
    // console.log(this.keyWordElement.value);
    const {
      keyWordElement: { value: keyWord },
    } = this; //连续结构赋值+重命名
    // 发送请求前通知App更新状态
    this.props.updateAppState({ isFirst: false, isLoading: true });
    console.log(keyWord);
    // 发送网络请求 站在3000端口发给3000，前面的http可以省略不写
    axios.get(`/api1/search/users?q=${keyWord}`).then(
      (response) => {
        console.log("成功了", response.data);
        // 发送请求成功后通知App更新状态
        this.props.updateAppState({
          isLoading: false,
          users: response.data.items,
        });
      },
      (error) => {
        console.log("失败了", error);
        // 发送请求失败后通知App更新状态
        this.props.updateAppState({
          isLoading: false,
          err: error.message,
        });
      }
    );
  };
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索Github用户</h3>
        <div>
          <input
            ref={(c) => (this.keyWordElement = c)}
            type="text"
            placeholder="请输入你想搜索的名字"
          />
          &nbsp;
          <button onClick={this.Search}>搜索</button>
        </div>
      </section>
    );
  }
}
