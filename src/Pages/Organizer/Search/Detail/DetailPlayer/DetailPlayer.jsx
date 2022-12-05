import React from 'react'
import './DetailPlayer.css'
import cp from '../../../../Administrator/images/image 10.png'

export default function DetailPLayer(props) {
  return (props.trigger) ? (
    <div className='SearchPlayer_Detail popup'>
        <div className='SearchPlayer-content_Detail popup_inner'>
            <div className='content_left_searchPlayer_Detail'>
                <p className='titleContent_searchPlayer_item_Detail'>Họ tên:</p>
                <p className='titleContent_searchPlayer_item_Detail'>Ngày sinh:</p>
                <p className='titleContent_searchPlayer_item_Detail'>Chiều cao:</p>
                <p className='titleContent_searchPlayer_item_Detail'>Quốc tịch:</p>
                <p className='titleContent_searchPlayer_item_Detail'>Số áo:</p>
                <p className='titleContent_searchPlayer_item_Detail'>Loại:</p>
            </div>
            <div className='content_middle_searchPlayer_Detail'>
                <p className='Player_information_Detail'>Nguyễn</p>
                <p className='Player_information_Detail'>Nguyễn</p>
                <p className='Player_information_Detail'>Nguyễn</p>
                <p className='Player_information_Detail'>Nguyễn</p>
                <p className='Player_information_Detail'>Nguyễn</p>
                <p className='Player_information_Detail'>Nguyễn</p>
            </div>
            <div className='content_right_searchPlayer_Detail'>
                <img className='searchPLayer--image_Detail' src={cp} alt='a'/>
            </div>
        </div>
        <div className='Detail_exit'>
            <button className='searchPlayer_button_exit_Detail' onClick={() => props.setTrigger(false)}>Thoát</button>
            {props.children}
        </div>
    </div>    
  ): "";
}
