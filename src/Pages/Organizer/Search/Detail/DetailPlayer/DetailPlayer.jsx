import React from 'react'
import './DetailPlayer.css'
import { useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';

export default function DetailPLayer() {
    const muagiaiID = useParams()
    const payload = {
        params: {
            muagiaiID
        }
    };
    const navigate= useNavigate();
    const location = useLocation();
    const [player,] = useState(location.state.player);
  return (
    <div className='SearchPlayer_Detail popup'>
        <div className='SearchPlayer-content_Detail popup_inner'>
            <div className='content_left_searchPlayer_Detail'>
                <p className='titleContent_searchPlayer_item_Detail'>Họ tên:</p>
                <p className='titleContent_searchPlayer_item_Detail'>Ngày sinh:</p>
                <p className='titleContent_searchPlayer_item_Detail'>Quốc tịch:</p>
                <p className='titleContent_searchPlayer_item_Detail'>Số áo:</p>
                <p className='titleContent_searchPlayer_item_Detail'>Loại:</p>
            </div>
            <div className='content_middle_searchPlayer_Detail'>
                <p className='Player_information_Detail'>{player.HOTEN}</p>
                <p className='Player_information_Detail'>{player.NGAYSINH}</p>
                <p className='Player_information_Detail'>{player.QUOCTICH}</p>
                <p className='Player_information_Detail'>{player.SOAO}</p>
                <p className='Player_information_Detail'>{player.VITRI}</p>
            </div>
            <div className='content_right_searchPlayer_Detail'>
                <img className='searchPLayer--image_Detail' src={'http://localhost:8000/'+player.AVATAR} alt='a'/>
            </div>
        </div>
        <div className='Detail_exit'>
            <button className='searchPlayer_button_exit_Detail' onClick={() => {navigate(`/organizer/home/${payload.params.muagiaiID.muagiaiID}/search`)}}>Thoát</button>
        </div>
    </div>    
  )
}
