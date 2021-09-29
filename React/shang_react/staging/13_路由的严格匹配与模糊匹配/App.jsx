import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import About from "./pages/About"; //About是路由组件
import Home from "./pages/Home"; //Home是路由组件
import Header from "./components/Header"; //Header是一般组件
import MyNavLink from "./components/MyNavLink"; //MyNavLink是自己封装的组件

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <Header a={1} />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 在react中靠路由链接实现切换组件-----编写路由链接 */}

              <MyNavLink to="/about">About</MyNavLink>
              <MyNavLink to="/home/a/b">Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                {/* Switch的使用可以提高路由匹配效率（单一匹配） */}
                <Switch>
                  <Route exact path="/about" component={About} />
                  <Route exact path="/home" component={Home} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
