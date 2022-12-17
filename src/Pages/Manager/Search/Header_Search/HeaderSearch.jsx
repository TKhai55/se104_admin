import React, { useState } from 'react'
import {useNavigate, useParams } from 'react-router-dom'
import './Manager_Header_Search.css'
import {FcSearch} from 'react-icons/fc'

export default function HeaderSearch() {
  const muagiaiID = useParams()
  const payload = {
    params: {
        muagiaiID
    }
  };
  const [searchkey, setSearchKey]= useState()
  // let [dt, setdt]= useState("doi")
  // const doituong1=()=>{
  //   document.getElementById("Manager_input_header_select_object").innerHTML = "Cầu thủ";
  //   setdt("Cầu thủ")
  // }
  // const doituong2=()=>{
  //   document.getElementById("Manager_input_header_select_object").innerHTML = "Huấn luyện viên";
  // }
  // const doituong3=()=>{
  //   document.getElementById("Manager_input_header_select_object").innerHTML = "Câu lạc bộ";
  // }
  const navigate= useNavigate();
  return (
    <div className='Manager_Header_Search'>
      <div className='Manager_Header_Search_title'>
        <FcSearch className='Manager_Header_title_icon' size={60}/>
        <p className='Manager_Header_title_text'>TRA CỨU</p>
      </div>
      <div className='Manager_Header_Search_filter'>
        <p className='Manager_txt_header_filter'>Tên cần tìm:</p>
        <input className='Manager_input_header_filter1' onChange={(e)=>setSearchKey(e.target.value)}></input>
        <p className='Manager_txt_header_filter'>Đối tượng:</p>
        <div className='Manager_dropdown_select_object'>
          <p id='Manager_input_header_select_object'>--Chọn đối tượng--</p>
          <div className='Manager_drop-list'>
            <div className='Manager_drop-list__item' id='DR1' onClick={()=> {navigate(`/manager/home/${payload.params.muagiaiID.muagiaiID}/searchplayer/${searchkey}`,{
              state:{sk:searchkey},
            }); 
              window.location.reload();
              // doituong1();
            }}>
              Cầu thủ
            </div>
            <div className='Manager_drop-list__item' id='DR2' onClick={()=> {navigate(`/manager/home/${payload.params.muagiaiID.muagiaiID}/searchcoach/${searchkey}`,{
              state:{sk:searchkey},
            }); 
              // doituong2();
              window.location.reload();
            }}>
              Huấn luyện viên
            </div>
            <div className='Manager_drop-list__item' id='DR3' onClick={()=> {navigate(`/manager/home/${payload.params.muagiaiID.muagiaiID}/searchclub/${searchkey}`,{
              state:{sk:searchkey},
            }); 
              // doituong3();
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
