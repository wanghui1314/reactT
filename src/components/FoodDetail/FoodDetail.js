import React, { Component } from 'react'

export default class FoodDetail extends Component {
    componentDidMount(){
        console.log(this.props)
        let id=this.props.match.params.id
        console.log(id)
    }
    render() {
        return (
            <div>
                foodDetail
            </div>
        )
    }
}
