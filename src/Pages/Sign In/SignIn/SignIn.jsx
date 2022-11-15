import React from 'react'
import "./SignIn.css"
import Header from '../Header/Header'
import { Link } from 'react-router-dom'

const SignIn = () => {
    return (
        <div className='Sign_In_Wrapper'>
            <Header />
            <section className='SignIn'>
                <div className="Signbox">
                    <div className="title">
                        <h3>Đăng nhập</h3>
                    </div>
                    <div className="content">
                        <form>
                            <div className="form_content">
                                <label htmlFor="account">Tài khoản</label>
                                <input type="text" name="account" id="account" placeholder="Tên đăng nhập" />
                            </div>
                            <div className="form_content">
                                <label htmlFor="password">Mật khẩu</label>
                                <input type="password" name="password" id="password" placeholder="Mật khẩu" />
                            </div>
                            <button className='signin_btn'><h3>Đăng nhập</h3></button>
                        </form>

                    </div>
                </div>
                <div className="nav">
                    <ul>
                        <li><Link to='/manager'>Manager</Link></li>
                        <li><Link to='/organizer'>Organizer</Link></li>
                        <li><Link to='/admin'>Admin</Link></li>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default SignIn