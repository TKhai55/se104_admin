import React from 'react'
import { Link } from 'react-router-dom'
import './Manager_Header_Search.css'
import {FcSearch} from 'react-icons/fc'
import {AiFillCaretDown} from 'react-icons/ai'

export default function HeaderSearch() {
  return (
    <div className='Manager_Header_Search'>
      <div className='Manager_Header_Search_title'>
        <FcSearch className='Manager_Header_title_icon' size={40}/>
        <p className='Manager_Header_title_text'>TRA CỨU</p>
      </div>
      <div className='Manager_Header_Search_filter'>
        <p className='Manager_txt_header_filter'>Tên cần tìm:</p>
        <input className='Manager_input_header_filter1'></input>
        <p className='Manager_txt_header_filter'>Đối tượng:</p>
        <div className='Manager_dropdown_select_object'>
          <p className='Manager_input_header_select_object'>Đối tượng <AiFillCaretDown className='Manager_input_header_select_object_icon'/></p>
          <div className='Manager_drop-list'>
            <Link to='/SearchManager/player' className='Manager_drop-list__item'>Cầu thủ</Link>
            <Link to='/SearchManager/coach' className='Manager_drop-list__item'>Huấn luyện viên</Link>
            <Link to='/SearchManager/club' className='Manager_drop-list__item'>Câu lạc bộ</Link>
          </div>
        </div>   
        <i></i>
      </div>
    </div>
    
  )
}
