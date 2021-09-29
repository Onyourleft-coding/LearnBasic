import React from "react";
import ReactDOM from "react-dom";
//类式组件
/* class Demo extends React.Component {
  state = { count: 0 };
  myRef = React.createRef();
  add = () => {
    this.setState((state) => ({ count: state.count + 1 }));
  };
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((state) => ({ count: state.count + 1 }));
    }, 1000);
  }
  unmount = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById("root"));
  };
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  show = () => {
    alert(this.myRef.current.value);
  };
  render() {
    return (
      <div>
        <input type="text" ref={this.myRef} />
        <h1>当前求和为：{this.state.count}</h1>
        <button onClick={this.add}>点我加1</button>
        <button onClick={this.unmount}>卸载组件</button>
        <button onClick={this.show}>点击提示数据</button>
      </div>
    );
  }
} */
//#region
function Demo() {
  //   console.log("Demo");

  //数组解构赋值，按照位数去写
  const [count, setCount] = React.useState(0);
  const myRef = React.useRef();

  React.useEffect(() => {
    console.log("@");
    let timer = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    return () => {
      console.log("###");
      clearInterval(timer);
    };
  }, []); //添加一个空数组，谁也不监测，如果不写，就是默认检测所有

  //   console.log(count, setCount);
  // 加的回调
  function add() {
    // console.log("你点击了加号");
    // setCount(count+1);//第一种写法

    setCount((count) => count + 1);
  }
  //   卸载组件的回调
  function unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById("root"));
  }
  //   提示输入的回调
  function show() {
      alert(myRef.current.value)
  }
  return (
    <div>
      <input type="text" ref={myRef} />
      <h1>当前求和为：{count}</h1>
      <button onClick={add}>点我加1</button>
      <button onClick={unmount}>卸载组件</button>
      <button onClick={show}>点我提示数据</button>
    </div>
  );
}
//#endregion
export default Demo;
