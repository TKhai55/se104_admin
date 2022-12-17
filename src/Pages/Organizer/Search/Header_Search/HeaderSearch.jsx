import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './Organizer_Header_Search.css'
import {FcSearch} from 'react-icons/fc'
import {AiFillCaretDown} from 'react-icons/ai'
import { useState } from 'react'

export default function HeaderSearch() {
  const muagiaiID = useParams()
    const payload = {
        params: {
            muagiaiID
        }
    };
  const [searchkey, setSearchKey]= useState()
  const navigate= useNavigate();
  return (
    <div className='Header_Search'>
      <div className='Header_Search_title'>
        <FcSearch className='Header_title_icon' size={60}/>
        <p className='Header_title_text'>TRA CỨU</p>
      </div>
      <div className='Header_Search_filter'>
        <p className='txt_header_filter'>Tên cần tìm:</p>
        <input className='input_header_filter1' onChange={(e)=>setSearchKey(e.target.value)}></input>
        <p className='txt_header_filter'>Đối tượng:</p>
        <div className='dropdown_select_object'>
          <p className='input_header_select_object'>Đối tượng <AiFillCaretDown className='input_header_select_object_icon'/></p>
          <div className='drop-list'>
          <div className='Organizer_drop-list__item' onClick={()=> {navigate(`/organizer/home/${payload.params.muagiaiID.muagiaiID}/searchplayer/${searchkey}`,{
              state:{sk:searchkey},
            }); 
              window.location.reload();
            }}>
              Cầu thủ
            </div>
            <div className='Organizer_drop-list__item' onClick={()=> {navigate(`/organizer/home/${payload.params.muagiaiID.muagiaiID}/searchcoach/${searchkey}`,{
              state:{sk:searchkey},
            }); 
              window.location.reload();
            }}>
              Huấn luyện viên
            </div>
            <div className='Organizer_drop-list__item' onClick={()=> {navigate(`/organizer/home/${payload.params.muagiaiID.muagiaiID}/searchclub/${searchkey}`,{
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
