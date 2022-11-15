import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './SearchOrganizer.css'
import HeaderSearch from './Header_Search/HeaderSearch'
import SearchPLayer from './SearchPLayer/SearchPLayer'
import SearchCoach from './SearchCoach/SearchCoach'
import SearchClub from './SearchClub/SearchClub'
import Header from '../Header_Organizer/Header'

export default function SearchOrganizer() {
  return (
    <div className='Organizer_body'>
      <Header/>
      <HeaderSearch/>
    </div>
  )
}
