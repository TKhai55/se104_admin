import React, { useEffect, useState } from 'react'
import './AddFixtures.css'
import Header from '../Header_Manager/Header'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'


const AddFixtures = () => {
    const muagiaiID = useParams()
    const [rounds, setRounds] = useState([])
    const [selected, setSelected] = useState(0)
    let [totalNum, setTotalNum] = useState(0)
    let [fixtures, setFixtures] = useState([])

    const getSLTT = async (payload) => {
        try {
            const res = await axios.get('http://localhost:8000/v1/muagiai/getmuagiai/' + payload)
            totalNum = res.data.SL_CLB
            setTotalNum(res.data.SL_CLB)

            if (totalNum % 2 === 0) totalNum = totalNum - 1

            for(var i = 1; i <= totalNum * 2; i++) {
                if (rounds.length < totalNum * 2) {
                    rounds.push(i)
                }
            }
        }
        catch (error) {
            console.log(error.message)
        }
    }

    const getFixtures = async () => {
        try {
            const res = await axios.get('http://localhost:8000/v1/trandau/read')
            setFixtures(res.data)
            fixtures = res.data
            console.log(fixtures)
        }
        catch (error) {
            console.log(error.message)
        }
    }
    useEffect(() => {
        getFixtures()
        getSLTT(muagiaiID.muagiaiID)
    }, [])

    return (
        <>
            <Header />
            <div className='add-fixtures-main-wrapper'>
                <h1 className="add-fixtures-header">LỊCH THI ĐẤU</h1>
                <div className="add-fixtures-content">
                    <div className="round-chooser-wrapper">
                        <label htmlFor="rounds" id="round-select-label">Vòng đấu</label>
                        <select onChange={(e) => {
                            setSelected(e.target.value)
                        }} name="rounds" id="round-select">
                            <option value="0" selected>Tất cả</option>
                            {
                                rounds.map((round) => {
                                    return <option value={round}>{round}</option>
                                })
                            }
                        </select>
                        <div className="btn-add-wrapper">
                            <Link to={`/manager/home/${muagiaiID.muagiaiID}/createMatch/detailCreateMatch`}><button className='btn-add-fixtures'>THÊM LỊCH THI ĐẤU</button></Link>
                        </div>
                    </div>
                                <table className="round-table">
                                    {
                                        fixtures.filter(fixture => selected.toString() === "0" ? fixture :
                                            fixture.VONGDAU.toString()===(selected.toString()))
                                        .map((fixtureItem, index) => {
                                            const imageUrl1 = 'http://localhost:8000/' + fixtureItem.DOI1.LOGO
                                            const imageUrl2 = 'http://localhost:8000/' + fixtureItem.DOI2.LOGO
                                            return (
                                                <tr className='round-info-fixture' key={index}>
                                                    <td className='signature'>
                                                        <img className="club-logo club-logo-1" src={imageUrl1} alt={`${fixtureItem.DOI1.TENCLB} logo`} name="logo-1" />
                                                        <label htmlFor="logo-1" id="logo-1">{fixtureItem.DOI1.TENCLB}</label>
                                                    </td>
                                                    <td id="time">
                                                        <h4>{fixtureItem.THOIGIANDIENRA}</h4>
                                                        <h4 id="date">{fixtureItem.NGAYDIENRA}</h4>
                                                    </td>
                                                    <td className='signature'>
                                                        <img className="club-logo club-logo-2" src={imageUrl2} alt={`${fixtureItem.DOI2.TENCLB} logo`} name="logo-2" />
                                                        <label htmlFor="logo-2" id="logo-2">{fixtureItem.DOI2.TENCLB}</label>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }

                                </table>
                            
            </div>
        </div>
    </>
  )
}

export default AddFixtures