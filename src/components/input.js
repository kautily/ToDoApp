import React from 'react';

const input = (props) => {
    let errormsg;
     if(props.isError){
        errormsg = <span style={{color: "red"}}>{props.errorMsg}</span>
     }else{
        errormsg= <span></span>
     }
    return(
        <div className="col-sm-8 offset-2">
            <div className="input-group">
            <input type="text" 
            placeholder="Enter Task Name" 
            value={props.value} 
            onChange={props.updateText} 
            className="form-control"
            onKeyPress={props.enterPressed} />
            <div className="input-group-btn">
             <button className="btn btn-primary"  onClick={props.submit}>ADD </button>
             </div>
             </div>
           { errormsg }
        </div>
    )
}


export default input;