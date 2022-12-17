import React from 'react'
import './SearchManager.css'
import HeaderSearch from './Header_Search/HeaderSearch'
import Header from '../Header_Manager/Header'

export default function SearchManager() {
  return (
    <div className='Manager_body'>
      <Header/>
      <HeaderSearch/>
    </div>
  )
}