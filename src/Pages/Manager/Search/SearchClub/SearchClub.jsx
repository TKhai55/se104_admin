import React from 'react'
import './Manager_SearchClub.css'
import cp from '../../../Administrator/images/image 10.png'
import ChangeClub from '../../Change_Information/ChangeClub/ChangeClub'
import axios from "axios";
import { useState, useEffect } from 'react'

export default function SearchClub() {
    let [caulacbos, setCauLacBo] = useState([])

    const getHLV = async () => {

        try {
            const res = await axios.get('http://localhost:8000/v1/caulacbo/getcaulacbo')
            setCauLacBo(res.data)
            caulacbos=res.data;
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
    <div className='Manager_SearchClub'>
        <div className='Manager_header_listClub'>
            <p id='Manager_content--caulacbo'>Câu lạc bộ</p>
            <p id='Manager_content--namthanhlap'>Năm thành lập</p>
            <p id='Manager_content--san'>Sân vận đông</p>
        </div>
        {
            caulacbos.map(caulacbos => {
                return (
                    <div className='a' onClick={() => setButtonPopup(true)}>
                        <div className='Organizer_list-Club' key={caulacbos.id}>
                            <img src={"http://localhost:8000/"+caulacbos.LOGO} alt={caulacbos.TENCLB} width={118.15} height={100}/>
                            <p className='Organizer_Club--club'>{caulacbos.TENCLB}</p>
                            <p className="Organizer_Club--year">{caulacbos.NAMTHANHLAP}</p>
                            <p className="Organizer_Club--stadium">{caulacbos.SANVANDONG}</p>
                        </div>
                        <hr size="1" color="#fff"/>
                    </div>
                )
            })
        }
        <ChangeClub trigger={buttonPopup} setTrigger={setButtonPopup}/>
    </div>    
  )
}
