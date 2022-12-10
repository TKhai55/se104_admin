import React from 'react'
import Header from '../Header_Administrator/Header'
import './createAccount.css'
import icon from '../images/createAccount.png'
import axios from 'axios'






const createAccount = () => {

    async function submit() {

        if (document.getElementById("TENTAIKHOAN").value === '') {
            alert("Vui lòng điền tên tài khoản")
            return
        }
        if (document.getElementById("MATKHAU").value === '') {
            alert("Vui lòng điền mật khẩu")
            return
        }
        else
            try {
                const res = await axios.post('http://localhost:8000/v1/auth/dangky', {
                    TENTAIKHOAN: document.getElementById("TENTAIKHOAN").value,
                    MATKHAU: document.getElementById("MATKHAU").value,
                    PHANQUYEN: document.getElementById("PHANQUYEN").value
                })
                console.log(res.data)
                alert("Tạo tài khoản thành công")
                window.location.reload();
                return false;
            }
            catch (error) {
                alert(error.message)
                console.log(error.message)
            }
    }


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
                        <form id='form'>
                            <div className="form_content">
                                <label htmlFor="TENTAIKHOAN">Tên tài khoản:</label>
                                <input type="text" name="TENTAIKHOAN" id="TENTAIKHOAN" placeholder="Tên tài khoản" />
                            </div>
                            <div className="form_content">
                                <label htmlFor="MATKHAU">Mật khẩu:</label>
                                <input type="password" name="MATKHAU" id="MATKHAU" placeholder="Mật khẩu" />
                            </div>
                            <div className="form_combobox">
                                <label htmlFor="PHANQUYEN">Loại:</label>
                                <select name="PHANQUYEN" id="PHANQUYEN">
                                    <option value="manager">Ban quản lý</option>
                                    <option value="organizer">Ban tổ chức</option>
                                    <option value="admin">Ban quản trị</option>
                                </select>
                            </div>
                        </form>
                        <button className='createAccount' onClick={submit}>Tạo tài khoản</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default createAccount