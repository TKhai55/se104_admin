import React from 'react'
import './Home.Manager.Tier2.css'
import Header from '../Header_Manager/Header'
import createClub from '../images/createClub.png'
import createMatch from '../images/createMatch.png'
import createResult from '../images/createReasult.png'
import createReport from '../images/createReport.png'
import search from '../images/search.png'
import exit from '../images/exit.png'
import { Link } from 'react-router-dom'



const clubNumber = {
    currentClub: 12,
    maxClub: 13
}


export const Home_Manager_Tier2 = () => {
    return (
        <div className='Home_tier2'>
            <Header />
            <section className='Home_wrapper'>
                <div className="clubNum">
                    <p>CLB: {clubNumber.currentClub}/{clubNumber.maxClub}</p>
                </div>
                <div className='menuWrapper'>
                    <div className="row1">
                        <div className="button createClub">
                            <Link to='/manager/home/createCLub'>
                                <img src={createClub} alt="createCLub" />
                                <p>ĐĂNG KÍ ĐỘI BÓNG</p>
                            </Link>
                        </div>
                        <div className="button createMatch">
                            <Link to='/manager/home/createMatch'>
                                <img src={createMatch} alt="createMatch" />
                                <p>TẠO TRẬN ĐẤU</p>
                            </Link>

                        </div>
                        <div className="button search">
                            <Link to='/manager/home/search'>
                                <img src={search} alt="search" />
                                <p>TRA CỨU</p>
                            </Link>

                        </div>
                    </div>
                    <div className="row2">
                        <div className="button createResult">
                            <Link to='/manager/home/createResult'>
                                <img src={createResult} alt="createResult" />
                                <p>GHI NHẬN KẾT QUẢ</p>
                            </Link>

                        </div>
                        <div className="button createReport">
                            <Link to='/manager/home/createReport'>

                                <img src={createReport} alt="createReport" />
                                <p>LẬP BÁO CÁO</p>
                            </Link>


                        </div>
                        <div className="button exit">
                            <Link to='/manager'>

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

export default Home_Manager_Tier2