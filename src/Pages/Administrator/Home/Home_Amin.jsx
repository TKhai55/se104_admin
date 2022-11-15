import React from 'react'
import './Home_Amin.css'
import Header from '../Header_Administrator/Header'
import createAccount from '../images/createAccount.png'
import manageAccount from '../images/manageAccount.png'
import exit from '../images/exit.png'
import { Link } from 'react-router-dom'





export const Home_Admin = () => {
    return (
        <div className='Home_Admin'>
            <Header />
            <section className='Home_Admin_wrapper'>
                <div className='menuWrapper'>
                    <div className="row1">
                        <div className="button createAccount">
                            <Link to='/admin/createAccount'>
                                <img src={createAccount} alt="createAccount" />
                                <p>TẠO TÀI KHOẢN</p>
                            </Link>
                        </div>
                        <div className="button manageAccount">
                            <Link to='/admin/manageAccount'>
                                <img src={manageAccount} alt="manageAccount" />
                                <p>QUẢN LÝ TÀI KHOẢN</p>
                            </Link>

                        </div>
                        <div className="button exit">
                            <Link to='/'>
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

export default Home_Admin