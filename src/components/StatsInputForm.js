import React, {Component} from "react"


export default class StatsInputForm extends Component{
    constructor(){
        super()
        this.state = {
            date: "",
            points: 0,
            assists: 0,
            rebounds: 0,
            steals: 0,
            blocks: 0

        }
    }
    handleChange = e => {
        let {value, name} = e.target
        this.setState({
            [name]: value
        })
        
    }
    handleClick = () => {
        let newStats = this.state
        this.props.createStatLine(newStats)
    }
render(){
    // console.log(this.state)
    return(
        <div className="fullInputs">
        <input className="statsInput" onChange={this.handleChange} name="date" prop="date" type="text" placeholder="MM/DD/YY"/>
        <input className="statsInput" onChange={this.handleChange} name="points" placeholder="points" type="number" />
        <input className="statsInput" onChange={this.handleChange} name="assists" placeholder="assists" type="number"/>
        <input className="statsInput" onChange={this.handleChange} name="rebounds" placeholder="rebounds" type="number"/>
        <input className="statsInput" onChange={this.handleChange} name="steals" placeholder="steals" type="number"/>
        <input className="statsInput" onChange={this.handleChange} name="blocks" placeholder="blocks" type="number"/>
        <button className="submitNew" onClick={this.handleClick}>Submit</button>
        </div>
    )
}
}