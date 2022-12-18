import React from 'react'
import './Home_Organizer_Tier2.css'
import Header from '../Header_Organizer/Header'
import changePolicy from '../images/changePolicy.png'
import search from '../images/search.png'
import exit from '../images/exit.png'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

// const clubNumber = {
//     currentClub: 12,
//     maxClub: 13
// }




export const Home_Organizer_Tier2 = () => {

    const muagiaiID = useParams()
    const [MGID, setMGID] = useState('')
    let [totalnum, setTotalNum] = useState([])
    let [currentnum, setCurrentNum] = useState([])

    const payload = {
        params: {
            muagiaiID
        }
    };

    useEffect(() => {
        const payload = {
            params: {
                muagiaiID
            }
        };
        setMGID(muagiaiID.muagiaiID)
        getSLTT(payload.params.muagiaiID.muagiaiID)
        getSLCR(payload.params.muagiaiID.muagiaiID)
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
    const getSLCR = async (payload) => {

        try {
            const res = await axios.get('http://localhost:8000/v1/caulacbo/searchbyMG/' + payload)
            setCurrentNum(res.data.length)
        }
        catch (error) {
            console.log(error.message)
        }
    }


    return (
        <div className='Home_tier2'>
            <Header />
            <section className='Home_Organizer_wrapper'>
                <div className="clubNum">
                    <p>CLB: {currentnum}/{totalnum}</p>
                </div>
                <div className='menuWrapper'>


                    <div className="button changePolicy">
                        <Link to={`/organizer/home/${MGID}/changePolicy`}>
                            <img src={changePolicy} alt="changePolicy" />
                            <p>ĐỔI QUY ĐỊNH</p>
                        </Link>
                    </div>

                    <div className="button search">
                        {
                            currentnum === totalnum ?
                                <Link to={'/organizer/home/' + payload.params.muagiaiID.muagiaiID + '/search'}>
                                    <img src={search} alt="search" />
                                    <p>TRA CỨU</p>
                                </Link> :
                                <Link to='#!'>
                                    <img src={search} alt="search" />
                                    <p>TRA CỨU</p>
                                </Link>
                        }


                    </div>
                    <div className="button exit">
                        <Link to='/organizer'>

                            <img src={exit} alt="exit" />
                            <p>THOÁT</p>
                        </Link>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home_Organizer_Tier2