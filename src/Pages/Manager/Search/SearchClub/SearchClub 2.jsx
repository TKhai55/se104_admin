import React from 'react'
import './Manager_SearchClub.css'
import cp from '../../../Administrator/images/image 10.png'
import ChangeClub from '../../Change_Information/ChangeClub/ChangeClub'
import { useState } from 'react'

export default function SearchClub() {
    const [buttonPopup, setButtonPopup]= useState(false);
    return (
    <div className='Manager_SearchClub'>
        <div className='Manager_SearchClub-content'>
            <div className='Manager_content_left_searchClub'>
                <p className='Manager_titleContent_searchClub_item'>Tên đội bóng:</p>
                <p className='Manager_titleContent_searchClub_item'>Năm thành lập:</p>
                <p className='Manager_titleContent_searchClub_item'>Sân vận động:</p>
            </div>
            <div className='Manager_content_middle_searchClub'>
                <p className='Manager_informationClub'>Hoàng Anh Gia Lai</p>
                <p className='Manager_informationClub'>2000</p>
                <p className='Manager_informationClub'>Hoàng Anh Gia Lai</p>
                
            </div>
            <div className='Manager_content_right_searchClub'>
                <img className='Manager_searchClub--image' src={cp} alt='a'/>
            </div>
        </div>
        <div className='Manager_searchClub_button_change'>
            <button className='Manager_searchClub_button_delete'>Xóa</button>
            <button className='Manager_searchClub_button_fix' onClick={() => setButtonPopup(true)}>Sửa</button>
        </div>
        <ChangeClub trigger={buttonPopup} setTrigger={setButtonPopup}/>
    </div>    
  )
}
