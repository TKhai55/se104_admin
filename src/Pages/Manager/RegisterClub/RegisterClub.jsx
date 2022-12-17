import React from 'react'
import './RegisterClub.css'
import Header from '../Header_Manager/Header'
import createClub from '../images/createClub.png'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import axios, { Axios } from 'axios'
import { useState } from 'react'
import Loading from '../Loading/Loading'



const RegisterClub = () => {

    const muagiaiID = useParams()
    let [caulacbos, setCauLacBo] = useState([])
    const [loading, setLoading] = useState(false)
    const [thamSoCtToiThieu, setThamSoCtToiThieu] = useState()
    const navigate = useNavigate()

    const payload = {
        params: {
            muagiaiID
        }
    };
    useEffect(() => {
        getSLCR(payload.params.muagiaiID.muagiaiID)
        axios.get('http://localhost:8000/v1/thamso/getlist').then(res => {
            res.data.map((value) => {
                if (value._id === '63956b5060bc683901eabb69')
                    setThamSoCtToiThieu(value.GIATRITHAMSO)
            })
        })
    }, []);

    console.log(thamSoCtToiThieu)



    const getSLCR = async (payload) => {

        try {
            const res = await axios.get('http://localhost:8000/v1/caulacbo/searchbyMG/' + payload)
            setCauLacBo(res.data)
            setLoading(true)
        }
        catch (error) {
            console.log(error.message)
        }
    }
    const CheckSL_CAUTHU = () => {
        let count = 0;
        caulacbos.map((caulacbo) => {
            if (caulacbo.SL_CAUTHU < thamSoCtToiThieu)
                ++count;
        })
        if (count !== 0)
            alert('SỐ LƯỢNG CẦU THỦ MỖI ĐỘI PHẢI LỚN HƠN HOẶC BẰNG ' + thamSoCtToiThieu)
        else {
            caulacbos.map((caulacbo) => {
                axios.post('http://localhost:8000/v1/bangxephang/add', {
                    MACLB: caulacbo._id,
                    MAMG: payload.params.muagiaiID.muagiaiID,
                    TENCLB: caulacbo.TENCLB
                })
            })
            navigate('/manager/home/' + payload.params.muagiaiID.muagiaiID);
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
                                        <th>SL_CT</th>
                                        <th>SL_HLV</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {loading ? caulacbos.map(caulacbo => {
                                        const img_url = 'http://localhost:8000/' + caulacbo.LOGO
                                        return (
                                            <tr className='club_infor' key={caulacbo._id}>
                                                <Link
                                                    to='/manager/home/createCLub/addPlayerAndHLV'
                                                    state={
                                                        {
                                                            TENCLB: caulacbo.TENCLB,
                                                            SANVANDONG: caulacbo.SANVANDONG,
                                                            LOGO: caulacbo.LOGO,
                                                            ID_clb: caulacbo._id,
                                                            SL_HLV: caulacbo.SL_HLV,
                                                            SL_CAUTHU: caulacbo.SL_CAUTHU,
                                                            ID_muagiai: payload.params.muagiaiID.muagiaiID
                                                        }
                                                    }
                                                >
                                                    <td className='logo'>
                                                        <img src={img_url} alt={caulacbo.TENCLB} className='logoClub' />
                                                    </td>
                                                </Link>
                                                <td className='name'>{caulacbo.TENCLB}</td>
                                                <td className="stadium">{caulacbo.SANVANDONG}</td>
                                                <td className="year">{caulacbo.NAMTHANHLAP}</td>
                                                <td className="sl_ct">{caulacbo.SL_CAUTHU}</td>
                                                <td className="sl_ct">{caulacbo.SL_HLV}</td>
                                            </tr>
                                        )
                                    }) : <Loading />
                                    }
                                </tbody>
                            </table>
                        </div>
                        <Link to={'/manager/home/' + payload.params.muagiaiID.muagiaiID + '/register_club'}><button>Thêm</button></Link>
                    </div>
                </div>
                <button className='done' onClick={() => CheckSL_CAUTHU()}>HOÀN TẤT NHẬP</button>
            </section>
        </div>
    )
}

export default RegisterClub