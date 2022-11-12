import React from 'react'
import './Organizer_SearchPlayer.css'
import cp from '../../../Administrator/images/image 10.png'
import {AiFillCaretDown} from 'react-icons/ai'

export default function SearchPLayer() {
  return (
    <div className='Organizer_SearchPlayer'>
        <div className='Organizer_SearchPlayer-content'>
            <div className='Organizer_content_left_searchPlayer'>
                <p className='Organizer_titleContent_searchPlayer_item'>Họ tên:</p>
                <p className='Organizer_titleContent_searchPlayer_item'>Ngày sinh:</p>
                <p className='Organizer_titleContent_searchPlayer_item'>Chiều cao:</p>
                <p className='Organizer_titleContent_searchPlayer_item'>Quốc tịch:</p>
                <p className='Organizer_titleContent_searchPlayer_item'>Số áo:</p>
                <p className='Organizer_titleContent_searchPlayer_item'>Loại:</p>
            </div>
            <div className='Organizer_content_middle_searchPlayer'>
                <p className='Organizer_information'>Nguyễn Công Phượng</p>
                <p className='Organizer_information'>19/08/2002</p>
                <p className='Organizer_information'>1.80m</p>
                <p className='Organizer_information'>Việt Nam</p>
                <p className='Organizer_information'>10</p>
                <div className='Organizer_dropdown_select_object'>
                    <p className='Organizer_typePlayer'>Loại <AiFillCaretDown className='Organizer_icon_dropdown'/></p>
                        <div className='Organizer_typePlayer--dropList'>
                            <div className='Organizer_typePlayer--dropList__item'>Tiền đạo</div>
                            <div className='Organizer_typePlayer--dropList__item'>Tiền vệ</div>
                            <div className='Organizer_typePlayer--dropList__item'>Hậu vệ</div>
                            <div className='Organizer_typePlayer--dropList__item'>Thủ môn</div>
                        </div>
                </div>               
            </div>
            <div className='Organizer_content_right_searchPlayer'>
                <img className='Organizer_searchPLayer--image' src={cp} alt='a'/>
            </div>
        </div>
    </div>    
  )
}
