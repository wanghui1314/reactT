import React, { Component } from 'react'

import Header from '../common/Header'
import {Link} from 'react-router-dom'
import {requestLogin} from '../../util/request'
export default class Login extends Component {
    constructor(){
        super()
        this.state={
            user:{
                name:'',
                pass:''
            }
        }
    }
    changeUser(e,key){
        this.setState({
            user:{
                ...this.state.user,
                [key]:e.target.value
            }
        })
    }
    login(){
        console.log(this.state.user)
        requestLogin(this.state.user).then(res=>{
            console.log(res)
            if(res.data.isok){
                sessionStorage.setItem('isLogin',1)
                this.props.history.push('/index/home')
            }else{
                alert(res.data.info)
            }
        })
        // if(this.state.user.name==='admin'&&this.state.user.pass==='123'){
        //     sessionStorage.setItem('isLogin',1)
        //     this.props.history.push('/index/home')
        // }else{
        //     alert(11)
        // }
    }
    render() {
        let {user} = this.state
        return (
            <div>
                <Header title='登录1'></Header>
                <div>
                        账号:<input type="text" value={user.name} onChange = {(e)=>{this.changeUser(e,'name')}}/>
                    </div>
                    <div>
                        密码: <input type="text" value={user.pass} onChange = {(e)=>{this.changeUser(e,'pass')}}/>
                    </div>
                    <div>
                        <button  onClick={()=>{this.login()}}>登录</button>
                        {/* <Link to='/index'>登录</Link> */}
                    </div>
                    {/* <Link to='/index'>登录跳转1</Link>
                    <NavLink to='/index'>跳转</NavLink> */}
            </div>
        )
    }
}
