import React from 'react'
import './DetailClub.css'
import { useState, useEffect } from 'react'
import Axios from "axios";

export default function DetailClub(props) {
    let [caulacbos, setCaulacbo] = useState()

    const getCLB = async () => {

        try {
            const res = await Axios.get('http://localhost:8000/v1/caulacbo/getaclub/6396fd49425c26e4c186feb1')
            setCaulacbo(res.data)
            caulacbos=res.data;
        }
        catch (error) {
            console.log(error.message)
        }
    }
    useEffect(() => {
        getCLB()
    }, [])

    return (props.trigger) ? (
    <div className='SearchClub_Detail popup'>
        <div className='SearchClub-content_Detail popup_inner'>
            <div className='content_left_searchClub_Detail'>
                <p className='titleContent_searchClub_item_Detail'>Tên đội bóng:</p>
                <p className='titleContent_searchClub_item_Detail'>Năm thành lập:</p>
                <p className='titleContent_searchClub_item_Detail'>Sân vận động:</p>
            </div>
            <div className='content_middle_searchClub_Detail'>
                <p className='Club_information_Detail'>{caulacbos.TENCLB}</p>
                <p className='Club_information_Detail'>{caulacbos.NAMTHANHLAP}</p>
                <p className='Club_information_Detail'>{caulacbos.SANVANDONG}</p>
            </div>
            <div className='content_right_searchClub_Detail'>
                <img className='searchClub--image_Detail' src={'http://localhost:8000/'+caulacbos.AVATAR} alt='a'/>
            </div>
        </div>
        <div className='Detail_exit'>
            <button className='searchClub_button_exit_Detail' onClick={() => props.setTrigger(false)}>Thoát</button>
            {props.children}
        </div>
    </div>    
  ): "";
}
