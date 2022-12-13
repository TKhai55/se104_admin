import React from 'react'
import './DetailCoach.css'
import { useState, useEffect } from 'react'
import Axios from "axios";

export default function DetailCoach(props) {
    let [huanluyenviens, setHuanLuyenVien] = useState()

    const getHLV = async () => {

        try {
            const res = await Axios.get('http://localhost:8000/v1/huanluyenvien/getacoach/'+'6397e0ef5cd5df5b102ea909')
            setHuanLuyenVien(res.data)
            huanluyenviens=res.data;
            console.log("huanluyenviens",huanluyenviens)
        }
        catch (error) {
            console.log(error.message)
        }
    }
    useEffect(() => {
        getHLV()
    }, [])
  return (props.trigger) ? (
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
                <p className='Coach_information_Detail'>{huanluyenviens.HOTEN}</p>
                <p className='Coach_information_Detail'>{huanluyenviens.NGAYSINH}</p>
                <p className='Coach_information_Detail'>{huanluyenviens.NGAYTHAMGIA}</p>
                <p className='Coach_information_Detail'>{huanluyenviens.QUOCTICH}</p>
                <p className='Coach_information_Detail'>{huanluyenviens.LOAI}</p> 
            </div>
            <div className='content_right_searchCoach_Detail'>
                <img className='searchCoach--image_Detail' src={'http://localhost:8000/'+huanluyenviens.AVATAR} alt='a'/>
            </div>
        </div>
        <div className='Detail_exit'>
            <button className='searchCoach_button_exit_Detail' onClick={() => props.setTrigger(false)}>Thoát</button>
            {props.children}
        </div>
        
    </div>    
  ): "";
}
