import React, { Component } from 'react'

import {Link} from 'react-router-dom'
import {filterPrice} from '../../filters/index.js'
import {reqMovieList} from '../../util/request'
export default class Food extends Component {
   
    constructor(){
        super()
        this.state={
            movie:[
                // {
                //     id:1,
                //     name:'ABC23',
                //     price:22
                // },
                // {
                //     id:2,
                //     name:'sdfdf ',
                //     price:12.9
                // }, {
                //     id:3,
                //     name:'csfdsfdsf',
                //     price:24.99
                // }
            ]
        }
    }
    componentDidMount(){
        reqMovieList().then(res=>{
            console.log(res)
            this.setState({
                movie:res.data.data
            })
        })
    }
    render() {
        let {movie} =this.state
        return (
            <div>
                <div>
                    {
                        movie.map(item=>{
                            return (
                                // <Link key={item.id} to={'/movieDetail?id='+item.id}>
                                //     <p>name:{item.name}</p>
                                //     <p>价格:{filterPrice(item.price)}</p>
                                // </Link>
                                <Link key={item.id} to={'/movieDetail/'+item.id}>
                                <p>name:{item.name}</p>
                                <p>价格:{filterPrice(item.price)}</p>
                            </Link>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
