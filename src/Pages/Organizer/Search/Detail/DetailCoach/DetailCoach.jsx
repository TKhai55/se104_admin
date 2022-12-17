import React from 'react'
import './DetailCoach.css'
import { useState, } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';

export default function DetailCoach() {
    const muagiaiID = useParams()
    const payload = {
        params: {
            muagiaiID
        }
    };
    const navigate= useNavigate();
    const location = useLocation();
    const [coach,] = useState(location.state.coach);
  return (
    <div className='SearchCoach_Detail popup'>
        <div className='SearchCoach-content_Detail popup_inner'>
            <div className='content_left_searchCoach_Detail'>
                <p className='titleContent_searchCoach_item_Detail'>Họ tên:</p>
                <p className='titleContent_searchCoach_item_Detail'>Ngày sinh:</p>
                <p className='titleContent_searchCoach_item_Detail'>Ngày tham gia:</p>
                <p className='titleContent_searchCoach_item_Detail'>Quốc tịch:</p>
                <p className='titleContent_searchCoach_item_Detail'>Loại:</p>
            </div>
            <div className='content_middle_searchCoach_Detail'>
                <p className='Coach_information_Detail'>{coach.HOTEN}</p>
                <p className='Coach_information_Detail'>{coach.NGAYSINH}</p>
                <p className='Coach_information_Detail'>{coach.NGAYTHAMGIA}</p>
                <p className='Coach_information_Detail'>{coach.QUOCTICH}</p>
                <p className='Coach_information_Detail'>{coach.LOAI}</p> 
            </div>
            <div className='content_right_searchCoach_Detail'>
                <img className='searchCoach--image_Detail' src={'http://localhost:8000/'+coach.AVATAR} alt='a'/>
            </div>
        </div>
        <div className='Detail_exit'>
            <button className='searchCoach_button_exit_Detail' onClick={() =>{navigate(`/organizer/home/${payload.params.muagiaiID.muagiaiID}/search`)}}>Thoát</button>
        </div>
        
    </div>    
  )
}
