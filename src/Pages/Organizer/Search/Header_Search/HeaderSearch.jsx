import React from 'react'
import { Link } from 'react-router-dom'
import './Organizer_Header_Search.css'
import {FcSearch} from 'react-icons/fc'
import {AiFillCaretDown} from 'react-icons/ai'

export default function HeaderSearch() {
  return (
    <div className='Header_Search'>
      <div className='Header_Search_title'>
        <FcSearch className='Header_title_icon' size={40}/>
        <p className='Header_title_text'>TRA CỨU</p>
      </div>
      <div className='Header_Search_filter'>
        <p className='txt_header_filter'>Tên cần tìm:</p>
        <input className='input_header_filter1'></input>
        <p className='txt_header_filter'>Đối tượng:</p>
        <div className='dropdown_select_object'>
          <p className='input_header_select_object'>Đối tượng <AiFillCaretDown className='input_header_select_object_icon'/></p>
          <div className='drop-list'>
            <Link to='/SearchOrganizer/player' className='drop-list__item'>Cầu thủ</Link>
            <Link to='/SearchOrganizer/coach' className='drop-list__item'>Huấn luyện viên</Link>
            <Link to='/SearchOrganizer/club' className='drop-list__item'>Câu lạc bộ</Link>
          </div>
        </div>   
        <i></i>
      </div>
    </div>
    
  )
}