import React from 'react'
import './Home_Amin.css'
import Header from '../Header_Administrator/Header'
import createAccount from '../images/createAccount.png'
import manageAccount from '../images/manageAccount.png'
import exit from '../images/exit.png'


export const Home_Admin = () => {
    return (
        <div className='Home_Admin'>
            <Header />
            <section className='Home_Admin_wrapper'>
                <div className='menuWrapper'>
                    <div className="row1">
                        <div className="button createAccount">
                            <img src={createAccount} alt="createAccount" />
                            <p>TẠO TÀI KHOẢN</p>
                        </div>
                        <div className="button manageAccount">
                            <img src={manageAccount} alt="manageAccount" />
                            <p>QUẢN LÝ TÀI KHOẢN</p>

                        </div>
                        <div className="button exit">
                            <img src={exit} alt="exit" />
                            <p>THOÁT</p>

                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Home_Admin