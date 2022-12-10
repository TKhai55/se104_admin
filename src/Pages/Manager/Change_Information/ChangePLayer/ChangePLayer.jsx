import React from 'react'
import './ChangePlayer.css'
import cp from '../../../Administrator/images/image 10.png'

export default function ChangePLayer(props) {
  return (props.trigger) ? (
    <div className='SearchPlayer_Change popup'>
        <div className='SearchPlayer-content_Change popup_inner'>
            <div className='content_left_searchPlayer_Change'>
                <p className='titleContent_searchPlayer_item_Change'>Họ tên:</p>
                <p className='titleContent_searchPlayer_item_Change'>Ngày sinh:</p>
                <p className='titleContent_searchPlayer_item_Change'>Chiều cao:</p>
                <p className='titleContent_searchPlayer_item_Change'>Quốc tịch:</p>
                <p className='titleContent_searchPlayer_item_Change'>Số áo:</p>
                <p className='titleContent_searchPlayer_item_Change'>Loại:</p>
            </div>
            <div className='content_middle_searchPlayer_Change'>
                <input className='Player_information_Change'/>
                <input className='Player_information_Change'/>
                <input className='Player_information_Change'/>
                <input className='Player_information_Change'/>
                <input className='Player_information_Change'/>
                <select name="player" className="Player_object">
                    <option value="td">Tiền đạo</option>
                    <option value="tv">Tiền vệ</option>
                    <option value="hv">Hậu vệ</option>
                    <option value="tm">Thủ môn</option>
                </select>
            </div>
            <div className='content_right_searchPlayer_Change'>
                <img className='searchPLayer--image_Change' src={cp} alt='a'/>
                <button className='btn_imgPlayer_change'>Ảnh +</button>
            </div>
        </div>
        <div className='searchPLayer_button_change_Change'>
            <button className='searchPlayer_button_fix_Change'>Sửa</button>
            <button className='searchPlayer_button_exit_Change' onClick={() => props.setTrigger(false)}>Thoát</button>
            {props.children}
        </div>
    </div>    
  ): "";
}
