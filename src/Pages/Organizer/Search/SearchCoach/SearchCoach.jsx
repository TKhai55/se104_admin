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
                <p className='Organizer_information'>Kiatisuk</p>
                <p className='Organizer_information'>19/08/2002</p>
                <p className='Organizer_information'>19/08/2002</p>
                <p className='Organizer_information'>Thái Lan</p>
                <div className='Organizer_dropdown_select_object'>
                    <p className='Organizer_typeCoach'>Loại <AiFillCaretDown className='Organizer_icon_dropdown'/></p>
                        <div className='Organizer_typeCoach--dropList'>
                            <div className='Organizer_typeCoach--dropList__item'>HLV Trưởng</div>
                            <div className='Organizer_typeCoach--dropList__item'>Trợ lý HLV</div>
                        </div>
                </div>      
            </div>
            <div className='Organizer_content_right_searchCoach'>
                <img className='Organizer_searchCoach--image' src={cp} alt='a'/>
            </div>
        </div>
    </div>    
  )
}
