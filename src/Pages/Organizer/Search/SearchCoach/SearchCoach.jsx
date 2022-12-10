import React from 'react'
import './Organizer_SearchCoach.css'
import cp from '../../../Administrator/images/image 10.png'
import DetailCoach from '../Detail/DetailCoach/DetailCoach'
import axios from "axios";
import { useState, useEffect } from 'react'

export default function SearchCoach() {
    let [huanluyenviens, setHuanLuyenVien] = useState([])

    const getHLV = async () => {

        try {
            const res = await axios.get('http://localhost:8000/v1/huanluyenvien/gethuanluyenvien')
            setHuanLuyenVien(res.data)
            huanluyenviens=res.data;
            console.log(huanluyenviens)
        }
        catch (error) {
            console.log(error.message)
        }
    }
    useEffect(() => {
        getHLV()
    }, [])

    const [buttonPopup, setButtonPopup]= useState(false);
  return (
    <div className='Organizer_SearchCoach'>
        <div className='Organizer_header_listCoach'>
            <p id='Organizer_content--hlv'>Huấn luyện viên</p>
            <p id='Organizer_content--caulacbo'>Câu lạc bộ</p>
            <p id='Organizer_content--quoctich'>Quốc tich</p>
        </div>
        {
            huanluyenviens.map(huanluyenviens => {
                return (
                    <div className='a' onClick={() => setButtonPopup(true)}>
                        <div className='Organizer_list-Coach' key={huanluyenviens.id}>
                            <img src={"http://localhost:8000/"+huanluyenviens.AVATAR} alt={huanluyenviens.HOTEN} width={118.15} height={80}/>
                            <p className='Organizer_Coach--name'>{huanluyenviens.HOTEN}</p>
                            <p className="Organizer_Coach--club">{huanluyenviens.MACLB}</p>
                            <p className="Organizer_Coach--country">{huanluyenviens.QUOCTICH}</p>
                        </div>
                        <hr size="1" color="#fff"/>
                    </div>
                )
            })
        }
        <DetailCoach trigger={buttonPopup} setTrigger={setButtonPopup}/>
    </div>    
  )
}
