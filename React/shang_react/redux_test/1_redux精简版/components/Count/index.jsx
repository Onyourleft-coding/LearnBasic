import React, { Component } from "react";
//引入store，用于获取redux中保存的状态
import store from "../../redux/store";

export default class Count extends Component {
  // 这里改成在index.js写，更加方便，不用担心有多余组件
  /*componentDidMount() {
    //检测redux中状态的变化，只要变化，就调用render
    store.subscribe(() => {
      this.setState({});
    });
  }
  */
  // 加法
  increment = () => {
    //获取用户输入
    const { value } = this.selectedNumber;
    //通知redux加value
    store.dispatch({ type: "increment", data: value * 1 });
  };
  // 减法
  decrement = () => {
    const { value } = this.selectedNumber;
    //通知redux减value
    store.dispatch({ type: "decrement", data: value * 1 });
  };
  // 奇数再加
  incrementIfOdd = () => {
    const { value } = this.selectedNumber;
    const count = store.getState();
    if (count % 2 !== 0) {
      //通知redux加value
      store.dispatch({ type: "increment", data: value * 1 });
    }
  };
  // 异步加
  incrementAsync = () => {
    const { value } = this.selectedNumber;

    setTimeout(() => {
      //通知redux加value
      store.dispatch({ type: "increment", data: value * 1 });
    }, 500);
  };
  render() {
    return (
      <div>
        <h1>当前求和为：{store.getState()}</h1>
        <select ref={(c) => (this.selectedNumber = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    );
  }
}
