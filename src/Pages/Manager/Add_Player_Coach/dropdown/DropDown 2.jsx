import React from 'react'
import "./DropDown.css"



function Dropdown(props) {
    return (
        <div className='dropdown'>
            {props.children}
        </div>
    )
}

export default Dropdown