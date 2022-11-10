import React from 'react'
import Header from '../Header_Administrator/Header'
import './createAccount.css'
import icon from '../images/createAccount.png'

const createAccount = () => {
    return (
        <div>
            <Header />
            <section className='createAccount_wrapper'>
                <div className="content_wrapper">
                    <div className="title">
                        <p>TẠO TÀI KHOẢN</p>
                        <img src={icon} alt="icon" className="icon_title" />
                    </div>
                    <div className="content">
                        <form>
                            <div className="form_content">
                                <label htmlFor="account">Tên tài khoản:</label>
                                <input type="text" name="account" id="account" placeholder="Tên tài khoản" />
                            </div>
                            <div className="form_content">
                                <label htmlFor="password">Mật khẩu:</label>
                                <input type="password" name="password" id="password" placeholder="Mật khẩu" />
                            </div>
                            <div className="form_combobox">
                                <label htmlFor="combobox">Loại:</label>
                                <select name="combobox" id="combobox">
                                    <option value="Manager">Ban quản lý</option>
                                    <option value="Organizier">Ban tổ chức</option>
                                </select>
                            </div>
                        </form>
                        <button className='createAccount'>Tạo tài khoản</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default createAccount