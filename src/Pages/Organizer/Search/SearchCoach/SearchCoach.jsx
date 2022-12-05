import React from 'react'
import './Organizer_SearchCoach.css'
import cp from '../../../Administrator/images/image 10.png'
import { useState } from 'react'
import DetailCoach from '../Detail/DetailCoach/DetailCoach'

const table = [
    {
        id: 0,
        avt: cp,
        name: 'Kiatisuk',
        club: 'Hoàng Anh Gia Lai',
        country: 'Thái Lan'
    },
    {
        id: 0,
        avt: cp,
        name: 'Kiatisuk',
        club: 'Hoàng Anh Gia Lai',
        country: 'Thái Lan'
    },
]
export default function SearchCoach() {
    const [buttonPopup, setButtonPopup]= useState(false);
  return (
    <div className='Organizer_SearchCoach'>
        <div className='Organizer_header_listCoach'>
            <p id='Organizer_content--hlv'>Huấn luyện viên</p>
            <p id='Organizer_content--caulacbo'>Câu lạc bộ</p>
            <p id='Organizer_content--quoctich'>Quốc tich</p>
        </div>
        {
            table.map(table => {
                return (
                    <div className='a' onClick={() => setButtonPopup(true)}>
                        <div className='Organizer_list-Coach' key={table.id}>
                            <img src={table.avt} alt='a' width={118.15} height={80}/>
                            <p className='Organizer_Coach--name'>{table.name}</p>
                            <p className="Organizer_Coach--club">{table.club}</p>
                            <p className="Organizer_Coach--country">{table.country}</p>
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
