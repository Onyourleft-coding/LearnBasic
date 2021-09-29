import React, { Component } from "react";
import qs from "querystring";

let obj = { name: "tom", age: 16 }; //name=tom&age=15 key-value&key=value  这种编码形式叫做urlencoded
console.log(qs.stringify(obj));
let str = "carname=奔驰&price=66";
console.log(qs.parse(str));

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
    // const { id, title } = this.props.match.params;

    // //取出search参数
    // const { search } = this.props.location;
    // const { id, title } = qs.parse(search.slice(1)); //顺便把问号截取了

    // 接受state参数
    const { id, title } = this.props.location.state || {};

    // 查找id匹配的content;
    const findResult =
      Detaildata.find((detailObj) => {
        return detailObj.id === id;
      }) || {};
      // 26行和32行加上 || {}  解决没有参数时报错的问题
    return (
      <ul>
        <li>iD:{id}</li>
        <li>title:{title}</li>
        <li>content:{findResult.content}</li>
      </ul>
    );
  }
}
