import React from 'react'
import './Manager_SearchPlayer.css'
import axios from "axios";
import { useState, useEffect } from 'react'
import Header from '../../Header_Manager/Header';
import HeaderSearch from '../Header_Search/HeaderSearch';
import { useLocation, useNavigate, useParams} from 'react-router-dom'


export default function SearchPLayer() {
    const muagiaiID = useParams()
    const payload = {
        params: {
            muagiaiID
        }
    };
    const navigate= useNavigate();
    const location = useLocation();
    let [cauthus, setCauThus] = useState([])
    const getCT = async () => {
        try {
            const res = await axios.get('http://localhost:8000/v1/cauthu/searchbyMG_key/'+payload.params.muagiaiID.muagiaiID+'/'+ searchkey)
            setCauThus(res.data)
            cauthus=res.data;
        }
        catch (error) {
            console.log(error.message)
        }
    }
    useEffect(() => {
        getCT()
    }, [])

    const [searchkey,] = useState(location.state.sk);
    let [caulacbos, setCauLacBo] = useState([])
    const getCLB = async () => {
        try {
            const res = await axios.get('http://localhost:8000/v1/caulacbo/getcaulacbo/')
            setCauLacBo(res.data)
            caulacbos=res.data;
        }
        catch (error) {
            console.log(error.message)
        }
    }
    useEffect(() => {
        getCLB()
    }, [])

    let [nameclub,] = useState()
    const find = (e) =>{
        for (let i = 0; i < caulacbos.length; i++) {
            if (e === caulacbos[i]._id) nameclub = caulacbos[i].TENCLB
        }
    }
    
  return (
    <div className='ManagerPlayer_body'>
        <Header/>
        <HeaderSearch/>
        <div className='Manager_SearchPlayer'>
            <div className='Manager_header_listPlayer'>
                <p id='Manager_content--cauthu'>Cầu thủ</p>
                <p id='Manager_content--vitri'>Vị trí</p>
                <p id='Manager_content--caulacbo'>Câu lạc bộ</p>
            </div>
            {
                cauthus.map(cauthus => {
                    return (
                        <div className='a' onClick={() => {navigate(`/manager/home/${payload.params.muagiaiID.muagiaiID}/player/${cauthus._id}`,{
                                state:{player:cauthus},   
                            }); 
                                // window.location.reload();
                            }}>
                            { find(cauthus.MACLB)}
                            <div className='Manager_list-Player' key={cauthus._id}>
                                <img src={"http://localhost:8000/"+cauthus.AVATAR} alt={cauthus.HOTEN} width={118.15} height={100}/>
                                <p className='Manager_Player--name'>{cauthus.HOTEN}</p>
                                <p className="Manager_Player--position">{cauthus.VITRI}</p>
                                <p className="Manager_Player--club">{nameclub}</p>
                            </div>
                            <hr size="1" color="#fff"/>
                        </div>
                    )
                })
            }
        </div>    
    </div>    
  )
}
