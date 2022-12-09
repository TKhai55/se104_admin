import React, { useEffect, useState } from 'react'
import Header from '../Header_Administrator/Header'
import './ManagaAccount.css'
import icon from '../images/manageAccount.png'
import axios from 'axios'

const accNum = {
    currentAcc: 4
}

const listAccs = [
    {
        id: 0,
        acc: 'manager1',
        pass: '12345678'
    },
    {
        id: 1,
        acc: 'organizer1',
        pass: '12345678'
    },
    {
        id: 2,
        acc: 'manager2',
        pass: '12345678'
    },
    {
        id: 3,
        acc: 'manager3',
        pass: '12345678'
    }
]


const ManagaAccount = () => {

    let i = 1;

    const [taikhoans, setTaiKhoan] = useState([])

    const getTK = async () => {

        try {
            const res = await axios.get('http://localhost:8000/v1/auth/gettaikhoan')
            setTaiKhoan(res.data)
        }
        catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        getTK()
    }, [])


    return (
        <div>
            <Header />
            <section className='ManagaAccount'>
                <div className="content_wrapper">


                    <div className="title">
                        <p>QUẢN LÝ TÀI KHOẢN</p>
                        <img src={icon} alt="icon" className="icon_title" />
                    </div>
                    <div className="content">
                        <div className="curAcc">
                            Số lượng tài khoản: {accNum.currentAcc}
                        </div>
                        <button className='delete'>Xoá</button>
                        <button className='fix'>Sửa</button>
                        <button className='pass'>Xem mật khẩu</button>

                        <table className="table_content">
                            <thead>
                                <tr>
                                    <th className='stt'>STT</th>
                                    <th className='tk'>Tài khoản</th>
                                    <th className='mk'>Mật khẩu</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    taikhoans.map(taikhoan => {
                                        return (
                                            <tr key={taikhoan._id}>
                                                <td>{i++}</td>
                                                <td>{taikhoan.TENTAIKHOAN}</td>
                                                <td className='hidetext'>{taikhoan.MATKHAU}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </section >
        </div >
    )
}

export default ManagaAccount