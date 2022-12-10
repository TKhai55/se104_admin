import React from 'react'
import './Manager_SearchPlayer.css'
import ChangePlayer from '../../Change_Information/ChangePLayer/ChangePLayer'
import axios from "axios";
import { useState, useEffect } from 'react'

export default function SearchPLayer() {
    let [cauthus, setCauThu] = useState([])

    const getCT = async () => {

        try {
            const res = await axios.get('http://localhost:8000/v1/cauthu/getcauthu')
            setCauThu(res.data)
            cauthus=res.data;
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
    <div className='Manager_SearchPlayer'>
        <div className='Manager_header_listPlayer'>
            <p id='Manager_content--cauthu'>Cầu thủ</p>
            <p id='Manager_content--vitri'>Vị trí</p>
            <p id='Manager_content--caulacbo'>Câu lạc bộ</p>
        </div>
        {
            cauthus.map(cauthus => {
                return (
                    <div className='a' onClick={() => setButtonPopup(true)}>
                        <div className='Manager_list-Player' key={cauthus.id}>
                            <img src={"http://localhost:8000/"+cauthus.AVATAR} alt={cauthus.HOTEN} width={118.15} height={100}/>
                            <p className='Manager_Player--name'>{cauthus.HOTEN}</p>
                            <p className="Manager_Player--position">{cauthus.VITRI}</p>
                            <p className="Manager_Player--club">{cauthus.MACLB}</p>
                        </div>
                        <hr size="1" color="#fff"/>
                    </div>
                )
            })
        }
        <ChangePlayer trigger={buttonPopup} setTrigger={setButtonPopup}/>
    </div>    
  )
}
