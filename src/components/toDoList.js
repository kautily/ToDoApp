import React from 'react';


const toDoList =(props) =>{
    return(
       <div className="col-sm-8 offset-2">
            <div className={"ToDOList " + (props.status === 'active' ? "active" :  "complete" ) }>
            <span>{props.taskName}</span>
           <span style={{float: "right"}}> 
           <button className="btn btn-sm btn-primary mr-3" onClick={props.changeStatus}>{props.status}</button>
           <button className="btn btn-sm btn-danger " onClick={props.deleteItem}>x</button>
           </span>
        </div>
       </div>
    )
}

export default toDoList;