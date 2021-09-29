import React, { Component } from "react";
// import axios from "axios";
import PubSub from "pubsub-js";
export default class Search extends Component {
  Search = async () => {
    //发布消息
    console.log("Search组件发布消息了");

    //获取用户的输入
    // console.log(this.keyWordElement.value);
    const {
      keyWordElement: { value: keyWord },
    } = this; //连续结构赋值+重命名
    // 发送请求前通知List更新状态
    // this.props.updateAppState({ isFirst: false, isLoading: true });
    PubSub.publish("moer", { isFirst: false, isLoading: true });
    console.log(keyWord);
    //#region 发送网络请求----使用axios发送
    // 发送网络请求 站在3000端口发给3000，前面的http可以省略不写
    /*  axios.get(`/api1/search/users?q=${keyWord}`).then(
      (response) => {
        console.log("成功了", response.data);
        // 发送请求成功后通知List更新状态
        // this.props.updateAppState({
        //   isLoading: false,
        //   users: response.data.items,
        // });
        PubSub.publish("moer", {
          isLoading: false,
          users: response.data.items,
        });
      },
      (error) => {
        console.log("失败了", error);
        // 发送请求失败后通知List更新状态
        // this.props.updateAppState({
        //   isLoading: false,
        //   err: error.message,
        // });
        PubSub.publish("moer", {
          isLoading: false,
          err: error.message,
        });
      }
    ); */
    //#endregion

    //#region  发送网络请求----使用fetch发送请求
    /* fetch(`/api1/search/users?q=${keyWord}`)
      .then(
        (response) => {
          console.log("联系服务器成功了");
          return response.json();
        }
        (error) => {
        console.log("联系服务器失败了", error.message);
        return new Promise(()=>{}) //返回一个初始化状态的promise
      }
      )
      .then(
        (response) => {
          console.log("获取数据成功了！", response);
        },
        error=>{
            console.log('获取数据失败了',error);
        }
      )
      .catch((error) => {
        //   数据获取数据直接走到这一步，统一处理错误
        console.log(error);
      }); */
    //#endregion

    //发送网络请求----使用fetch发送（优化）
    try {
      const response = await fetch(`/api1/search/users?q=${keyWord}`);
      const data = await response.json();
      //   console.log(data);
      PubSub.publish("moer", {
        isLoading: false,
        users: data.items,
      });
    } catch (error) {
      console.log("请求出错", error);
      PubSub.publish("moer", {
        isLoading: false,
        err: error.message,
      });
    }
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
