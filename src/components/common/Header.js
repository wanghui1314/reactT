import React, { Component } from 'react'

import {Link,NavLink,withRouter} from 'react-router-dom'
import './Header.css'
class Header extends Component {
    gogo(){
        console.log(this.props)
        this.props.history.go(-1)
    }
    render() {
        let { title ,back} = this.props
        
        return (
            <div>
                <div className="header">
                    {
                        back? <button className='header-btn' onClick={()=>{this.gogo()}}> 返回</button>:null
                    }
                   
                    <div className="header-title">{title}</div>
                </div>
                  
            </div>
        )
    }
}

export default withRouter(Header) 