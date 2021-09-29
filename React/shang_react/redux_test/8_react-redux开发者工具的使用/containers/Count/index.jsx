import React, { Component } from "react";
//引入connect用于链接UI组件与redux
import { connect } from "react-redux";
//引入action
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction,
} from "../../redux/actions/count";

// 定义UI组件
class Count extends Component {
  state = {
    carName: "奔驰c63",
  };
  // 加法
  increment = () => {
    //获取用户输入
    const { value } = this.selectedNumber;
    this.props.jia(value * 1);
  };
  // 减法
  decrement = () => {
    const { value } = this.selectedNumber;
    this.props.jian(value * 1);
  };
  // 奇数再加
  incrementIfOdd = () => {
    const { value } = this.selectedNumber;
    if (this.props.count % 2 !== 0) {
      this.props.jia(value * 1);
    }
  };
  // 异步加
  incrementAsync = () => {
    const { value } = this.selectedNumber;
    this.props.jiaAsync(value * 1, 500);
  };
  render() {
    // console.log("UI组件接受到的props是", this.props);
    return (
      <div>
        <h2>我是Count组件</h2>
        <h4>
          当前求和为：{this.props.count},下方组件总人数为:{this.props.renshu}
        </h4>
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
// 使用connect()()创建并暴露一个Count容器组件
export default connect(
  (state) => ({ count: state.he, renshu: state.ren.length }),
  //   mapDispatchToProps的简写
  //   mapDispatchToProps可以传两种值，一是函数，二是对象
  {
    jia: createIncrementAction,
    jian: createDecrementAction,
    jiaAsync: createIncrementAsyncAction,
  }
)(Count);
