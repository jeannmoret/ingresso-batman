import React from "react";
import './style.css'


function Button(props){
    return(
        <div className='containerButton'>
            <button onClick={() => props.onClick(20)}className={props.active ? 'button' : 'disabledButton'}>{props.name}</button>
            <span>Seus dados estão a salvo conosco!</span>     
        </div>
    )
}

export default Button;