import React, { Component } from 'react'

import querystring from 'querystring'
import { reqMovieDetail } from '../../util/request'
export default class FoodDetail extends Component {
    constructor() {
        super()
        this.state = {
            detail: {}
        }
    }
    componentDidMount() {
        console.log(this.props)  //?a=1&b=2&id=2   {id:'1'}
        let search = this.props.location.search;
        // console.log(search)  //?a=1&b=2&id=2
        // 1.原生
        // let str = search.slice(1);
        // // console.log(str)
        // let arr = str.split('&')
        // console.log(arr)
        // let result={}
        // arr.forEach(item=>{
        //     let aa  = item.split('=')
        //     console.log(aa)
        //     result[aa[0]]=aa[1]
        // })
        // console.log(result)

        // 2.3阶段知识点
        // let res = querystring.parse(search.slice(1))
        // console.log(res)
        let id = this.props.match.params.id
        // console.log(res)
        reqMovieDetail({ id: id }).then(res => {
            console.log(res)
            this.setState({
                detail:res.data.detail
            })
        })
    }

    render() {
        let { detail } = this.state
        return (
            <div>
                foodDetail
                <p>mingzi:{detail.name}</p>
            </div>
        )
    }
}
