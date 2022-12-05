import React from 'react'
import './Manager_SearchPlayer.css'
import cp from '../../../Administrator/images/image 10.png'
import ChangePlayer from '../../Change_Information/ChangePLayer/ChangePLayer'
import { useState } from 'react'

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
    <div className='Manager_SearchPlayer'>
        <div className='Manager_header_listPlayer'>
            <p id='Manager_content--cauthu'>Cầu thủ</p>
            <p id='Manager_content--vitri'>Vị trí</p>
            <p id='Manager_content--caulacbo'>Câu lạc bộ</p>
        </div>
        {
            table.map(table => {
                return (
                    <div className='a' onClick={() => setButtonPopup(true)}>
                        <div className='Manager_list-Player' key={table.id}>
                            <img src={table.avt} alt='a' width={118.15} height={80}/>
                            <p className='Manager_Player--name'>{table.name}</p>
                            <p className="Manager_Player--position">{table.position}</p>
                            <p className="Manager_Player--club">{table.club}</p>
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
