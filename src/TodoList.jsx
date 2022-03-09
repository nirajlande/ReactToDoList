import React from "react";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoList=(props)=>{
    return (
        <>
    <div className="List">
    <IconButton aria-label="delete" size="large" color="error" onClick={()=>{
        props.onSelect(props.id);
    }}>
        <DeleteIcon />
    </IconButton>
    <li>{props.text} </li>
    </div>
    </>
 )
}

export default TodoList;