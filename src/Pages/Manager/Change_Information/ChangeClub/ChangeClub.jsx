import React,{useState,} from 'react'
import './ChangeClub.css'
import Axios from "axios"
import { useLocation, useNavigate, useParams } from 'react-router-dom';


export default function ChangeClub() {
    const muagiaiID = useParams()
    const payload = {
        params: {
            muagiaiID
        }
    };
    const navigate= useNavigate();
    const location = useLocation();
    const [club,] = useState(location.state.club);
    const [showImage , setShowImage] = useState(false)
    const [selectedFile ,setSelectedFile] = useState([]) 
    const [tenDoiBong , setTenDoiBong] = useState()
    const [namThanhLap , setNamThanhLap] = useState()
    const [sanVanDong , setSanVanDong] = useState()
    const [logo , setLogo] = useState()
    const [idclb , setidCLB] = useState()
    const onSelectedFile = (e)=>{
    const selectedFiles = e.target.files;
    const selectedFileArrays = Array.from(selectedFiles);
    const imageURL = selectedFileArrays.map((file)=>{
        return URL.createObjectURL(file)
    })
    setShowImage(true)
    setSelectedFile(imageURL)
    setLogo(e.target.files[0])
    console.log(logo)
    }
    const submitHandler = ()=>{
    Axios.patch('http://localhost:8000/v1/caulacbo/updatecaulacbo/'+club._id,{
            TENCLB : tenDoiBong,
            NAMTHANHLAP: namThanhLap,
            SANVANDONG: sanVanDong
        })
        alert("Sửa thành công");
        navigate(`/manager/home/${payload.params.muagiaiID.muagiaiID}/search`)
    }

    return (
    <div className='SearchClub_Change popup'>
        <div className='SearchClub-content_Change popup_inner'>
            <div className='content_left_searchClub_Change'>
                <p className='titleContent_searchClub_item_Change'>Tên đội bóng:</p>
                <p className='titleContent_searchClub_item_Change'>Năm thành lập:</p>
                <p className='titleContent_searchClub_item_Change'>Sân vận động:</p>
            </div>
            <div className='content_middle_searchClub_Change'>
                <input className='Club_information_Change' type='text' placeholder={club.TENCLB} onChange={(e)=>setTenDoiBong(e.target.value)}/>
                <input className='Club_information_Change' type='text' placeholder={club.NAMTHANHLAP} onChange={(e) => setNamThanhLap(e.target.value)}/>
                <input className='Club_information_Change' type='text' placeholder={club.SANVANDONG} onChange={(e) => setSanVanDong(e.target.value)}/>
            </div>
            <div className='content_right_searchClub_Change'>
                {/* <div className='add_logo_clb'>
                    {showImage? selectedFile.map((imageURL)=>{
                        return <img className='searchClub--image_Change'
                        src={imageURL} alt='' />
                    }) : <img className='searchClub--image_Change'
                        src={"http://localhost:8000/"+club.LOGO} alt='' />
                    }
                    <label className='btn_imgClub_change_lb'>
                        Chỉnh sửa Logo +
                        <input
                        className='btn_imgClub_change_btn'
                        type='file'
                        accept='image/png , image/jpg' 
                        onChange={(e)=>onSelectedFile(e)}
                        />
                    </label>
                </div>    */}
                <img className='searchClub--image_Change' src={'http://localhost:8000/'+club.LOGO} alt='' />
            </div>
        </div>
        <div className='searchClub_button_change_Change'>
            <button className='searchClub_button_fix_Change' onClick={()=>{submitHandler(); window.location.reload()}}>Sửa</button>
            <button className='searchClub_button_delete_Change' onClick={()=>{submitHandler(); window.location.reload()}}>Xóa</button>
            <button className='searchClub_button_exit_Change' onClick={() => {navigate(`/manager/home/${payload.params.muagiaiID.muagiaiID}/search`)}}>Thoát</button>
        </div>
    </div>    
  )
}
