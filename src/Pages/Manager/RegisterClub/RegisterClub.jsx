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
    let [BXHlength, setBXHlength] = useState(0)
    const navigate = useNavigate()

    let [totalnum, setTotalNum] = useState([])
    let [currentnum, setCurrentNum] = useState([])

    const payload = {
        params: {
            muagiaiID
        }
    };

    async function getBXH() {
        const res = await axios.get(`http://localhost:8000/v1/bangxephang/read/${muagiaiID.muagiaiID}`)
        setBXHlength(res.data.length)

        
    }
    useEffect(() => {
        getSLCR(payload.params.muagiaiID.muagiaiID)

        getSLTT(payload.params.muagiaiID.muagiaiID)
        getSLCR1(payload.params.muagiaiID.muagiaiID)
        axios.get('http://localhost:8000/v1/thamso/getlist/' + payload.params.muagiaiID.muagiaiID).then(res => {
            res.data.map((value) => {
                if (value.TENTHAMSO === 'So cau thu toi thieu')
                    setThamSoCtToiThieu(value.GIATRITHAMSO)
            })
        })
        getBXH()
    }, []);


    const getSLTT = async (payload) => {

        try {
            const res = await axios.get('http://localhost:8000/v1/muagiai/getmuagiai/' + payload)
            setTotalNum(res.data.SL_CLB)
        }
        catch (error) {
            console.log(error.message)
        }
    }
    const getSLCR1 = async (payload) => {

        try {
            const res = await axios.get('http://localhost:8000/v1/caulacbo/searchbyMG/' + payload)
            setCurrentNum(res.data.length)
        }
        catch (error) {
            console.log(error.message)
        }
    }

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
        if (BXHlength > 0) {
            document.getElementById("btn-done").disabled = true
            document.getElementById("btn-done").style.cursor = "not-allowed"
        } else {
            if (caulacbos.length < totalnum) {
                alert('Chưa đủ số lượng câu lạc bộ')
                return
            }
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
                navigate('/manager/home/' + muagiaiID.muagiaiID);
            }
        }
    }
    const toImport = (caulacbo) => {
        console.log(caulacbo)
        navigate(`/manager/home/${muagiaiID.muagiaiID}/createCLub/addPlayerAndHLV`,
            {
                state: {
                    TENCLB: caulacbo.TENCLB,
                    SANVANDONG: caulacbo.SANVANDONG,
                    LOGO: caulacbo.LOGO,
                    ID_clb: caulacbo._id,
                    ID_muagiai: payload.params.muagiaiID.muagiaiID
                }
            })

    }
    const AddClub = () => {
        if (currentnum === totalnum) {
            alert('Đã đủ số lượng câu lạc bộ')
            return
        }
        navigate(`/manager/home/${muagiaiID.muagiaiID}/register_club`)
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
                                            <tr className='club_infor' key={caulacbo._id} onClick={() => toImport(caulacbo)}>
                                                {/* <Link
                                                    to={'/manager/home/' + payload.params.muagiaiID.muagiaiID + '/createCLub/addPlayerAndHLV'}
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
                                                > */}
                                                <td className='logo'>
                                                    <img src={img_url} alt={caulacbo.TENCLB} className='logoClub' />
                                                </td>
                                                {/* </Link> */}
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
                        <button onClick={AddClub}>Thêm</button>
                    </div>
                </div>
                <button className='done' id='btn-done' onClick={() => CheckSL_CAUTHU()}>HOÀN TẤT NHẬP</button>
            </section>
        </div>
    )
}

export default RegisterClub