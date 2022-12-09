import React from 'react'
import './ChangeCoach.css'
import cp from '../../../Administrator/images/image 10.png'
import {AiFillCaretDown} from 'react-icons/ai'

export default function ChangeCoach(props) {
  return (props.trigger) ? (
    <div className='SearchCoach_Change popup'>
        <div className='SearchCoach-content_Change popup_inner'>
            <div className='content_left_searchCoach_Change'>
                <p className='titleContent_searchCoach_item_Change'>Họ tên:</p>
                <p className='titleContent_searchCoach_item_Change'>Ngày sinh:</p>
                <p className='titleContent_searchCoach_item_Change'>Ngày tham gia:</p>
                <p className='titleContent_searchCoach_item_Change'>Quốc tịch:</p>
                <p className='titleContent_searchCoach_item_Change'>Loại:</p>
            </div>
            <div className='content_middle_searchCoach_Change'>
                <input className='Coach_information_Change'/>
                <input className='Coach_information_Change'/>
                <input className='Coach_information_Change'/>
                <input className='Coach_information_Change'/>
                <select name="coach" className="Coach_object">
                    <option value="td">HLV Trưởng</option>
                    <option value="tv">Trợ lý HLV</option>
                </select>   
            </div>
            <div className='content_right_searchCoach_Change'>
                <img className='searchCoach--image_Change' src={cp} alt='a'/>
                <button className='btn_imgCoach_change'>Ảnh +</button>
            </div>
        </div>
        <div className='searchCoach_button_change_Change'>
            <button className='searchCoach_button_fix_Change'>Sửa</button>
            <button className='searchCoach_button_exit_Change' onClick={() => props.setTrigger(false)}>Thoát</button>
            {props.children}
        </div>
    </div>    
  ): "";
}
