import React from 'react'
import './Organizer_SearchCoach.css'
import cp from '../../../Administrator/images/image 10.png'
import {AiFillCaretDown} from 'react-icons/ai'

export default function SearchCoach() {
  return (
    <div className='Organizer_SearchCoach'>
        <div className='Organizer_SearchCoach-content'>
            <div className='Organizer_content_left_searchCoach'>
                <p className='Organizer_titleContent_searchCoach_item'>Họ tên:</p>
                <p className='Organizer_titleContent_searchCoach_item'>Ngày sinh:</p>
                <p className='Organizer_titleContent_searchCoach_item'>Ngày tham gia:</p>
                <p className='Organizer_titleContent_searchCoach_item'>Quốc tịch:</p>
                <p className='Organizer_titleContent_searchCoach_item'>Loại:</p>
            </div>
            <div className='Organizer_content_middle_searchCoach'>
                <p className='Organizer_informationCoach'>Kiatisuk</p>
                <p className='Organizer_informationCoach'>19/08/2002</p>
                <p className='Organizer_informationCoach'>19/08/2002</p>
                <p className='Organizer_informationCoach'>Thái Lan</p>
                <p className='Organizer_informationCoach'>HLV Trưởng</p>
            </div>
            <div className='Organizer_content_right_searchCoach'>
                <img className='Organizer_searchCoach--image' src={cp} alt='a'/>
            </div>
        </div>
    </div>    
  )
}
