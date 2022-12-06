import React from 'react'
import './SearchOrganizer.css'
import HeaderSearch from './Header_Search/HeaderSearch'
import Header from '../Header_Organizer/Header'

export default function SearchOrganizer() {
  return (
    <div className='Organizer_body'>
      <Header/>
      <HeaderSearch/>
    </div>
  )
}
