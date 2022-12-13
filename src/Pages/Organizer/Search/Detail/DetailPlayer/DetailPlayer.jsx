import React from 'react'
import './DetailPlayer.css'
import { useState, useEffect } from 'react'
import Axios from "axios";

export default function DetailPLayer(props) {
    let [cauthus, setCauThu] = useState()

    const getCT = async () => {

        try {
            const res = await Axios.get('http://localhost:8000/v1/cauthu/getaplayer/'+'6397cb755cd5df5b102ea8b9')
            setCauThu(res.data)
            cauthus=res.data;
            console.log("cauthus",cauthus)

        }
        catch (error) {
            console.log(error.message)
        }
    }
    useEffect(() => {
        getCT()
    }, [])
  return (props.trigger) ? (
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
                <p className='Player_information_Detail'>{cauthus.HOTEN}</p>
                <p className='Player_information_Detail'>{cauthus.NGAYSINH}</p>
                <p className='Player_information_Detail'>{cauthus.QUOCTICH}</p>
                <p className='Player_information_Detail'>{cauthus.SOAO}</p>
                <p className='Player_information_Detail'>{cauthus.VITRI}</p>
            </div>
            <div className='content_right_searchPlayer_Detail'>
                <img className='searchPLayer--image_Detail' src={'http://localhost:8000/'+cauthus.AVATAR} alt='a'/>
            </div>
        </div>
        <div className='Detail_exit'>
            <button className='searchPlayer_button_exit_Detail' onClick={() => props.setTrigger(false)}>Thoát</button>
            {props.children}
        </div>
    </div>    
  ): "";
}
