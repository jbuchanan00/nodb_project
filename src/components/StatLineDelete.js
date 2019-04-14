import React, {Component} from "react"

export default class StatLineDelete extends Component{
    constructor(props){
        super(props)
        this.state = {
            statistics: this.props.statistics
        }
    }
    handleClick = (key) => {
        console.log(key)
        const statistics = [this.state]
        statistics.splice(key, 1)
        this.setState({
            statistics
        })
    }
        
    
    render(){
        return(
            <div>
            {console.log(this.props.statistics)}
                <button onClick={this.handleClick}>Delete</button>
            </div>
        )
    }
}