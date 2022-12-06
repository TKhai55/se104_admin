import React from 'react'
import './DetailClub.css'
import cp from '../../../../Administrator/images/image 10.png'

export default function DetailClub(props) {
    return (props.trigger) ? (
    <div className='SearchClub_Detail popup'>
        <div className='SearchClub-content_Detail popup_inner'>
            <div className='content_left_searchClub_Detail'>
                <p className='titleContent_searchClub_item_Detail'>Tên đội bóng:</p>
                <p className='titleContent_searchClub_item_Detail'>Năm thành lập:</p>
                <p className='titleContent_searchClub_item_Detail'>Sân vận động:</p>
            </div>
            <div className='content_middle_searchClub_Detail'>
                <p className='Club_information_Detail'>Nguyễn</p>
                <p className='Club_information_Detail'>Nguyễn</p>
                <p className='Club_information_Detail'>Nguyễn</p>
            </div>
            <div className='content_right_searchClub_Detail'>
                <img className='searchClub--image_Detail' src={cp} alt='a'/>
            </div>
        </div>
        <div className='Detail_exit'>
            <button className='searchClub_button_exit_Detail' onClick={() => props.setTrigger(false)}>Thoát</button>
            {props.children}
        </div>
    </div>    
  ): "";
}
