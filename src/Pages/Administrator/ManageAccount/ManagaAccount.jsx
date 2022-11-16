import React from 'react'
import Header from '../Header_Administrator/Header'
import './ManagaAccount.css'
import icon from '../images/manageAccount.png'

const accNum = {
    currentAcc: 4
}

const listAcc = [
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
                                    listAcc.map(listAcc => {
                                        return (
                                            <tr key={listAcc.id}>
                                                <td>{i++}</td>
                                                <td>{listAcc.acc}</td>
                                                <td className='hidetext'>{listAcc.pass}</td>
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