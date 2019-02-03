import React from 'react';

const footer = (props) =>{  
  
    return(
        <div className="Footer">
          <span><button className="btn btn-sm btn-secondary mr-3" value="all" onClick={props.filterChange}>All ({props.total})</button></span>
          <span><button className="btn btn-sm btn-secondary mr-3" value="active" onClick={props.filterChange}>Active ({props.active})</button></span>
          <span><button className="btn btn-sm btn-secondary " value="complete" onClick={props.filterChange}>Completed ({props.completed})</button></span>
  
  
      </div>
  )
}

export default footer;