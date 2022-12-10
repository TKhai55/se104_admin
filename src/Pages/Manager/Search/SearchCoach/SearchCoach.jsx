import React from 'react'
import './Manager_SearchCoach.css'
import ChangeCoach from '../../Change_Information/ChangeCoach/ChangeCoach'
import axios from "axios";
import { useState, useEffect } from 'react'

export default function SearchCoach() {
    let [huanluyenviens, setHuanLuyenVien] = useState([])

    const getHLV = async () => {

        try {
            const res = await axios.get('http://localhost:8000/v1/huanluyenvien/gethuanluyenvien')
            setHuanLuyenVien(res.data)
            huanluyenviens=res.data;
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
    <div className='Manager_SearchCoach'>
        <div className='Manager_header_listCoach'>
            <p id='Manager_content--hlv'>Huấn luyện viên</p>
            <p id='Manager_content--caulacbo'>Câu lạc bộ</p>
            <p id='Manager_content--quoctich'>Quốc tich</p>
        </div>
        {
            huanluyenviens.map(huanluyenviens => {
                return (
                    <div className='a' onClick={() => setButtonPopup(true)}>
                        <div className='Manager_list-Coach' key={huanluyenviens.id}>
                            <img src={"http://localhost:8000/"+huanluyenviens.AVATAR} alt={huanluyenviens.HOTEN} width={118.15} height={100}/>
                            <p className='Manager_Coach--name'>{huanluyenviens.HOTEN}</p>
                            <p className="Manager_Coach--club">{huanluyenviens.MACLB}</p>
                            <p className="Manager_Coach--country">{huanluyenviens.QUOCTICH}</p>
                        </div>
                        <hr size="1" color="#fff"/>
                    </div>
                )
            })
        }
        <ChangeCoach trigger={buttonPopup} setTrigger={setButtonPopup}/>
    </div>    
  )
}
