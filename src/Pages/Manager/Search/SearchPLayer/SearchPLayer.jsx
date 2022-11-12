import React from 'react'
import './Manager_SearchPlayer.css'
import cp from '../../../Administrator/images/image 10.png'
import {AiFillCaretDown} from 'react-icons/ai'
import ChangePlayer from '../../Change_Information/ChangePLayer/ChangePLayer'
import { useState } from 'react'

export default function SearchPLayer() {
    const [buttonPopup, setButtonPopup]= useState(false);
  return (
    <div className='Manager_SearchPlayer'>
        <div className='Manager_SearchPlayer-content'>
            <div className='Manager_content_left_searchPlayer'>
                <p className='Manager_titleContent_searchPlayer_item'>Họ tên:</p>
                <p className='Manager_titleContent_searchPlayer_item'>Ngày sinh:</p>
                <p className='Manager_titleContent_searchPlayer_item'>Chiều cao:</p>
                <p className='Manager_titleContent_searchPlayer_item'>Quốc tịch:</p>
                <p className='Manager_titleContent_searchPlayer_item'>Số áo:</p>
                <p className='Manager_titleContent_searchPlayer_item'>Loại:</p>
            </div>
            <div className='Manager_content_middle_searchPlayer'>
                <p className='Manager_information'>Nguyễn Công Phượng</p>
                <p className='Manager_information'>19/08/2002</p>
                <p className='Manager_information'>1.80m</p>
                <p className='Manager_information'>Việt Nam</p>
                <p className='Manager_information'>10</p>
                <p className='Manager_information'>Tiền đạo</p>
            </div>
            <div className='Manager_content_right_searchPlayer'>
                <img className='Manager_searchPLayer--image' src={cp} alt='a'/>
            </div>
        </div>
        <div className='Manager_searchPlayer_button_change'>
            <button className='Manager_searchPlayer_button_delete'>Xóa</button>
            <button className='Manager_searchPlayer_button_fix' onClick={() => setButtonPopup(true)}>Sửa</button>
        </div>
        <ChangePlayer trigger={buttonPopup} setTrigger={setButtonPopup}/>
    </div>    
  )
}
