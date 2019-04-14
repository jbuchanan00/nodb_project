import React, {Component} from "react"

export default class StatsEditor extends Component{
    constructor(props){
        super(props)
        this.state ={
            date: "",
            points: 0,
            assists: 0,
            rebounds: 0,
            blocks: 0,
            steals: 0,
            canEdit: false
        }
    }
    toggleEdit = () => {
        this.setState({
            canEdit: !this.state.canEdit
        })
    }
    handleChange = (e) => {
        let {name, value} = e.target
        this.setState({
            [name]: value
        })
    }
    saveEdit = () => {
        this.setState({
            canEdit: !this.state.canEdit
        })
        let updatedStats = this.state
        console.log(updatedStats)
    }

    
    render(){
        console.log(this.state)
            let viewing = !this.state.canEdit ? <button className="editButton" onClick={this.toggleEdit}>Edit</button> :
            
            <div>
                <input className="editor" name="date" value={this.state.date}></input>
                <input className="editor" name="points" value={this.state.points}></input>
                <input className="editor" name="assists" value={this.state.assists}></input>
                <input className="editor" name="rebound" value={this.state.rebounds}></input>
                <input className="editor" name="blocks" value={this.state.blocks}></input>
                <input className="editor" name="steals" value={this.state.steals}></input>
                <button onClick={this.saveEdit}>Save</button>
            </div>
            return(viewing)
        
    }
}