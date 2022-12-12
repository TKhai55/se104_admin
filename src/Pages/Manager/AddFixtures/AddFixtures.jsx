import React, { useEffect, useState } from 'react'
import './AddFixtures.css'
import Header from '../Header_Manager/Header'
import { Link } from 'react-router-dom'
import axios from 'axios'

const rounds = ['Vòng 1', 'Vòng 2', 'Vòng 3']

const AddFixtures = () => {
    const [fixtures, setFixtures] = useState(null)
    useEffect(() => {
        // async function fetchData() {
            axios.defaults.baseURL = 'http://localhost:8000/'
            axios.get('/v1/trandau/read').then(res => setFixtures(res.data.trandau))
            // const {trandau} = respond.data
            
           console.log(fixtures);

        // }
        // fetchData()
    }, [])

  return (
    <>
        <Header/>
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
                                    fixtures.length > 0 && fixtures.trandau.map((fixtureItem, index) => {
                                        return (
                                            <tr className='round-info' key={index}>
                                    <td className='signature'>
                                        <img className="club-logo club-logo-1" src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/Hoang_Anh_Gia_Lai_FC_logo.svg/1200px-Hoang_Anh_Gia_Lai_FC_logo.svg.png" alt="Hoang Anh Gia Lai Logo" name="logo-1" />
                                        <label htmlFor="logo-1" id="logo-1">{fixtureItem.DOI1.TENCLB}</label>
                                    </td>
                                    <td id="time">
                                        <h4>{fixtureItem.THOIGIANDIENRA}</h4>
                                        <h4 id="date">{fixtureItem.NGAYDIENRA}</h4>
                                    </td>
                                    <td className='signature'>
                                        <img className="club-logo club-logo-2" src="https://upload.wikimedia.org/wikipedia/vi/thumb/2/21/H%E1%BA%A3i_Ph%C3%B2ng_FC_2021.svg/1200px-H%E1%BA%A3i_Ph%C3%B2ng_FC_2021.svg.png" alt="Hai Phong Logo" name="logo-2"/>
                                        <label htmlFor="logo-2" id="logo-2">{fixtureItem.DOI2.TENCLB}</label>
                                    </td>
                                </tr>
                                        )
                                    })
                                }

                                {/* <tr className='round-info'>
                                    <td className='signature'>
                                        <img className="club-logo club-logo-1" src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/Hoang_Anh_Gia_Lai_FC_logo.svg/1200px-Hoang_Anh_Gia_Lai_FC_logo.svg.png" alt="Hoang Anh Gia Lai Logo" name="logo-1" />
                                        <label htmlFor="logo-1" id="logo-1">{fixtures.DOI1}</label>
                                    </td>
                                    <td id="time">
                                        <h4>17:00</h4>
                                        <h4 id="date">Th 6, 30/09/2022</h4>
                                    </td>
                                    <td className='signature'>
                                        <img className="club-logo club-logo-2" src="https://upload.wikimedia.org/wikipedia/vi/thumb/2/21/H%E1%BA%A3i_Ph%C3%B2ng_FC_2021.svg/1200px-H%E1%BA%A3i_Ph%C3%B2ng_FC_2021.svg.png" alt="Hai Phong Logo" name="logo-2"/>
                                        <label htmlFor="logo-2" id="logo-2">{fixtures.DOI2}</label>
                                    </td>
                                </tr>

                                <tr className='round-info'>
                                    <td className='signature'>
                                        <img className="club-logo club-logo-1" src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/Hoang_Anh_Gia_Lai_FC_logo.svg/1200px-Hoang_Anh_Gia_Lai_FC_logo.svg.png" alt="Hoang Anh Gia Lai Logo" name="logo-1" />
                                        <label htmlFor="logo-1" id="logo-1">Hoang Anh Gia Lai</label>
                                    </td>
                                    <td id="time">
                                        <h4>17:00</h4>
                                        <h4 id="date">Th 6, 30/09/2022</h4>
                                    </td>
                                    <td className='signature'>
                                        <img className="club-logo club-logo-2" src="https://upload.wikimedia.org/wikipedia/vi/thumb/2/21/H%E1%BA%A3i_Ph%C3%B2ng_FC_2021.svg/1200px-H%E1%BA%A3i_Ph%C3%B2ng_FC_2021.svg.png" alt="Hai Phong Logo" name="logo-2"/>
                                        <label htmlFor="logo-2" id="logo-2">Hai Phong</label>
                                    </td>
                                </tr>

                                <tr className='round-info'>
                                    <td className='signature'>
                                        <img className="club-logo club-logo-1" src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/Hoang_Anh_Gia_Lai_FC_logo.svg/1200px-Hoang_Anh_Gia_Lai_FC_logo.svg.png" alt="Hoang Anh Gia Lai Logo" name="logo-1" />
                                        <label htmlFor="logo-1" id="logo-1">Hoang Anh Gia Lai</label>
                                    </td>
                                    <td id="time">
                                        <h4>17:00</h4>
                                        <h4 id="date">Th 6, 30/09/2022</h4>
                                    </td>
                                    <td className='signature'>
                                        <img className="club-logo club-logo-2" src="https://upload.wikimedia.org/wikipedia/vi/thumb/2/21/H%E1%BA%A3i_Ph%C3%B2ng_FC_2021.svg/1200px-H%E1%BA%A3i_Ph%C3%B2ng_FC_2021.svg.png" alt="Hai Phong Logo" name="logo-2"/>
                                        <label htmlFor="logo-2" id="logo-2">Hai Phong</label>
                                    </td>
                                </tr>

                                <tr className='round-info'>
                                    <td className='signature'>
                                        <img className="club-logo club-logo-1" src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/Hoang_Anh_Gia_Lai_FC_logo.svg/1200px-Hoang_Anh_Gia_Lai_FC_logo.svg.png" alt="Hoang Anh Gia Lai Logo" name="logo-1" />
                                        <label htmlFor="logo-1" id="logo-1">Hoang Anh Gia Lai</label>
                                    </td>
                                    <td id="time">
                                        <h4>17:00</h4>
                                        <h4 id="date">Th 6, 30/09/2022</h4>
                                    </td>
                                    <td className='signature'>
                                        <img className="club-logo club-logo-2" src="https://upload.wikimedia.org/wikipedia/vi/thumb/2/21/H%E1%BA%A3i_Ph%C3%B2ng_FC_2021.svg/1200px-H%E1%BA%A3i_Ph%C3%B2ng_FC_2021.svg.png" alt="Hai Phong Logo" name="logo-2"/>
                                        <label htmlFor="logo-2" id="logo-2">Hai Phong</label>
                                    </td>
                                </tr> */}
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