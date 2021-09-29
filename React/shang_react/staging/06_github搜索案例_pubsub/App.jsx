import React, { Component } from "react";
import Search from "./components/Seach";
import List from "./components/List";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Search />
        {/* 批量传递 */}
        <List />
      </div>
    );
  }
}
