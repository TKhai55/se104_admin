import React, { useEffect, useState } from 'react'
import './Home.Organizer.Tier1.css'
import Header from '../Header_Organizer/Header'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom'
import axios from "axios";


let league = [
    {
        LOGO: 'https://upload.wikimedia.org/wikipedia/vi/c/c9/V.League_1_2022.svg',
        TENMUAGIAI: 'V_League 2022'
    },
    {
        _id: 1,
        LOGO: 'https://upload.wikimedia.org/wikipedia/vi/5/59/V.League_1_%282021%29.png',
        TENMUAGIAI: 'V_League 2021'
    },
    {
        _id: 2,
        LOGO: 'https://upload.wikimedia.org/wikipedia/vi/5/5f/V.League_1_%282020%29.svg',
        TENMUAGIAI: 'V_League 2020'
    },
    {
        _id: 3,
        LOGO: 'https://vpf.vn/wp-content/uploads/2019/02/Logo-1.png',
        TENMUAGIAI: 'V_League 2019'
    },
]



const Home = () => {

    let [muagiais, setMuaGiai] = useState([])

    const getMG = async () => {

        try {
            const res = await axios.get('http://localhost:8000/v1/muagiai/getmuagiai')
            console.log('get from ;;;', res.data)
            setMuaGiai(res.data)
        }
        catch (error) {
            console.log(error.message)
        }
    }


    useEffect(() => {
        getMG()
    }, [])

    function show() {
        // console.log(name)
    }




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
                                        const img_url = 'http://localhost:8000/'+muagiai.LOGO
                                        return (
                                            <tr className='league_infor' key={muagiai._id}>
                                                <td className='logo'><img src={img_url} alt={muagiai.TENMUAGIAI} className='league_logo' /></td>
                                                <td className='league_name'>{muagiai.TENMUAGIAI}</td>
                                            </tr>
                                            // <Link to='/organizer/home'>

                                            // </Link>
                                        )
                                    })
                            }
                        </tbody>
                    </table>
                    <Link to='/organizer/addLeague'>
                        <button className='add_league' onClick={show}>
                            Tạo giải đấu mới
                            <span>  </span>
                            <FontAwesomeIcon icon={faPlus} className='button_icon'></FontAwesomeIcon>
                        </button>
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default Home