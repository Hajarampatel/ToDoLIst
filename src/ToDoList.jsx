import React from "react";

function ToDo(props) {
     
        return <>
        <div className="todo_style">
        <i className="fa fa-times"  onClick={() => { props.del(props.id)}} area-hidden='true'/>
        <p>  {  props.text}</p> 
        </div>
</>
}

export default ToDo;