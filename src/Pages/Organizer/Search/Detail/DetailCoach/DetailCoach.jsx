import React from 'react'
import './DetailCoach.css'
import cp from '../../../../Administrator/images/image 10.png'

export default function DetailCoach(props) {
  return (props.trigger) ? (
    <div className='SearchCoach_Detail popup'>
        <div className='SearchCoach-content_Detail popup_inner'>
            <div className='content_left_searchCoach_Detail'>
                <p className='titleContent_searchCoach_item_Detail'>Họ tên:</p>
                <p className='titleContent_searchCoach_item_Detail'>Ngày sinh:</p>
                <p className='titleContent_searchCoach_item_Detail'>Ngày tham gia:</p>
                <p className='titleContent_searchCoach_item_Detail'>Quốc tịch:</p>
                <p className='titleContent_searchCoach_item_Detail'>Loại:</p>
            </div>
            <div className='content_middle_searchCoach_Detail'>
                <p className='Coach_information_Detail'>Nguyễn</p>
                <p className='Coach_information_Detail'>Nguyễn</p>
                <p className='Coach_information_Detail'>Nguyễn</p>
                <p className='Coach_information_Detail'>Nguyễn</p>
                <p className='Coach_information_Detail'>Nguyễn</p> 
            </div>
            <div className='content_right_searchCoach_Detail'>
                <img className='searchCoach--image_Detail' src={cp} alt='a'/>
            </div>
        </div>
        <div className='Detail_exit'>
            <button className='searchCoach_button_exit_Detail' onClick={() => props.setTrigger(false)}>Thoát</button>
            {props.children}
        </div>
        
    </div>    
  ): "";
}
