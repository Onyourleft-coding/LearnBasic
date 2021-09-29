import React, { Component } from "react";
import "./index.css";
export default class Item extends Component {
  state = { mouse: false }; //标识鼠标移出移出

  // 鼠标移入移出的回调
  handleMouse = (flag) => {
    // 高阶函数
    return () => {
      // console.log(flag);
      this.setState({ mouse: flag });
    };
  };

  //勾选和取消勾选某一个todo的回调
  handleCheck = (id) => {
    return (event) => {
      // console.log(id, event.target.checked);
      this.props.updateTodo(id, event.target.checked);
    };
  };

  // 删除一个todo的回调
  handleDelete = (id) => {
    // 不使用高阶的写法
    console.log("通知app删除", id);
    if (window.confirm("确定删除吗？")) {
      this.props.deleteTodo(id);
    }
  };
  render() {
    const { id, name, done } = this.props;
    const { mouse } = this.state;
    return (
      <li
        onMouseLeave={this.handleMouse(false)}
        onMouseEnter={this.handleMouse(true)}
        style={{ backgroundColor: mouse ? "#ddd" : "white" }}
      >
        <label>
          <input
            type="checkbox"
            checked={done}
            onChange={this.handleCheck(id)}
          />
          <span>{name}</span>
        </label>
        <button
          className="btn btn-danger"
          style={{ display: mouse ? "block" : "none" }}
          onClick={() => this.handleDelete(id)}
        >
          删除
        </button>
      </li>
    );
  }
}
