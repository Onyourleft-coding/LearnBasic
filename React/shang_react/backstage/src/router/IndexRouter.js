import React from 'react'
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'
import Login from '../views/login/Login'
import NewsSandBox from '../views/NewsSandBox'
import Register from '../views/register/Register'
import News from '../views/news/News'
import Detail from '../views/news/Detail'
export default function IndexRouter() {
    return (
        <HashRouter>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/news" component={News} />
                <Route path="/detail/:id" component={Detail} />
                <Route path="/register" component={Register} />
                {/* <Route path="/" component={NewsSandBox} /> */}
                <Route path="/" render={() =>
                    localStorage.getItem("token") ? <NewsSandBox></NewsSandBox> : <Redirect to="/login" />
                }
                />
            </Switch>
        </HashRouter>
    )
}
