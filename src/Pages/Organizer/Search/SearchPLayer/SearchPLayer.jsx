import React from 'react'
import './Organizer_SearchPlayer.css'
import DetailPLayer from '../Detail/DetailPlayer/DetailPlayer'
import axios from "axios";
import { useState, useEffect } from 'react'

export default function SearchPLayer() {
    let [cauthus, setCauThu] = useState([])

    const getCT = async () => {

        try {
            const res = await axios.get('http://localhost:8000/v1/cauthu/getcauthu')
            setCauThu(res.data)
            cauthus=res.data;
            console.log(cauthus)
        }
        catch (error) {
            console.log(error.message)
        }
    }
    useEffect(() => {
        getCT()
    }, [])
    const [buttonPopup, setButtonPopup]= useState(false);
  return (
    <div className='Organizer_SearchPlayer'>
        <div className='Organizer_header_listPlayer'>
            <p id='Organizer_content--cauthu'>Cầu thủ</p>
            <p id='Organizer_content--vitri'>Vị trí</p>
            <p id='Organizer_content--caulacbo'>Câu lạc bộ</p>
        </div>
        {
            cauthus.map(cauthus => {
                return (
                    <div className='a' onClick={() => setButtonPopup(true)}>
                        <div className='Organizer_list-Player' key={cauthus.id}>
                            <img src={"http://localhost:8000/"+cauthus.AVATAR} alt={cauthus.HOTEN} width={118.15} height={100}/>
                            <p className='Organizer_Player--name'>{cauthus.HOTEN}</p>
                            <p className="Organizer_Player--position">{cauthus.VITRI}</p>
                            <p className="Organizer_Player--club">{cauthus.MACLB}</p>
                        </div>
                        <hr size="1" color="#fff"/>
                    </div>
                )
            })
        }
        <DetailPLayer trigger={buttonPopup} setTrigger={setButtonPopup}/>
    </div>    
  )
}
