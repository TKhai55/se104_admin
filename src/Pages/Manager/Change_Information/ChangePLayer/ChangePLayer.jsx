import React,{useState, } from 'react'
import './ChangePlayer.css'
import Axios from "axios"
import { useLocation, useNavigate, useParams} from 'react-router-dom'


export default function ChangePLayer() {
    const muagiaiID = useParams()
    const payload = {
        params: {
            muagiaiID,
        }
    };
    const navigate= useNavigate();
    const location = useLocation();
    const [player,] = useState(location.state.player);
    // console.log("payload",payload)
    const [showImage , setShowImage] = useState(false)
    const [selectedFile ,setSelectedFile] = useState([]) 
    const [hoten , setHoTen] = useState()
    const [ngaysinh , setNgaySinh] = useState()
    const [quoctich , setQuocTich] = useState()
    const [soao , setSoAo] = useState()
    const [vitri , setViTri] = useState()
    const [avt , setAVT] = useState()
    const [idct , setidCT] = useState()
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
        
    Axios.patch('http://localhost:8000/v1/cauthu/updatecauthu/'+player._id,{
            HOTEN : hoten,
            NGAYSINH: ngaysinh,
            QUOCTICH: quoctich,
            SOAO: soao,
            VITRI: vitri,
        })
        alert("Sửa thành công");
        navigate(`/manager/home/${payload.params.muagiaiID.muagiaiID}/search/`)
        console.log("hoten", hoten)
    }
    console.log("maclb", player.MACLB)

    const submitHandler1 = ()=>{
        const answer= window.confirm("Bạn có chắc chắn xóa",);
        if (answer) {
            Axios.delete('http://localhost:8000/v1/cauthu/deletecauthu/'+player._id)
            Axios.post('http://localhost:8000/v1/caulacbo/xoacauthu',{
            "_id" : player.MACLB
            })
            navigate(`/manager/home/${payload.params.muagiaiID.muagiaiID}/search/`)
        }
    }
  return (
    <div className='SearchPlayer_Change popup'>
        <div className='SearchPlayer-content_Change popup_inner'>
            <div className='content_left_searchPlayer_Change'>
                <p className='titleContent_searchPlayer_item_Change'>Họ tên:</p>
                <p className='titleContent_searchPlayer_item_Change'>Ngày sinh:</p>
                <p className='titleContent_searchPlayer_item_Change'>Quốc tịch:</p>
                <p className='titleContent_searchPlayer_item_Change'>Số áo:</p>
                <p className='titleContent_searchPlayer_item_Change'>Loại:</p>
            </div>
            <div className='content_middle_searchPlayer_Change'>
                <input className='Player_information_Change' type='text' placeholder={player.HOTEN} onChange={(e)=>setHoTen(e.target.value)}/>
                <input className='Player_information_Change' type='text' placeholder={player.NGAYSINH} onChange={(e)=>setNgaySinh(e.target.value)}/>
                <input className='Player_information_Change' type='text' placeholder={player.QUOCTICH} onChange={(e)=>setQuocTich(e.target.value)}/>
                <input className='Player_information_Change' type='text' placeholder={player.SOAO} onChange={(e)=>setSoAo(e.target.value)}/>
                <select type='text' name="player" id="Player_object" onChange={(e)=> setViTri(e.target.value)}>
                    <option value={player.VITRI} selected disabled hidden>{player.VITRI}</option>
                    <optgroup label="Tiền đạo">
                        <option value="Tiền đạo cắm">Tiền đạo cắm</option>
                        <option value="Tiền đạo cánh trái">Tiền đạo cánh trái</option>
                        <option value="Tiền đạo cánh phải">Tiền đạo cánh phải</option>
                    </optgroup>
                    <optgroup label="Tiền vệ">
                        <option value="Tiền vệ trung tâm">Tiền vệ trung tâm</option>
                        <option value="Tiền vệ phòng ngự">Tiền vệ phòng ngự</option>
                        <option value="Tiền vệ cánh trái">Tiền vệ cánh trái</option>
                        <option value="Tiền vệ cánh phải">Tiền vệ cánh phải</option>
                    </optgroup>
                    <optgroup label="Hậu vệ">
                        <option value="Hậu vệ trái">Hậu vệ trái</option>
                        <option value="Hậu vệ phải">Hậu vệ phải</option>
                        <option value="Trung vệ">Trung vệ</option>
                    </optgroup>
                    <optgroup label="Thủ môn">
                    <option value="Thủ môn">Thủ môn</option>
                    </optgroup>
                </select>
            </div>
            <div className='content_right_searchPlayer_Change'>
                {/* <div>
                    {showImage? selectedFile.map((imageURL)=>{
                        return <img className='searchClub--image_Change'
                        src={imageURL} alt='' />
                    }) : <img className='searchClub--image_Change'
                        src={"http://localhost:8000/"+player.AVATAR} alt='' />
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
                <img className='searchPlayer--image_Change' src={"http://localhost:8000/"+player.AVATAR} alt='' />

            </div>
        </div>
        <div className='searchPLayer_button_change_Change'>
            <button className='searchPlayer_button_fix_Change' onClick={()=>{submitHandler(); window.location.reload()}}>Sửa</button>
            <button className='searchPlayer_button_delete_Change' onClick={()=>{submitHandler1(); window.location.reload()}}>Xóa</button>
            <button className='searchPlayer_button_exit_Change' onClick={() => {navigate(`/manager/home/${payload.params.muagiaiID.muagiaiID}/search`)
}}>Thoát</button>
        </div>
    </div>    
  );
}
