import React, { useState } from 'react'
import {useNavigate } from 'react-router-dom'
import './Manager_Header_Search.css'
import {FcSearch} from 'react-icons/fc'
import {AiFillCaretDown} from 'react-icons/ai'

export default function HeaderSearch() {
  const [searchkey, setSearchKey]= useState()
  const navigate= useNavigate();
  return (
    <div className='Manager_Header_Search'>
      <div className='Manager_Header_Search_title'>
        <FcSearch className='Manager_Header_title_icon' size={40}/>
        <p className='Manager_Header_title_text'>TRA CỨU</p>
      </div>
      <div className='Manager_Header_Search_filter'>
        <p className='Manager_txt_header_filter'>Tên cần tìm:</p>
        <input className='Manager_input_header_filter1' onChange={(e)=>setSearchKey(e.target.value)}></input>
        <p className='Manager_txt_header_filter'>Đối tượng:</p>
        <div className='Manager_dropdown_select_object'>
          <p className='Manager_input_header_select_object'>Đối tượng <AiFillCaretDown className='Manager_input_header_select_object_icon'/></p>
          <div className='Manager_drop-list'>
            <div className='Manager_drop-list__item' onClick={()=> {navigate(`/manager/home/searchplayer/${searchkey}`,{
              state:{sk:searchkey},
            }); 
              window.location.reload();
            }}>
              Cầu thủ
            </div>
            <div className='Manager_drop-list__item' onClick={()=> {navigate(`/manager/home/searchcoach/${searchkey}`,{
              state:{sk:searchkey},
            }); 
              window.location.reload();
            }}>
              Huấn luyện viên
            </div>
            <div className='Manager_drop-list__item' onClick={()=> {navigate(`/manager/home/searchclub/${searchkey}`,{
              state:{sk:searchkey},
            }); 
              window.location.reload();
            }}>
              Câu lạc bộ
            </div>
          </div>
        </div>   
      </div>
    </div>
  )
}
