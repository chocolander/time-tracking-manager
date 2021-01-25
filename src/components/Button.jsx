import React from 'react'

import './Button.css';


export const Button = ({ childeren, type, onClick, buttonStyle, buttonSize}) => {


    return (


        <button onClick = {onClick} type = {type}>
            {childeren}
        </button>
    )




}

