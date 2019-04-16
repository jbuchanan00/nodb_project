import React, {Component} from "react"

export default class Average extends Component{

    pointsAverage = (array) => {
        let pointsArray = []
        for(let i = 0; i < array.length; i++){
            let point = array[i].points
            pointsArray.push(point)
        }
        let totalPoints = pointsArray.reduce((acc, point) => {
            return acc += parseInt(point)
        }, 0)
        return parseFloat(totalPoints / array.length).toFixed(2)
        
    }
    assistsAverage = (array) => {
        let assistsArray = []
        for(let i = 0; i < array.length; i++){
            let assist = array[i].assists
            assistsArray.push(assist)
        }
        let totalAssists = assistsArray.reduce((acc, assist) => {
            return acc += parseInt(assist)
        }, 0)
        return parseFloat(totalAssists / array.length).toFixed(2)
        
    }
    reboundsAverage = (array) => {
        let reboundsArray = []
        for(let i = 0; i < array.length; i++){
            let rebound = array[i].rebounds
            reboundsArray.push(rebound)
        }
        let totalRebounds = reboundsArray.reduce((acc, rebound) => {
            return acc += parseInt(rebound)
        }, 0)
        return parseFloat(totalRebounds / array.length).toFixed(2)
        
    }
    blocksAverage = (array) => {
        let blocksArray = []
        for(let i = 0; i < array.length; i++){
            let block = array[i].blocks
            blocksArray.push(block)
        }
        let totalBlocks = blocksArray.reduce((acc, block) => {
            return acc += parseInt(block)
        }, 0)
        return parseFloat(totalBlocks / array.length).toFixed(2)
        
    }
    stealsAverage = (array) => {
        let stealsArray = []
        for(let i = 0; i < array.length; i++){
            let steal = array[i].steals
            stealsArray.push(steal)
        }
        let totalSteals = stealsArray.reduce((acc, steal) => {
            return acc += parseInt(steal)
        }, 0)
        return parseFloat(totalSteals / array.length).toFixed(2)
        
    }
    render(){
        
        
        
        return(
            <div className="averagesContainersContainer">
            <div className="averagesContainer">
            <div className="averages">
            <div className="averageLabel">Points</div>
                {this.pointsAverage(this.props.statistics)}
                </div>
            <div className="averages">
            <div className="averageLabel">Assists</div>
                {this.assistsAverage(this.props.statistics)}
            </div>
            <div className="averages">
            <div className="averageLabel">Rebounds</div>
                {this.reboundsAverage(this.props.statistics)}
            </div>
            <div className="averages">
            <div className="averageLabel">Blocks</div>
                {this.blocksAverage(this.props.statistics)}
            </div>
            <div className="averages">
            <div className="averageLabel">Steals</div>
                {this.stealsAverage(this.props.statistics)}
            </div>
            </div>
            </div>
        )
    }
}