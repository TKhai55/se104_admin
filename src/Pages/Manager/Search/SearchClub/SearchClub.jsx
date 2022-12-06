import React from 'react'
import './Manager_SearchClub.css'
import cp from '../../../Administrator/images/image 10.png'
import ChangeClub from '../../Change_Information/ChangeClub/ChangeClub'
import { useState } from 'react'

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
    <div className='Manager_SearchClub'>
        <div className='Manager_header_listClub'>
            <p id='Manager_content--caulacbo'>Câu lạc bộ</p>
            <p id='Manager_content--namthanhlap'>Năm thành lập</p>
            <p id='Manager_content--san'>Sân vận đông</p>
        </div>
        {
            table.map(table => {
                return (
                    <div className='a' onClick={() => setButtonPopup(true)}>
                        <div className='Manager_list-Club' key={table.id}>
                            <img src={table.logo} alt='a' width={118.15} height={80}/>
                            <p className='Manager_Club--club'>{table.club}</p>
                            <p className="Manager_Club--year">{table.year}</p>
                            <p className="Manager_Club--stadium">{table.stadium}</p>
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
