import React from 'react'
import './Organizer_SearchPlayer.css'
import DetailPLayer from '../Detail/DetailPlayer/DetailPlayer'
import axios from "axios";
import { useState, useEffect,useRef } from 'react'
import Header from '../../Header_Organizer/Header';
import HeaderSearch from '../Header_Search/HeaderSearch';
import { useLocation } from 'react-router-dom';

export default function SearchPLayer() {

    const location = useLocation();
    let [cauthus, setCauThus] = useState([])
    const getCT = async () => {
        try {
            const res = await axios.get('http://localhost:8000/v1/cauthu/search/'+searchkey)
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
    const [buttonPopup, setButtonPopup]= useState(false);

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
    const [idct, setIDCT]= useState();
  return (
    <div className='OrganizerPlayer_body'>
        <Header/>
        <HeaderSearch/>
        <div className='Organizer_SearchPlayer'>
            <div className='Organizer_header_listPlayer'>
                <p id='Organizer_content--cauthu'>Cầu thủ</p>
                <p id='Organizer_content--vitri'>Vị trí</p>
                <p id='Organizer_content--caulacbo'>Câu lạc bộ</p>
            </div>
            {
                cauthus.map(cauthus => {
                    return (
                        <div className='a' onClick={() => {setButtonPopup(true); setIDCT(cauthus._id);  } }>
                        { find(cauthus.MACLB) }
                            <div className='Organizer_list-Player' key={cauthus._id}>
                                <img src={"http://localhost:8000/"+cauthus.AVATAR} alt={cauthus.HOTEN} width={118.15} height={100}/>
                                <p className='Organizer_Player--name'>{cauthus.HOTEN}</p>
                                <p className="Organizer_Player--position">{cauthus.VITRI}</p>
                                <p className="Organizer_Player--club">{nameclub}</p>
                            </div>
                            <hr size="1" color="#fff"/>
                        </div>
                    )
                })
            }
            <DetailPLayer id={idct} trigger={buttonPopup} setTrigger={setButtonPopup} />
        </div>    
    </div>
    
  )
}
