import React from 'react'
import './Organizer_SearchClub.css'
import cp from '../../../Administrator/images/image 10.png'
import { useState } from 'react'
import DetailClub from '../Detail/DetailClub/SearchClub'

const table = [
    {
        id: 0,
        logo: cp,
        club: 'Kiatisuk',
        year: 1975,
        stadium: 'Hàng Đẫy'
    },
    {
        id: 0,
        logo: cp,
        club: 'Kiatisuk',
        year: 1975,
        stadium: 'Hàng Đẫy'
    },
]
export default function SearchClub() {
    const [buttonPopup, setButtonPopup]= useState(false);
  return (
    <div className='Organizer_SearchClub'>
        <div className='Organizer_header_listClub'>
            <p id='Organizer_content--caulacbo'>Câu lạc bộ</p>
            <p id='Organizer_content--namthanhlap'>Năm thành lập</p>
            <p id='Organizer_content--san'>Sân vận đông</p>
        </div>
        {
            table.map(table => {
                return (
                    <div className='a' onClick={() => setButtonPopup(true)}>
                        <div className='Organizer_list-Club' key={table.id}>
                            <img src={table.logo} alt='a' width={118.15} height={80}/>
                            <p className='Organizer_Club--club'>{table.club}</p>
                            <p className="Organizer_Club--year">{table.year}</p>
                            <p className="Organizer_Club--stadium">{table.stadium}</p>
                        </div>
                        <hr size="1" color="#fff"/>
                    </div>
                )
            })
        }
        <DetailClub trigger={buttonPopup} setTrigger={setButtonPopup}/>
    </div>    
  )
}
