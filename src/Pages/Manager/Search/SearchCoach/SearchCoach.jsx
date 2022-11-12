import React from 'react'
import './Manager_SearchCoach.css'
import cp from '../../../Administrator/images/image 10.png'
import {AiFillCaretDown} from 'react-icons/ai'
import ChangeCoach from '../../Change_Information/ChangeCoach/ChangeCoach'
import { useState } from 'react'

export default function SearchCoach() {
    const [buttonPopup, setButtonPopup]= useState(false);
  return (
    <div className='Manager_SearchCoach'>
        <div className='Manager_SearchCoach-content'>
            <div className='Manager_content_left_searchCoach'>
                <p className='Manager_titleContent_searchCoach_item'>Họ tên:</p>
                <p className='Manager_titleContent_searchCoach_item'>Ngày sinh:</p>
                <p className='Manager_titleContent_searchCoach_item'>Ngày tham gia:</p>
                <p className='Manager_titleContent_searchCoach_item'>Quốc tịch:</p>
                <p className='Manager_titleContent_searchCoach_item'>Loại:</p>
            </div>
            <div className='Manager_content_middle_searchCoach'>
                <p className='Manager_information'>Kiatisuk</p>
                <p className='Manager_information'>19/08/2002</p>
                <p className='Manager_information'>19/08/2002</p>
                <p className='Manager_information'>Thái Lan</p>
                <p className='Manager_information'>HLV Trưởng</p>
            </div>
            <div className='Manager_content_right_searchCoach'>
                <img className='Manager_searchCoach--image' src={cp} alt='a'/>
            </div>
        </div>
        <div className='Manager_searchCoach_button_change'>
            <button className='Manager_searchCoach_button_delete'>Xóa</button>
            <button className='Manager_searchCoach_button_fix' onClick={() => setButtonPopup(true)}>Sửa</button>
        </div>
        <ChangeCoach trigger={buttonPopup} setTrigger={setButtonPopup}/>
    </div>    
  )
}
