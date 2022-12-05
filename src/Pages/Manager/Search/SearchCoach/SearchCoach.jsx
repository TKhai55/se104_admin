import React from 'react'
import './Manager_SearchCoach.css'
import cp from '../../../Administrator/images/image 10.png'
import ChangeCoach from '../../Change_Information/ChangeCoach/ChangeCoach'
import { useState } from 'react'

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
    <div className='Manager_SearchCoach'>
        <div className='Manager_header_listCoach'>
            <p id='Manager_content--hlv'>Huấn luyện viên</p>
            <p id='Manager_content--caulacbo'>Câu lạc bộ</p>
            <p id='Manager_content--quoctich'>Quốc tich</p>
        </div>
        {
            table.map(table => {
                return (
                    <div className='a' onClick={() => setButtonPopup(true)}>
                        <div className='Manager_list-Coach' key={table.id}>
                            <img src={table.avt} alt='a' width={118.15} height={80}/>
                            <p className='Manager_Coach--name'>{table.name}</p>
                            <p className="Manager_Coach--club">{table.club}</p>
                            <p className="Manager_Coach--country">{table.country}</p>
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
