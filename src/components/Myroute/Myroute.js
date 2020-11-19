import React, { Component } from 'react'
import { Redirect ,Route} from 'react-router-dom'

export default class Myroute extends Component {

    render() {
        let isLogin  = sessionStorage.getItem('isLogin')
        console.log(this.props)
        return (
            <div>
                {
                    isLogin?<Route {...this.props}></Route>:<Redirect to='/login'></Redirect> 
                }
            </div>
        )
    }
}
