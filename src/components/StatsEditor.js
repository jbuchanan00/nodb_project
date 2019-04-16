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
        let {value, name} = e.target
        this.setState({
            [name]: value
        })
    }
    saveEdit = (e) => {
        
        let {id} = e.target

        this.setState({
            canEdit: !this.state.canEdit
        })
        let updatedStats = this.state
        
        this.props.updateStatLine(updatedStats, id)
    }
    cancelButton = (e) => {
        this.setState({
            canEdit: !this.state.canEdit
        })

    }

    
    render(){
    
            let viewing = !this.state.canEdit ? <button className="editButton" onClick={this.toggleEdit}><span>Edit</span></button> :
            
            <div>
                <input className="statsInput" name="date" onChange={this.handleChange} placeholder="date MM/DD/YY"></input>

                <input className="statsInput" name="points" onChange={this.handleChange} placeholder="Points"></input>

                <input className="statsInput" name="assists" onChange={this.handleChange} placeholder="Assists"></input>

                <input className="statsInput" name="rebound" onChange={this.handleChange} placeholder="Rebounds"></input>

                <input className="statsInput" name="blocks" onChange={this.handleChange} placeholder="Blocks"></input>

                <input className="statsInput" name="steals" onChange={this.handleChange} placeholder="Steals"></input>
            <div className="saveOrCancelButtons">
                <button className="editingButtons saveButton" onClick={this.saveEdit} id={this.props.id}>Save</button>

                <button className="editingButtons cancelButton" onClick={this.cancelButton}>Cancel</button>
            </div>
            </div>
            return(viewing)
        
    }
}