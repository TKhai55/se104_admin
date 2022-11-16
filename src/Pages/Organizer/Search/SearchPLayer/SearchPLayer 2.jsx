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
                <p className='Organizer_informationPlayer'>Nguyễn Công Phượng</p>
                <p className='Organizer_informationPlayer'>19/08/2002</p>
                <p className='Organizer_informationPlayer'>1.80m</p>
                <p className='Organizer_informationPlayer'>Việt Nam</p>
                <p className='Organizer_informationPlayer'>10</p>
                <p className='Organizer_informationPlayer'>Tiền đạo</p>
            </div>
            <div className='Organizer_content_right_searchPlayer'>
                <img className='Organizer_searchPLayer--image' src={cp} alt='a'/>
            </div>
        </div>
    </div>    
  )
}
