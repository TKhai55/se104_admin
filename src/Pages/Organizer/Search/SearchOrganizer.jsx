import React from 'react'
import './SearchOrganizer.css'
import HeaderSearch from './Header_Search/HeaderSearch'
import Header from '../Header_Organizer/Header'
import SuperSearch from '../../../Common/SuperSearch/index'


const SearchOrganizer = () => {
  return (
    <div className='Organizer_body'>
      <Header />
      <SuperSearch />
    </div>
  )
}
export default SearchOrganizer