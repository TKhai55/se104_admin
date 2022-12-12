import React, { useEffect, useState } from 'react'
import './Home.Organizer.Tier1.css'
import Header from '../Header_Organizer/Header'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom'
import axios from "axios";



const Home = () => {

    let [muagiais, setMuaGiai] = useState([])

    const getMG = async () => {

        try {
            const res = await axios.get('http://localhost:8000/v1/muagiai/getmuagiai')
            setMuaGiai(res.data)
        }
        catch (error) {
            console.log(error.message)
        }
    }


    useEffect(() => {
        getMG()
    }, [])



    return (
        <div className='Home_tier1'>
            <Header />
            <section className='home_container'>
                <div className='league_table'>

                    <table className='league'>
                        <thead>
                            <tr><th>CHỌN MÙA GIẢI</th></tr>

                        </thead>
                        <tbody>

                            {
                                muagiais.sort((a, b) => a._id > b._id ? -1 : 1)
                                    .map(muagiai => {
                                        const img_url = 'http://localhost:8000/' + muagiai.LOGO
                                        return (
                                            <Link to={'/organizer/home/' + muagiai._id}>
                                                <tr className='league_infor' key={muagiai._id}>
                                                    <td className='logo'><img src={img_url} alt={muagiai.TENMUAGIAI} className='league_logo' /></td>
                                                    <td className='league_name'>{muagiai.TENMUAGIAI}</td>
                                                </tr>

                                            </Link>
                                        )
                                    })
                            }
                        </tbody>
                    </table>

                </div>
                <Link to='/organizer/addLeague'>
                    <button className='add_league'>
                        Tạo giải đấu mới
                        <span>  </span>
                        <FontAwesomeIcon icon={faPlus} className='button_icon'></FontAwesomeIcon>
                    </button>
                </Link>
            </section >
        </div >
    )
}

export default Home