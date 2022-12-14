import React from 'react'
import './Manager_SearchClub.css'
import axios from "axios";
import { useState, useEffect } from 'react'
import Header from '../../Header_Manager/Header';
import HeaderSearch from '../Header_Search/HeaderSearch';
import { useLocation, useNavigate } from 'react-router-dom';

export default function SearchClub() {
    const navigate= useNavigate();
    const location = useLocation();
    let [caulacbos, setCauLacBo] = useState([])

    const getHLV = async () => {

        try {
            const res = await axios.get('http://localhost:8000/v1/caulacbo/search/'+searchkey)
            setCauLacBo(res.data)
            caulacbos=res.data;
        }
        catch (error) {
            console.log(error.message)
        }
    }
    useEffect(() => {
        getHLV()
    }, [])
    const [searchkey,] = useState(location.state.sk);
  return (
    <div className='ManagerCoach_body'>
        <Header/>
        <HeaderSearch/> 
        <div className='Manager_SearchClub'>
            <div className='Manager_header_listClub'>
                <p id='Manager_content--caulacbo'>Câu lạc bộ</p>
                <p id='Manager_content--namthanhlap'>Năm thành lập</p>
                <p id='Manager_content--san'>Sân vận động</p>
            </div>
            {
                caulacbos.map(caulacbos => {
                    return (
                        <div className='a' onClick={() => {navigate(`/manager/home/club/${caulacbos._id}`,{
                                state:{club:caulacbos},   
                            }); 
                                // window.location.reload();
                            }}>
                            <div className='Organizer_list-Club' key={caulacbos.id}>
                                <img src={"http://localhost:8000/"+caulacbos.LOGO} alt={caulacbos.TENCLB} width={118.15} height={100}/>
                                <p className='Organizer_Club--club'>{caulacbos.TENCLB}</p>
                                <p className="Organizer_Club--year">{caulacbos.NAMTHANHLAP}</p>
                                <p className="Organizer_Club--stadium">{caulacbos.SANVANDONG}</p>
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
