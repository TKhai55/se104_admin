import React from 'react'
import './ChangeClub.css'
import cp from '../../../Administrator/images/image 10.png'

export default function ChangeClub(props) {
    return (props.trigger) ? (
    <div className='SearchClub_Change popup'>
        <div className='SearchClub-content_Change popup_inner'>
            <div className='content_left_searchClub_Change'>
                <p className='titleContent_searchClub_item_Change'>Tên đội bóng:</p>
                <p className='titleContent_searchClub_item_Change'>Năm thành lập:</p>
                <p className='titleContent_searchClub_item_Change'>Sân vận động:</p>
            </div>
            <div className='content_middle_searchClub_Change'>
                <input className='Club_information_Change'/>
                <input className='Club_information_Change'/>
                <input className='Club_information_Change'/>
                
            </div>
            <div className='content_right_searchClub_Change'>
                <img className='searchClub--image_Change' src={cp} alt='a'/>
                <button className='btn_imgClub_change'>Ảnh +</button>
            </div>
        </div>
        <div className='searchClub_button_change_Change'>
            <button className='searchClub_button_fix_Change'>Sửa</button>
            <button className='searchClub_button_exit_Change' onClick={() => props.setTrigger(false)}>Thoát</button>
            {props.children}
        </div>
    </div>    
  ): "";
}
