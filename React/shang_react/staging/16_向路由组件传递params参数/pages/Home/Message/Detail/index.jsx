import React, { Component } from "react";
const Detaildata = [
  { id: "001", content: "你好，汕头" },
  { id: "002", content: "你好，清远" },
  { id: "003", content: "你好，清职" },
  { id: "004", content: "你好，摩尔" },
];
export default class Detail extends Component {
  render() {
    console.log(this.props);
    // 接受params参数
    const { id, title } = this.props.match.params;
    //   查找id匹配的content
    const findResult = Detaildata.find((detailObj) => {
      return detailObj.id === id;
    });
    return (
      <ul>
        <li>iD:{id}</li>
        <li>title:{title}</li>
        <li>content:{findResult.content}</li>
      </ul>
    );
  }
}
