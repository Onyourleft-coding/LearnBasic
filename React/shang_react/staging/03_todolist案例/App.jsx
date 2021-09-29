//创建外壳组件App
import React, { Component } from "react";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import "./App.css";
// 创建并暴露App组件
export default class App extends Component {
  // 状态在哪里，操作状态的方法就在哪里

  // 初始化状态
  state = {
    todos: [
      { id: "0001", name: "吃饭", done: true },
      { id: "0002", name: "睡觉", done: false },
      { id: "0003", name: "敲代码", done: true },
      { id: "0004", name: "洗澡", done: false },
    ],
  };

  /**组件间通信，要求父组件要在之前先给子组件A传递一个函数，然后组件A通过调用函数，把值传给父组件，再由父组件把值传给B组件
   * addTodo用于添加一个todo，接受的参数是todo对象
   */
    addTodo = (todoObj) => {
    // 获取原todos
    const { todos } = this.state;
    //追加一个todo
    const newTodos = [todoObj, ...todos];
    //更新状态
    this.setState({ todos: newTodos });
    console.log("app", todoObj);
  };

  // updataTodo用于更新一个todo对象
  updateTodo = (id, done) => {
    //获取状态中的todos
    const { todos } = this.state;
    // 匹配处理数据
    const newTodos = todos.map((todoObj) => {
      if (todoObj.id === id) return { ...todoObj, done };
      else return todoObj;
    });
    this.setState({ todos: newTodos });
  };

  //deleteTodo用于删除一个todo对象,只需要接受被删除的id
  deleteTodo = (id) => {
    //获取元来的todos
    const { todos } = this.state;
    //删除指定id的todo对象
    const newTodos = todos.filter((todoObj) => {
      return todoObj.id !== id;
    });
    //更新状态
    this.setState({ todos: newTodos });
  };

  //checkAllTodo用于全选
  checkAllTodo = (done) => {
    //获取原todos
    const { todos } = this.state;
    //加工数据
    const newTodos = todos.map((todoObj) => {
      return { ...todoObj, done };
    });
    //更新状态
    this.setState({ todos: newTodos });
  };

  //clearAllDone用于清除所有已经勾选的
  clearAllDone = () => {
    //获取原todos
    const { todos } = this.state;
    //过滤数据
    const newTodos = todos.filter((todoObj) => {
      return !todoObj.done;
    });
    // 更新状态
    this.setState({ todos: newTodos });
  };
  render() {
    const { todos } = this.state;
    return (
      <div>
        <div className="todo-container">
          <div className="todo-wrap">
            <Header addTodo={this.addTodo} />
            <List
              todos={todos}
              updateTodo={this.updateTodo}
              deleteTodo={this.deleteTodo}
            />
            <Footer
              todos={todos}
              checkAllTodo={this.checkAllTodo}
              clearAllDone={this.clearAllDone}
            />
          </div>
        </div>
      </div>
    );
  }
}
