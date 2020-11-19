import React, { Component } from 'react'
import Header from '../common/Header'
import {Link} from 'react-router-dom'


import '../../asset/css/iconfont.css'
export default class Food extends Component {
    go(){
        this.props.history.go(-1)
    }
    constructor(){
        super()
        this.state={
            food:[
                {
                    id:1,
                    name:'aa',
                    price:22.99
                },
                {
                    id:2,
                    name:'bb',
                    price:12.99
                }, {
                    id:3,
                    name:'cc',
                    price:24.99
                }
            ]
        }
    }
    render() {
        let {food} =this.state
        return (
          
            <div>
                  <Header title='美食列表' back></Header>
                <i className='iconfont icon-fanhui' onClick={()=>{this.go()}}>返回</i>
                <hr/>
                <div>
                    {
                        food.map(item=>{
                            return (<Link key={item.id} to={'/foodDetail/'+item.id}>
                                <p>名字:{item.name}</p>
                                <p>价格:{item.price}</p>
                            </Link>)
                        })
                    }

                </div>
            </div>
        )
    }
}
