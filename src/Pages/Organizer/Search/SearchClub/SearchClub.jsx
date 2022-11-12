import React from 'react'
import './Organizer_SearchClub.css'
import cp from '../../../Administrator/images/image 10.png'

export default function SearchClub() {
  return (
    <div className='Organizer_SearchClub'>
        <div className='Organizer_SearchClub-content'>
            <div className='Organizer_content_left_searchClub'>
                <p className='Organizer_titleContent_searchClub_item'>Tên đội bóng:</p>
                <p className='Organizer_titleContent_searchClub_item'>Năm thành lập:</p>
                <p className='Organizer_titleContent_searchClub_item'>Sân vận động:</p>
            </div>
            <div className='Organizer_content_middle_searchClub'>
                <p className='Organizer_information'>Hoàng Anh Gia Lai</p>
                <p className='Organizer_information'>2000</p>
                <p className='Organizer_information'>Hoàng Anh Gia Lai</p>
                
            </div>
            <div className='Organizer_content_right_searchClub'>
                <img className='Organizer_searchClub--image' src={cp} alt='a'/>
            </div>
        </div>
    </div>    
  )
}
