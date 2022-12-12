import React from 'react'
import './RegisterClub.css'
import Header from '../Header_Manager/Header'
import createClub from '../images/createClub.png'
import { Link, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'



const RegisterClub = () => {

    const muagiaiID = useParams()
    let [caulacbos, setCauLacBo] = useState([])

    const payload = {
        params: {
            muagiaiID
        }
    };
    useEffect(() => {
        getSLCR(payload.params.muagiaiID.muagiaiID)
    }, []);

    const getSLCR = async (payload) => {

        try {
            const res = await axios.get('http://localhost:8000/v1/caulacbo/searchbyMG/' + payload)
            setCauLacBo(res.data)
        }
        catch (error) {
            console.log(error.message)
        }
    }

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
                                        caulacbos.map(caulacbo => {
                                            return (
                                                <tr className='club_infor' key={caulacbo._id}>
                                                    <td className='logo'>
                                                        <img src={caulacbo.LOGO} alt={caulacbo.TENCLB} className='logoClub' />
                                                    </td>
                                                    <td className='name'>{caulacbo.TENCLB}</td>
                                                    <td className="stadium">{caulacbo.SANVANDONG}</td>
                                                    <td className="year">{caulacbo.NAMTHANHLAP}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                        <Link to={'/manager/home/'+payload.params.muagiaiID.muagiaiID+'/register_club'}><button>Thêm</button></Link>
                    </div>
                </div>
                <Link to={'/manager/home/' + payload.params.muagiaiID.muagiaiID}><button className='done'>HOÀN TẤT NHẬP</button></Link>
            </section>
        </div>
    )
}

export default RegisterClub