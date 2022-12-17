import React from 'react'
import './DetailClub.css'
import { useState, } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';

export default function DetailClub() {
    const muagiaiID = useParams()
    const payload = {
        params: {
            muagiaiID
        }
    };
    const navigate= useNavigate();
    const location = useLocation();
    const [club,] = useState(location.state.club);

    return (
    <div className='SearchClub_Detail popup'>
        <div className='SearchClub-content_Detail popup_inner'>
            <div className='content_left_searchClub_Detail'>
                <p className='titleContent_searchClub_item_Detail'>Tên đội bóng:</p>
                <p className='titleContent_searchClub_item_Detail'>Năm thành lập:</p>
                <p className='titleContent_searchClub_item_Detail'>Sân vận động:</p>
            </div>
            <div className='content_middle_searchClub_Detail'>
                <p className='Club_information_Detail'>{club.TENCLB}</p>
                <p className='Club_information_Detail'>{club.NAMTHANHLAP}</p>
                <p className='Club_information_Detail'>{club.SANVANDONG}</p>
            </div>
            <div className='content_right_searchClub_Detail'>
                <img className='searchClub--image_Detail' src={'http://localhost:8000/'+club.LOGO} alt='a'/>
            </div>
        </div>
        <div className='Detail_exit'>
            <button className='searchClub_button_exit_Detail' onClick={() =>{navigate(`/organizer/home/${payload.params.muagiaiID.muagiaiID}/search`)}}>Thoát</button>
        </div>
    </div>    
  )
}
