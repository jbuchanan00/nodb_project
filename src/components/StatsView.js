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
    
    let statistics = this.state.statistics
    let index = this.state.statistics.findIndex(stat => +stat.id === +id)
    this.state.statistics.splice(index, 1)
    

    this.props.deleteStatLine(statistics, id)
}

    
    render() {
        let {stat} = this.props
        return (
            <div className="column">
            <div className="overallDisplay">
            <div className="statDisplay">
            <div className="displayStyle">
                {/* <p>Date: </p> */}
                <h2 className="date">{stat.date}</h2>
            </div>
            <div className="displayStyle">
                <p>Points: </p>
                <h2 className="stat">{stat.points}</h2>
            </div>
            <div className="displayStyle">
                <p>Assists: </p>
                <h2 className="stat">{stat.assists}</h2>
            </div>
            <div className="displayStyle">
                <p>Rebounds: </p>
                <h2 className="stat">{stat.rebounds}</h2>
            </div>
            <div className="displayStyle">
                <p>Blocks: </p>
                <h2 className="stat">{stat.blocks}</h2>
            </div>
            <div className="displayStyle">
                <p>Steals: </p>
                <h2 className="stat">{stat.steals}</h2>
            </div>
            </div>
            <div className="buttons">
            <StatsEditor statistics={this.state.statistics} updateStatLine={this.props.updateStatLine} id={stat.id}/>
            <button className="deletebutton" onClick={this.deleteStat} id={stat.id}>Delete</button>
            </div>
            </div>
            </div>
    )
    }
}