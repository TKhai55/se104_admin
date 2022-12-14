import React,{useState, useEffect} from 'react'
import './ChangePlayer.css'
import Axios from "axios"


export default function ChangePLayer(props) {
    let [cauthu, setCauThu] = useState([])
    let [player,] = useState()
    const getCT = async () => {
        try {
        const res = await Axios.get('http://localhost:8000/v1/cauthu/getcauthu/');
            setCauThu(res.data)
            cauthu=res.data;
            console.log("cauthu",cauthu[0])
        }
        catch (error) {
            console.log(error.message)
        }
    }
    useEffect(() => {
        getCT()
    }, [])

    const [showImage , setShowImage] = useState(false)
    const [selectedFile ,setSelectedFile] = useState([]) 
    const [hoten , setHoTen] = useState()
    const [ngaysinh , setNgaySinh] = useState()
    const [quoctich , setQuocTich] = useState()
    const [soao , setSoAo] = useState()
    const [loai , setLoai] = useState()
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
    Axios.patch('http://localhost:8000/v1/cauthu/updatecauthu/'+'63987873ccfa4452a73f8443',{
            HOTEN : hoten,
            NGAYSINH: ngaysinh,
            QUOCTICH: quoctich,
            SOAO: soao,
            LOAI: loai
        })
        alert("Sửa thành công");
    }

  return (props.trigger) ? (
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
                <input className='Player_information_Change' type='text' placeholder={cauthu[0].HOTEN} onChange={(e)=>setHoTen(e.target.value)}/>
                <input className='Player_information_Change' type='text' placeholder={cauthu[0].NGAYSINH} onChange={(e)=>setNgaySinh(e.target.value)}/>
                <input className='Player_information_Change' type='text' placeholder={cauthu[0].QUOCTICH} onChange={(e)=>setQuocTich(e.target.value)}/>
                <input className='Player_information_Change' type='text' placeholder={cauthu[0].SOAO} onChange={(e)=>setSoAo(e.target.value)}/>
                <select type='text' name="player" className="Player_object" onClick={(e)=>setLoai(e.target.value)}>
                    <option value="none" selected disabled hidden>{cauthu[0].VITRI}</option>
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
                <img className='searchPlayer--image_Change' src={"http://localhost:8000/"+cauthu[0].AVATAR} alt='' />

            </div>
        </div>
        <div className='searchPLayer_button_change_Change'>
            <button className='searchPlayer_button_fix_Change' onClick={()=>{submitHandler(); window.location.reload()}}>Sửa</button>
            <button className='searchPlayer_button_exit_Change' onClick={() => props.setTrigger(false)}>Thoát</button>
            <button className='searchPlayer_button_exit_Change' onClick={() => console.log("testid",props.id)}>test</button>
            {props.children}
        </div>
    </div>    
  ): "";
}
