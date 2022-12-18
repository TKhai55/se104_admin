import React, { useState } from 'react'
import './style.css'
import { FcSearch } from 'react-icons/fc'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'


const Index = () => {

    const muagiaiID = useParams()
    const [cauthu, setCauThu] = useState([])
    const [huanluyenvien, setHuanLuyenVien] = useState([])
    const [doibong, setDoiBong] = useState([])
    const [query, setQuery] = useState('')
    const [selected, setSelected] = useState('')

    const getCT = async (payload) => {

        try {
            const res = await axios.get('http://localhost:8000/v1/cauthu/searchbyMG/' + payload)
            setCauThu(res.data)
        }
        catch (error) {
            console.log(error.message)
        }
    }
    const getHLV = async (payload) => {

        try {
            const res = await axios.get('http://localhost:8000/v1/huanluyenvien/searchbyMG/' + payload)
            setHuanLuyenVien(res.data)
        }
        catch (error) {
            console.log(error.message)
        }
    }

    const getDB = async (payload) => {

        try {
            const res = await axios.get('http://localhost:8000/v1/caulacbo/searchbyMG/' + payload)
            setDoiBong(res.data)
        }
        catch (error) {
            console.log(error.message)
        }
    }


    let [caulacbos, setCauLacBo] = useState([])
    const getCLB = async () => {
        try {
            const res = await axios.get('http://localhost:8000/v1/caulacbo/getcaulacbo')
            setCauLacBo(res.data)
            caulacbos = res.data;
        }
        catch (error) {
            console.log(error.message)
        }
    }
    useEffect(() => {
        getCT(muagiaiID.muagiaiID)
        getHLV(muagiaiID.muagiaiID)
        getDB(muagiaiID.muagiaiID)
        getCLB()
    }, [])

    let [nameclub] = useState()
    const find = (e) => {
        for (let i = 0; i < caulacbos.length; i++) {
            if (e === caulacbos[i]._id) nameclub = caulacbos[i].TENCLB
        }
    }

    const renderCT = () => {
        return (
            <table>
                <thead>
                    <tr className='tilte'>
                        <th>Cầu thủ</th>
                        <th>Câu lạc bộ</th>
                        <th>Loại cầu thủ</th>
                        <th>Số bàn thắng</th>
                        <th>Số thẻ vàng</th>
                        <th>Số thẻ đỏ</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cauthu.filter((cauthu) => query !== '' ?
                            cauthu.HOTEN.toLowerCase().includes(query)
                            || cauthu.VITRI.toLowerCase().includes(query)
                            : cauthu)
                            .map(cauthu => {
                                const img_url = 'http://localhost:8000/' + cauthu.AVATAR
                                return (
                                    <tr className='cauthu_infor' key={cauthu._id}>
                                        {find(cauthu.MACLB)}
                                        <td className='name'>
                                            <img src={img_url} alt={cauthu.HOTEN} className='avatarCT' />

                                            {cauthu.HOTEN}
                                        </td>
                                        <td className="club">{nameclub}</td>
                                        <td className="position">{cauthu.VITRI}</td>
                                        <td className="sbt">{cauthu.SOBANTHANG}</td>
                                        <td className="stv">{cauthu.SOTHEVANG}</td>
                                        <td className="std">{cauthu.SOTHEDO}</td>
                                    </tr>
                                )
                            })
                    }
                </tbody>
            </table>
        )
    }

    const renderHLV = () => {
        return (
            <table>
                <thead>
                    <tr className='tilte'>
                        <th style={{ textAlign: "left", paddingLeft: '3vw' }}>Huấn luyện viên</th>
                        <th>Câu lạc bộ</th>
                        <th>Loại</th>
                        <th>Quốc tịch</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        huanluyenvien.filter((huanluyenvien) => query !== '' ?
                            huanluyenvien.HOTEN.toLowerCase().includes(query)
                            || huanluyenvien.LOAI.toLowerCase().includes(query)
                            : huanluyenvien)
                            .map(huanluyenvien => {
                                const img_url = 'http://localhost:8000/' + huanluyenvien.AVATAR
                                return (
                                    <tr className='cauthu_infor' key={huanluyenvien._id}>
                                        {find(huanluyenvien.MACLB)}
                                        <td className='name'>
                                            <img src={img_url} alt={huanluyenvien.HOTEN} className='avatarCT' />

                                            {huanluyenvien.HOTEN}
                                        </td>
                                        <td className="club">{nameclub}</td>
                                        <td className="position">{huanluyenvien.LOAI}</td>
                                        <td className="sbt">{huanluyenvien.QUOCTICH}</td>
                                    </tr>
                                )
                            })
                    }
                </tbody>
            </table>
        )
    }

    const renderCLB = () => {
        return (
            <table>
                <thead>
                    <tr className='tilte'>
                        <th style={{ textAlign: "left", paddingLeft: '4vw' }}>Câu lạc bộ</th>
                        <th>Năm thành lập</th>
                        <th>Sân vận động</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        doibong.filter((doibong) => query !== '' ?
                            doibong.TENCLB.toLowerCase().includes(query)
                            || doibong.SANVANDONG.toLowerCase().includes(query)
                            : doibong)
                            .map(doibong => {
                                const img_url = 'http://localhost:8000/' + doibong.LOGO
                                return (
                                    <tr className='cauthu_infor' key={doibong._id}>
                                        <td className='clb'>
                                            <img src={img_url} alt={doibong.TENCLB} className='avatarCT' />

                                            {doibong.TENCLB}
                                        </td>
                                        <td className="club">{doibong.NAMTHANHLAP}</td>
                                        <td className="position">{doibong.SANVANDONG}</td>
                                    </tr>
                                )
                            })
                    }
                </tbody>
            </table>
        )
    }

    return (
        <div className='SPsearch_container'>
            <div className='SPsearch_title'>
                <FcSearch className='SPsearch_title_icon' size={60} />
                <h2 className='SPsearch_title_text'>TRA CỨU</h2>
            </div>
            <div className="SPsearch_bar">
                <label htmlFor="search_bar" className='label'>Thông tin cần tìm:</label>
                <input type="text" name='search_bar'
                    id='search_bar'
                    className='search_bar' placeholder='Nhập thông tin'
                    onChange={(e) => {
                        setQuery(e.target.value.toLocaleLowerCase())
                    }} />
                <label htmlFor="combobox" className='combobox_label'>Đối tượng:</label>
                <select name="combobox"
                    className='combobox'
                    id='combobox'
                    onChange={(e) => {
                        setSelected(e.target.value)
                        document.getElementById('search_bar').value = ''
                        setQuery('')
                    }}>
                    <option >Cầu thủ</option>
                    <option >Huấn luyện viên</option>
                    <option >Câu lạc bộ</option>
                </select>
            </div>
            <div className="SPsearch_table">
                {
                    selected === '' || selected === 'Cầu thủ' ?
                        renderCT() : selected === 'Huấn luyện viên' ?
                            renderHLV() : renderCLB()
                }
            </div>
        </div>
    )
}

export default Index