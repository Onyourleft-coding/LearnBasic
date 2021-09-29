import React, { PureComponent } from "react";
import "./index.css";
export default class Parent extends PureComponent {
  state = {
    carName: "奔驰c63",
    stus: ["小张", "小李", "小王"],
  };
  changeCar = () => {
    // this.setState({ carName: "迈巴赫" });
    const obj = this.state;
    obj.carName = "迈巴赫";
    console.log(obj === this.state);
    this.setState(obj);
  };
  /* shouldComponentUpdate(nextProps, nextState) {
    // console.log(this.props, this.state); //目前的props和state
    // console.log(nextProps, nextState); //接下来要变化的目标props和目标state
    return !this.state.carName === nextState.carName
    // if (this.state.carName === nextState.carName) return false;
    // else return true;
  } */
  addStu = () => {
    /* const { stus } = this.state;
    stus.unshift("小刘");
    this.setState({ stus }); */
    const { stus } = this.state;
    this.setState({ stus: ["小刘", ...stus] });
  };
  render() {
    const { carName } = this.state;
    console.log("!!!Parent-render");
    return (
      <div className="parent">
        <h3>我是Parent组件</h3>
        {this.state.stus}&nbsp;
        <span>我的车是：{carName}</span>
        <button onClick={this.addStu}>添加一个小刘</button>
        <button onClick={this.changeCar}>点我换车</button>
        <Child carName="奥拓" />
      </div>
    );
  }
}
class Child extends PureComponent {
  /* shouldComponentUpdate(nextProps, nextState) {
    console.log(this.props, this.state); //目前的props和state
    console.log(nextProps, nextState); //接下来要变化的目标props和目标state
    return !this.props.carName === nextProps.carName //跟下面的代码功能一样
    // if (this.props.carName === nextProps.carName) return false;
    // else return true;
  } */
  render() {
    console.log("@@Child-render");
    return (
      <div className="child">
        <h3>我是Child组件</h3>
        <span>我接受到的车是{this.props.carName}</span>
      </div>
    );
  }
}
