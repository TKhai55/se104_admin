import React, { useState } from 'react'
import './Home.Manager.Tier2.css'
import Header from '../Header_Manager/Header'
import createClub from '../images/createClub.png'
import createMatch from '../images/createMatch.png'
import createResult from '../images/createReasult.png'
import createReport from '../images/createReport.png'
import search from '../images/search.png'
import exit from '../images/exit.png'
import { Link, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'




export const Home_Manager_Tier2 = () => {

    const muagiaiID = useParams()
    let [totalnum, setTotalNum] = useState([])
    let [currentnum, setCurrentNum] = useState([])

    const payload = {
        params: {
            muagiaiID
        }
    };
    useEffect(() => {
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
            <section className='Home_wrapper'>
                <div className="clubNum">
                    <p>CLB: {currentnum}/{totalnum}</p>
                </div>
                <div className='menuWrapper'>
                    <div className="row1">
                        <div className="button createClub">
                            <Link to={'/manager/home/' + payload.params.muagiaiID.muagiaiID + '/createCLub'}>
                                <img src={createClub} alt="createCLub" />
                                <p>ĐĂNG KÍ ĐỘI BÓNG</p>
                            </Link>
                        </div>
                        <div className="button createMatch">
                            {
                                currentnum === totalnum ?
                                    <Link to={`/manager/home/${muagiaiID.muagiaiID}/createMatch`}>
                                        <img src={createMatch} alt="createMatch" />
                                        <p>TẠO TRẬN ĐẤU</p>
                                    </Link> :
                                    <Link to='#!'>
                                        <img src={createMatch} alt="createMatch" />
                                        <p>TẠO TRẬN ĐẤU</p>
                                    </Link>
                            }


                        </div>
                        <div className="button search">

                            {
                                currentnum === totalnum ?
                                    <Link to={'/manager/home/' + payload.params.muagiaiID.muagiaiID + '/search'}>
                                        <img src={search} alt="search" />
                                         <p>TRA CỨU</p>
                                    </Link> :
                                    <Link to='#!'>
                                        <img src={search} alt="search" />
                                        <p>TRA CỨU</p>
                                    </Link>
                            }
                        </div>
                    </div>
                    <div className="row2">
                        <div className="button createResult">
                            {
                                currentnum === totalnum ?
                                    <Link to={`/manager/home/${muagiaiID.muagiaiID}/createResult`}>
                                        <img src={createResult} alt="createResult" />
                                        <p>GHI NHẬN KẾT QUẢ</p>
                                    </Link> :
                                    <Link to='#!'>
                                        <img src={createResult} alt="createResult" />
                                        <p>GHI NHẬN KẾT QUẢ</p>
                                    </Link>
                            }


                        </div>
                        <div className="button createReport">
                            {
                                currentnum === totalnum ?
                                    <Link to={'/manager/home/'+payload.params.muagiaiID.muagiaiID+'/createReport'}>

                                        <img src={createReport} alt="createReport" />
                                        <p>LẬP BÁO CÁO</p>
                                    </Link> :
                                    <Link to='#!'>

                                        <img src={createReport} alt="createReport" />
                                        <p>LẬP BÁO CÁO</p>
                                    </Link>
                            }



                        </div>
                        <div className="button exit">
                            <Link to='/manager'>
                                <img src={exit} alt="exit" />
                                <p>THOÁT</p>
                            </Link>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home_Manager_Tier2