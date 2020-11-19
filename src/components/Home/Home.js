import React, { Component } from 'react'
import Header from '../common/Header'

import { Link, NavLink } from 'react-router-dom'
export default class Home extends Component {
    pushFood(){
        console.log(this.props)
        this.props.history.push('/food')
    }

    pushMovie(){
        this.props.history.push('/movie')
    }

    pushFood1(path){
        this.props.history.push(path)
    }
    history1(path){
        this.props.history.replace(path)
    }
    render() {
        return (
            <div>
                <Header title='首页'></Header>
                {/* 1.link方式跳转 */}
                <Link to='/food'>美食1</Link>
                <Link to='/movie'>电影1</Link>

                <div>
                    {/* 2.NavLink方式跳转 */}
                    <NavLink to='/food'>美食2</NavLink>
                    <NavLink to='/movie'>电影2</NavLink>
                </div>
                <div>
                    <button onClick = {()=>{this.pushFood()}}>美食3</button>
                    <button onClick = {()=>{this.pushMovie()}}>电影3</button>
                </div>
                <hr/><hr/>

                <div>
                    <button onClick = {()=>{this.pushFood1('/food')}}>美食3</button>
                    <button onClick = {()=>{this.pushFood1('/movie')}}>电影3</button>
                </div>

                <div>
                    <button onClick = {()=>{this.history1('/food')}}>美食4</button>
                    <button onClick = {()=>{this.history1('/movie')}}>电影4</button>
                   
                </div>
            </div>
        )
    }
}
