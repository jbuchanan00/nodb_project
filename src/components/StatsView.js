import React, { Component } from "react"
import StatsEditor from "./StatsEditor"






export default class StatsView extends Component {
    constructor(props){
    super(props)
    this.state = {
        statistics: this.props.statistics
    }
}

deleteStat = (e) => {
    let {id} = e.target
    console.log(id, this.state.statistics)
    let statistics = this.state.statistics
    let index = this.state.statistics.findIndex(stat => +stat.id === +id)
    this.state.statistics.splice(index, 1)
    console.log(index)
    console.log(this.state.statistics)

    this.props.deleteStatLine(statistics, id)
}
    
    render() {
        let {stat} = this.props
        return (
            <div className="column">
            <div className="overallDisplay">
            <div className="statDisplay">
            {/* {console.log(this.state)} */}
            <h1>{stat.id}</h1>
            <p>Date: <br />{stat.date}</p>
            <p>Points: {stat.points}</p>
            <p>Assists: {stat.assists}</p>
            <p>Rebounds: {stat.rebounds}</p>
            <p>Blocks: {stat.blocks}</p>
            <p>Steals: {stat.steals}</p>
            </div>
            <div className="buttons">
            <StatsEditor statistics={this.state.statistics}/>
            <button className="deletebutton" onClick={this.deleteStat} id={stat.id}>Delete</button>
            </div>
            </div>
            </div>
    )
    }
}