import React from 'react'
import "./Add_HLV.css"

function Add_HLV(props) {
    return (props.trigger) ? (
        <div className='pop_up'>
            <div className='pop_up-inner'>
                <div className='close-btn' onClick={() => props.setTrigger(false)}>
                    X
                </div>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default Add_HLV
