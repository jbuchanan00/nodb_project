import React, {Component} from "react"
import StatsView from "./StatsView"
import StatsInputForm from "./StatsInputForm"
import Average from "./Average"

import Axios from "axios";

export default class Stats extends Component{
    constructor(){
        super()
        this.state = {
            statistics: []
        }
    }
    componentDidMount(){
        Axios.get("/api/statistics").then((res) =>
        this.setState({
            statistics: res.data
        })).catch(err => console.log("there was an error", err))
    }
    createStatLine = (newStats) => {
        Axios.post("/api/statistics", newStats).then((res) => {
            this.setState({
                statistics: res.data
            })
        }).catch(err => console.log("there was an error", err))
    }
    updateStatLine = (stat, id) => {
        Axios.put(`/api/statistics/${id}`, stat).then(res => {
            this.setState({
                statistics: res.data
            })
        }).catch(err => console.log("there was an error", err))
    }
    
    deleteStatLine = (statistics, id) => {
        Axios.delete(`/api/statistics/${id}`, statistics).then(res => {
            this.setState({
                statistics: res.data
            })
        }).catch(err => console.log("there was an error", err))
    }
    
    

    render(){
        
        return(
            <div>
            <StatsInputForm createStatLine={this.createStatLine}/>
                
            <Average statistics={this.state.statistics} />
            {this.state.statistics.map(stat => {
                
                return <StatsView key={stat.id} stat={stat}
                statistics={this.state.statistics} deleteStatLine={this.deleteStatLine} updateStatLine={this.updateStatLine} />
            })}
            {/* {this.state.statistics.map(stat => { */
            //     points={stat.points} rebounds={stat.rebounds} assists={stat.assists} blocks={stat.blocks} steals={stat.steals}
            //     />
            // })}
        }
            
            
            
            </div>
        )
    }
}