import React, { Component } from "react";

export default class Child extends Component {
  state = {
    /* users: [
      { id: "0001", name: "xiaobai", age: 16 },
      { id: "0002", name: "xiaohong", age: 17 },
      { id: "0003", name: "xiaowang", age: 18 },
    ], */
    users:'abc'
  };
  render() {
    return (
      <div>
        <h2>我是Child组件</h2>
        {this.state.users.map((userObj) => {
          return (
            <h4 key={userObj.id}>
              {userObj.name}---{userObj.age}
            </h4>
          );
        })}
      </div>
    );
  }
}
