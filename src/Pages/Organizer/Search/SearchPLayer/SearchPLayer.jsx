import React from 'react'
import './Organizer_SearchPlayer.css'
import cp from '../../../Administrator/images/image 10.png'
import { useState } from 'react'
import DetailPLayer from '../Detail/DetailPlayer/DetailPlayer'

const table = [
    {
        id: 0,
        avt: cp,
        name: 'Nguyễn Công Phượng',
        position: 'Tiền đạo',
        club: 'HAGL'
    },
    {
        id: 1,
        avt: cp,
        name: 'Nguyễn Công Phượng',
        position: 'Hậu vệ',
        club: 'HAGL'
    },
]
export default function SearchPLayer() {
    const [buttonPopup, setButtonPopup]= useState(false);
  return (
    <div className='Organizer_SearchPlayer'>
        <div className='Organizer_header_listPlayer'>
            <p id='Organizer_content--cauthu'>Cầu thủ</p>
            <p id='Organizer_content--vitri'>Vị trí</p>
            <p id='Organizer_content--caulacbo'>Câu lạc bộ</p>
        </div>
        {
            table.map(table => {
                return (
                    <div className='a' onClick={() => setButtonPopup(true)}>
                        <div className='Organizer_list-Player' key={table.id}>
                            <img src={table.avt} alt='a' width={118.15} height={80}/>
                            <p className='Organizer_Player--name'>{table.name}</p>
                            <p className="Organizer_Player--position">{table.position}</p>
                            <p className="Organizer_Player--club">{table.club}</p>
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
