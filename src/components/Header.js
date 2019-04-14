import React from "react"

export default function display(props){
return(
    <div className="fullheader">
    <img src={props.image} alt="Profile" style={{height: "50px", width: "50px", borderRadius: "50%"}} />
    <div className="header">
    
    <div className="titleHeader">
    <h1 style={{fontStyle: "italic"}}>StatPADDER</h1>
    </div>
    </div>
    </div>
)
}