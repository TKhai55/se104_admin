import React from 'react'
import './Manager_SearchCoach.css'
import axios from "axios";
import { useState, useEffect } from 'react'
import Header from '../../Header_Manager/Header';
import HeaderSearch from '../Header_Search/HeaderSearch';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

export default function SearchCoach() {
    const muagiaiID = useParams()
    const payload = {
        params: {
            muagiaiID
        }
    };
    console.log("a",payload.params.muagiaiID.muagiaiID)
    const navigate= useNavigate();
    const location = useLocation();
    let [huanluyenviens, setHuanLuyenVien] = useState([])

    const getHLV = async () => {

        try {
            const res = await axios.get('http://localhost:8000/v1/huanluyenvien/searchbyMG_key/'+payload.params.muagiaiID.muagiaiID+'/'+searchkey)
            setHuanLuyenVien(res.data)
            huanluyenviens=res.data;
        }
        catch (error) {
            console.log(error.message)
        }
    }
    useEffect(() => {
        getHLV()
    }, [])
    const [searchkey,] = useState(location.state.sk);
    let [caulacbos, setCauLacBo] = useState([])
    const getCLB = async () => {
        try {
            const res = await axios.get('http://localhost:8000/v1/caulacbo/getcaulacbo1/')
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
    <div className='ManagerCoach_body'>
        <Header/>
        <HeaderSearch/>
        <div className='Manager_SearchCoach'>
            <div className='Manager_header_listCoach'>
                <p id='Manager_content--hlv'>Huấn luyện viên</p>
                <p id='Manager_content--caulacbo'>Câu lạc bộ</p>
                <p id='Manager_content--quoctich'>Quốc tịch</p>
            </div>
            {
                huanluyenviens.map(huanluyenviens => {
                    return (
                        <div className='a' onClick={() => {navigate(`/manager/home/${payload.params.muagiaiID.muagiaiID}/coach/${huanluyenviens._id}`,{
                                state:{coach:huanluyenviens},   
                            }); 
                                // window.location.reload();
                            }}>
                            { find(huanluyenviens.MACLB)}
                            <div className='Manager_list-Coach' key={huanluyenviens.id}>
                                <img src={"http://localhost:8000/"+huanluyenviens.AVATAR} alt={huanluyenviens.HOTEN} width={118.15} height={100}/>
                                <p className='Manager_Coach--name'>{huanluyenviens.HOTEN}</p>
                                <p className="Manager_Coach--club">{nameclub}</p>
                                <p className="Manager_Coach--country">{huanluyenviens.QUOCTICH}</p>
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
