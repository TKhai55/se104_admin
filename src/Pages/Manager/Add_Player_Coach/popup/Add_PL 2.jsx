import React from 'react'
import "./Add_PL.css"


function Add_PL(props) {
    return (props.trigger) ? (
        <div className='popup1'>
            <div className='popup-inner1'>
                <div className='close-btn1' onClick={() => props.setTrigger1(false)}>
                    X
                </div>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default Add_PL
