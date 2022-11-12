import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './SearchOrganizer.css'
import HeaderSearch from './Header_Search/HeaderSearch'
import SearchPLayer from './SearchPLayer/SearchPLayer'
import SearchCoach from './SearchCoach/SearchCoach'
import SearchClub from './SearchClub/SearchClub'

export default function SearchOrganizer() {
  return (
    <div className='Organizer_body'>
        <HeaderSearch/>
        <Routes>
          <Route path='/SearchOrganizer/player' element={<SearchPLayer />} />    
          <Route path='/SearchOrganizer/coach' element={<SearchCoach />} />    
          <Route path='/SearchOrganizer/club' element={<SearchClub />} />    
        </Routes>
    </div>
  )
}
