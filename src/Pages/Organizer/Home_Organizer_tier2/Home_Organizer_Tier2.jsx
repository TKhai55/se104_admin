import React from 'react'
import './Home_Organizer_Tier2.css'
import Header from '../Header_Organizer/Header'
import changePolicy from '../images/changePolicy.png'
import search from '../images/search.png'
import finish from '../images/finish.png'
import deleteLeague from '../images/delete.png'
import exit from '../images/exit.png'
import { Link } from 'react-router-dom'

const clubNumber = {
    currentClub: 12,
    maxClub: 13
}


export const Home_Organizer_Tier2 = () => {
    return (
        <div className='Home_tier2'>
            <Header />
            <section className='Home_Organizer_wrapper'>
                <div className="clubNum">
                    <p>CLB: {clubNumber.currentClub}/{clubNumber.maxClub}</p>
                </div>
                <div className='menuWrapper'>
                    <div className="row1">
                        <div className="button changePolicy">
                            <Link to='/organizer/home/changePolicy'>
                                <img src={changePolicy} alt="changePolicy" />
                                <p>ĐỔI QUY ĐỊNH</p>
                            </Link>
                        </div>
                        <div className="button search">
                            <Link to='/organizer/home/search'>
                                <img src={search} alt="search" />
                                <p>TRA CỨU</p>
                            </Link>

                        </div>
                        <div className="button finish">
                            <img src={finish} alt="finish" />
                            <p>KẾT THÚC MÙA GIẢI</p>
                        </div>
                    </div>
                    <div className="row2">
                        <div className="button deleteLeague">
                            <img src={deleteLeague} alt="deleteLeague" />
                            <p>XOÁ MÙA GIẢI</p>


                        </div>
                        <div className="button exit">
                            <Link to='/organizer'>

                                <img src={exit} alt="exit" />
                                <p>THOÁT</p>
                            </Link>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home_Organizer_Tier2