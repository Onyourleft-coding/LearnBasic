import React, { Component } from "react";

export default class Demo extends Component {
  state = { count: 0 };
  add = () => {
    //对象式的setState
    /**
        //获取原来的count值
        const {count} = this.state
        //更新状态
        this.setState({count:count+1},()=>{
            console.log(this.state.count);
        })
        // console.log('12行的输出',this.state.count);//0
        */
    // this.setState({ count: this.state.count + 1 }); //另外一种方式

    // 函数式的setState
    this.setState((state) => ({ count: state.count + 1 }));
  };
  render() {
    return (
      <div>
        <h1>当前求和为：{this.state.count}</h1>
        <button onClick={this.add}>点我加1</button>
      </div>
    );
  }
}
