import React, { Component } from "react";
import "./index.css";

//创建Context对象
const MyContext = React.createContext();
const { Provider, Consumer } = MyContext;
export default class A extends Component {
  state = { username: "tom", age: 18 };
  render() {
    const { username, age } = this.state;
    return (
      <div className="parent">
        <h3>我是A组件</h3>
        <h4>我的用户名是:{username}</h4>
        <Provider value={{ username, age }}>
          <B />
        </Provider>
      </div>
    );
  }
}
class B extends Component {
  render() {
    console.log("B", this.context);
    return (
      <div className="child">
        <h3>我是B组件</h3>
        <h4>我不需要A组件的信息</h4>
        <C />
      </div>
    );
  }
}
/* class C extends Component {
  static contextType = MyContext; //声明接受context
  render() {
    console.log(this.context);
    const { username, age } = this.context;
    return (
      <div className="grand">
        <h3>我是C组件</h3>
        <h4>我从A组件是接受到的用户名:{username}</h4>
        <h4>我从A组件是接受到的用户名的年龄:{age}</h4>
      </div>
    );
  }
} */

function C() {
  return (
    <div className="grand">
      <h3>我是C组件</h3>
      <h4>我从A组件是接受到的用户名:</h4>
      <h4>我从A组件是接受到的用户名的年龄:</h4>
      <Consumer>{(value) => `${value.username},年龄是${value.age}`}</Consumer>
    </div>
  );
}
