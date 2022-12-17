import React,{useState, } from 'react'
import './ChangeCoach.css'
import Axios from "axios"
import { useLocation, useNavigate, useParams } from 'react-router-dom';

export default function ChangeCoach() {
    const muagiaiID = useParams()
    const payload = {
        params: {
            muagiaiID
        }
    };
    const navigate= useNavigate();
    const location = useLocation();
    const [coach,] = useState(location.state.coach);

    const [showImage , setShowImage] = useState(false)
    const [selectedFile ,setSelectedFile] = useState([]) 
    const [hoten , setHoTen] = useState()
    const [ngaysinh , setNgaySinh] = useState()
    const [ngaythamgia , setNgayThamGia] = useState()
    const [quoctich , setQuocTich] = useState()
    const [loai , setLoai] = useState()
    const [avt , setAVT] = useState()
    const [idhlv , setidHLV] = useState()
    const onSelectedFile = (e)=>{
    const selectedFiles = e.target.files;
    const selectedFileArrays = Array.from(selectedFiles);
    const imageURL = selectedFileArrays.map((file)=>{
        return URL.createObjectURL(file)
    })
    setShowImage(true)
    setSelectedFile(imageURL)
    setAVT(e.target.files[0])
    console.log(avt)
    }
    const submitHandler = ()=>{
    Axios.patch('http://localhost:8000/v1/huanluyenvien/updatehuanluyenvien/'+coach._id,{
            HOTEN : hoten,
            NGAYSINH: ngaysinh,
            NGAYTHAMGIA: ngaythamgia,
            QUOCTICH: quoctich,
            LOAI: loai
        })
        alert("Sửa thành công");
        navigate(`/manager/home/${payload.params.muagiaiID.muagiaiID}/search`)
    }
    const submitHandler1 = ()=>{
        const answer= window.confirm("Bạn có chắc chắn xóa",);
        if (answer) {
            Axios.delete('http://localhost:8000/v1/huanluyenvien/deletehuanluyenvien/'+coach._id)
            Axios.post('http://localhost:8000/v1/caulacbo/xoahlv',{
            "_id" : coach.MACLB
            })
            navigate(`/manager/home/${payload.params.muagiaiID.muagiaiID}/search/`)
        }
    }
  return (
    <div className='SearchCoach_Change popup'>
        <div className='SearchCoach-content_Change popup_inner'>
            <div className='content_left_searchCoach_Change'>
                <p className='titleContent_searchCoach_item_Change'>Họ tên:</p>
                <p className='titleContent_searchCoach_item_Change'>Ngày sinh:</p>
                <p className='titleContent_searchCoach_item_Change'>Ngày tham gia:</p>
                <p className='titleContent_searchCoach_item_Change'>Quốc tịch:</p>
                <p className='titleContent_searchCoach_item_Change'>Loại:</p>
            </div>
            <div className='content_middle_searchCoach_Change'>
                <input className='Coach_information_Change' type='text' placeholder={coach.HOTEN} onChange={(e)=>setHoTen(e.target.value)}/>
                <input className='Coach_information_Change' type='text' placeholder={coach.NGAYSINH} onChange={(e)=>setNgaySinh(e.target.value)}/>
                <input className='Coach_information_Change' type='text' placeholder={coach.NGAYTHAMGIA} onChange={(e)=>setNgayThamGia(e.target.value)}/>
                <input className='Coach_information_Change' type='text' placeholder={coach.QUOCTICH} onChange={(e)=>setQuocTich(e.target.value)}/>
                <select type='text' name="coach" className="Coach_object" onChange={(e)=>setLoai(e.target.value)}>
                    <option value={coach.LOAI} selected disabled hidden>{coach.LOAI}</option>
                    <option value="HLV Trưởng">HLV Trưởng</option>
                    <option value="Trợ lý HLV">Trợ lý HLV</option>
                    <option value="HLV Thủ môn">HLV Thủ môn</option>
                    <option value="HLV Thể lực">HLV Thể lực</option>
                </select>   
            </div>
            <div className='content_right_searchCoach_Change'>
                {/* <div>
                    {showImage? selectedFile.map((imageURL)=>{
                        return <img className='searchClub--image_Change'
                        src={imageURL} alt='' />
                    }) : <img className='searchClub--image_Change'
                        src={"http://localhost:8000/"+coach.AVATAR} alt='' />
                    }
                    <label className='btn_imgPlayer_change_lb'>
                        Chỉnh sửa Avatar +
                        <input
                        className='btn_imgPlayer_change_btn'
                        type='file'
                        accept='image/png , image/jpg' 
                        onChange={(e)=>onSelectedFile(e)}
                        />
                    </label>
                </div> */}
                <img className='searchCoach--image_Change' src={"http://localhost:8000/"+coach.AVATAR} alt='' />
            </div>
        </div>
        <div className='searchCoach_button_change_Change'>
            <button className='searchCoach_button_fix_Change' onClick={()=>{submitHandler(); window.location.reload()}}>Sửa</button>
            <button className='searchCoach_button_delete_Change' onClick={()=>{submitHandler1(); window.location.reload()}}>Xóa</button>
            <button className='searchCoach_button_exit_Change' onClick={() => {navigate(`/manager/home/${payload.params.muagiaiID.muagiaiID}/search`)}}>Thoát</button>
        </div>
    </div>    
  )
}
