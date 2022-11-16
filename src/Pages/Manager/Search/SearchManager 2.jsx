import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './SearchManager.css'
import HeaderSearch from './Header_Search/HeaderSearch'
import SearchPLayer from './SearchPLayer/SearchPLayer'
import SearchCoach from './SearchCoach/SearchCoach'
import SearchClub from './SearchClub/SearchClub'
import Header from '../Header_Manager/Header'

export default function SearchManager() {
  return (
    <div className='Manager_body'>
      <Header/>
      <HeaderSearch/>
      <Routes>
        <Route path='/SearchManager/player' element={<SearchPLayer />} />    
        <Route path='/SearchManager/coach' element={<SearchCoach />} />    
        <Route path='/SearchManager/club' element={<SearchClub />} />    
      </Routes>
    </div>
  )
}
