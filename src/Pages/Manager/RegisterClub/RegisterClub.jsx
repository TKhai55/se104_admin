import React from 'react'
import './RegisterClub.css'
import Header from '../Header_Manager/Header'
import createClub from '../images/createClub.png'
import { Link } from 'react-router-dom'


const table = [
    {
        id: 0,
        logo: 'https://upload.wikimedia.org/wikipedia/vi/thumb/5/5b/H%C3%A0_N%E1%BB%99i_FC_2020.svg/1200px-H%C3%A0_N%E1%BB%99i_FC_2020.svg.png',
        name: 'Hoàng Anh Gia Lai',
        stadium: 'Sân vận động Pleiku',
        year: 1975
    },
    {
        id: 1,
        logo: 'https://upload.wikimedia.org/wikipedia/vi/3/33/Dong_Thap_FC.png',
        name: 'Hoàng Anh Gia Lai',
        stadium: 'Sân vận động Pleiku',
        year: 1975
    },
    {
        id: 2,
        logo: 'https://upload.wikimedia.org/wikipedia/vi/thumb/c/c9/Ho%C3%A0ng_Anh_Gia_Lai_FC.svg/1200px-Ho%C3%A0ng_Anh_Gia_Lai_FC.svg.png',
        name: 'Hoàng Anh Gia Lai',
        stadium: 'Sân vận động Pleiku',
        year: 1975
    },
    {
        id: 3,
        logo: 'https://upload.wikimedia.org/wikipedia/vi/thumb/2/21/H%E1%BA%A3i_Ph%C3%B2ng_FC_2021.svg/1200px-H%E1%BA%A3i_Ph%C3%B2ng_FC_2021.svg.png',
        name: 'Hoàng Anh Gia Lai',
        stadium: 'Sân vận động Pleiku',
        year: 1975
    },
    {
        id: 4,
        logo: 'https://upload.wikimedia.org/wikipedia/vi/thumb/a/a0/Logo_CLB_Than_Qu%E1%BA%A3ng_Ninh.svg/1200px-Logo_CLB_Than_Qu%E1%BA%A3ng_Ninh.svg.png',
        name: 'Hoàng Anh Gia Lai',
        stadium: 'Sân vận động Pleiku',
        year: 1975
    },
    {
        id: 5,
        logo: 'https://upload.wikimedia.org/wikipedia/vi/thumb/a/a0/Logo_CLB_Than_Qu%E1%BA%A3ng_Ninh.svg/1200px-Logo_CLB_Than_Qu%E1%BA%A3ng_Ninh.svg.png',
        name: 'Hoàng Anh Gia Lai',
        stadium: 'Sân vận động Pleiku',
        year: 1975
    },
    {
        id: 6,
        logo: 'https://upload.wikimedia.org/wikipedia/vi/thumb/a/a0/Logo_CLB_Than_Qu%E1%BA%A3ng_Ninh.svg/1200px-Logo_CLB_Than_Qu%E1%BA%A3ng_Ninh.svg.png',
        name: 'Hoàng Anh Gia Lai',
        stadium: 'Sân vận động Pleiku',
        year: 1975
    },
    {
        id: 7,
        logo: 'https://upload.wikimedia.org/wikipedia/vi/thumb/a/a0/Logo_CLB_Than_Qu%E1%BA%A3ng_Ninh.svg/1200px-Logo_CLB_Than_Qu%E1%BA%A3ng_Ninh.svg.png',
        name: 'Hoàng Anh Gia Lai',
        stadium: 'Sân vận động Pleiku',
        year: 1975
    },
    {
        id: 8,
        logo: 'https://upload.wikimedia.org/wikipedia/vi/thumb/a/a0/Logo_CLB_Than_Qu%E1%BA%A3ng_Ninh.svg/1200px-Logo_CLB_Than_Qu%E1%BA%A3ng_Ninh.svg.png',
        name: 'Hoàng Anh Gia Lai',
        stadium: 'Sân vận động Pleiku',
        year: 1975
    },
]


const RegisterClub = () => {
    return (
        <div className='RegisterClub'>
            <Header />
            <section className='RegisterClub_wrapper'>
                <div className="form_wrapper">
                    <div className="title">
                        <div className="logo">
                            <img src={createClub} alt="createClub" />
                        </div>
                        <div className="name">
                            <p>DANH SÁCH ĐỘI BÓNG</p>
                        </div>
                    </div>
                    <div className="content_wrapper">
                        <div className='table_wrapper'>
                            <table>
                                <thead>
                                    <tr className='tilte'>
                                        <th>Logo</th>
                                        <th>Câu lạc bộ</th>
                                        <th>Sân vận động</th>
                                        <th>Năm thành lập</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        table.map(table => {
                                            return (
                                                <tr className='club_infor' key={table.id}>
                                                    <td className='logo'>
                                                        <img src={table.logo} alt={table.name} className='logoClub' />
                                                    </td>
                                                    <td className='name'>{table.name}</td>
                                                    <td className="stadium">{table.stadium}</td>
                                                    <td className="year">{table.year}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                        <Link to='/manager/home/register_club'><button>Thêm</button></Link>
                    </div>
                    <button className='done'>HOÀN TẤT NHẬP</button>
                </div>
            </section>
        </div>
    )
}

export default RegisterClub