import React, { Component } from 'react'
import './index.css'
import Header from '../common/Header'
import Home from '../Home/Home'
import Mine from '../Mine/Mine'
import Order from '../Order/Order'
import { Switch, Route, NavLink, Redirect } from 'react-router-dom'
export default class Index extends Component {
  
    render() {
        return (
            <div>
                <Header title='首页'></Header>
                {/* 二级路由出口 */}

                {/* <div className='navbar'>
                    <NavLink to='/index/home' activeClassName='select'>首页</NavLink>
                    <NavLink to='/index/order' activeClassName='select'> 订单</NavLink>
                    <NavLink to='/index/mine' activeClassName='select'>我的</NavLink>
                    <Redirect to='/index/home'></Redirect>
                </div> */}
                <Switch>
                    <Route path='/index/home' component={Home}></Route>
                    <Route path='/index/order' component={Order}></Route>
                    <Route path='/index/mine' component={Mine}></Route>
                </Switch>
                <div className='navbar'>
                    <NavLink to='/index/home' activeClassName='select'>首页</NavLink>
                    <NavLink to='/index/order' activeClassName='select'> 订单</NavLink>
                    <NavLink to='/index/mine' activeClassName='select'>我的</NavLink>
                    <Redirect to='/index/home'></Redirect>
                </div>
            </div>
        )
    }
}
