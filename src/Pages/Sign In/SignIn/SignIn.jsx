import React from 'react'
import "./SignIn.css"
import Header from '../Header/Header'
import { useNavigate } from 'react-router-dom'
import axios from "axios";



const SignIn = () => {

    let data = []
    const navigate = useNavigate()


    const fetchApi = async (key) => {
        try {
            const res = await axios.get('http://localhost:8000/v1/auth/search/' + key);
            data = res.data[0];
        }
        catch (error) {
            console.log(error.message)
        }
        if (data === undefined) {
            alert('Tài khoản hoặc mật khẩu không chính xác')
            return
        }
        if (document.getElementById('account').value === data.TENTAIKHOAN &&
            document.getElementById('password').value === data.MATKHAU &&
            data.PHANQUYEN === 'admin') {
            navigate('/admin')
            console.log('error.messag2')
        }
        else if (document.getElementById('account').value === data.TENTAIKHOAN &&
            document.getElementById('password').value === data.MATKHAU &&
            data.PHANQUYEN === 'organizer') {
            navigate('/organizer')

        }
        else if (document.getElementById('account').value === data.TENTAIKHOAN &&
            document.getElementById('password').value === data.MATKHAU &&
            data.PHANQUYEN === 'manager') {
            navigate('/manager')

        }
        else {
            alert('Tài khoản hoặc mật khẩu không chính xác')
        }
    }

    function TAIKHOAN() {

        let key = document.getElementById('account').value
        fetchApi(key)

    }



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

                        </form>
                        <button className='signin_btn' onClick={TAIKHOAN}><h3>Đăng nhập</h3></button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SignIn
