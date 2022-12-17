import React from 'react'
import './Organizer_SearchClub.css'
import axios from "axios";
import { useState, useEffect } from 'react'
import Header from '../../Header_Organizer/Header';
import HeaderSearch from '../Header_Search/HeaderSearch';
import { useLocation, useNavigate, useParams } from 'react-router-dom';


export default function SearchClub() {
    const muagiaiID = useParams()
    const payload = {
        params: {
            muagiaiID
        }
    };
    const navigate= useNavigate();
    const location = useLocation();
    let [caulacbos, setCauLacBo] = useState([])

    const getHLV = async () => {

        try {
            const res = await axios.get('http://localhost:8000/v1/caulacbo/searchbyMG_key/'+payload.params.muagiaiID.muagiaiID+'/'+searchkey)
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
    <div className='OrganizerClub_body'>
        <Header/>
        <HeaderSearch/>
        <div className='Organizer_SearchClub'>
            <div className='Organizer_header_listClub'>
                <p id='Organizer_content--caulacbo'>Câu lạc bộ</p>
                <p id='Organizer_content--namthanhlap'>Năm thành lập</p>
                <p id='Organizer_content--san'>Sân vận động</p>
            </div>
            {
                caulacbos.map(caulacbos => {
                    return (
                        <div className='a' onClick={() => {navigate(`/organizer/home/${payload.params.muagiaiID.muagiaiID}/club/${caulacbos._id}`,{
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
