import React, { useEffect, useState } from 'react'
import './AddFixtures.css'
import Header from '../Header_Manager/Header'
import { Link } from 'react-router-dom'
import axios from 'axios'


const AddFixtures = () => {
    const rounds = ['Vòng 1', 'Vòng 2', 'Vòng 3']
    let [fixtures, setFixtures] = useState([])
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
    }, [fixtures])

    return (
        <>
            <Header />
            <div className='add-fixtures-main-wrapper'>
                <h1 className="add-fixtures-header">LỊCH THI ĐẤU</h1>
                <div className="add-fixtures-content">
                    <div className="round-chooser-wrapper">
                        <label htmlFor="rounds" id="round-select-label">Vòng đấu</label>
                        <select name="rounds" id="round-select">
                            <option value="0" selected>Tất cả</option>
                            {
                                rounds.map((round) => {
                                    return <option value={round}>{round}</option>
                                })
                            }
                        </select>
                        <div className="btn-add-wrapper">
                            <Link to='/manager/home/createMatch/detailCreateMatch'><button className='btn-add-fixtures'>THÊM LỊCH THI ĐẤU</button></Link>
                        </div>
                    </div>
                    {
                        rounds.map((round) => {
                            return (
                                <table className="round-table">
                                    <tr>
                                        <th>{round} / {rounds.length}</th>
                                    </tr>
                                    {
                                        fixtures.map((fixtureItem, index) => {
                                            const imageUrl1 = 'http://localhost:8000/' + fixtureItem.DOI1.LOGO
                                            const imageUrl2 = 'http://localhost:8000/' + fixtureItem.DOI2.LOGO
                                            return (
                                                <tr className='round-info' key={index}>
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
                            )
                        })
                    }


                </div>
            </div>
        </>
    )
}

export default AddFixtures