import React,{useState, useEffect} from 'react'
import './ChangePlayer.css'
import Axios from "axios"


export default function ChangePLayer(props) {
    let [cauthu, setCauThu] = useState()
    const [idcauthu,setIDCauThu] = useState(props.id)
    // setIDCauThu(props.id)
    console.log("cay quá chạy được đi",props.id)
    const getCT = async () => {
        try {
        const res = await Axios.get('http://localhost:8000/v1/cauthu/getaplayer/'+'6397cb755cd5df5b102ea8b9');
            setCauThu(res.data)
            cauthu=res.data;
            console.log("cauthu",cauthu)
            
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
    Axios.patch('http://localhost:8000/v1/cauthu/updatecauthu/'+'6397cb755cd5df5b102ea8b9',{
            HOTEN : hoten,
            NGAYSINH: ngaysinh,
            QUOCTICH: quoctich,
            SOAO: soao,
            LOAI: loai
        })
        console.log("Thêm thành công");
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
                <input className='Player_information_Change' type='text' placeholder={cauthu.HOTEN} onChange={(e)=>setHoTen(e.target.value)}/>
                <input className='Player_information_Change' type='text' placeholder={cauthu.NGAYSINH} onChange={(e)=>setNgaySinh(e.target.value)}/>
                <input className='Player_information_Change' type='text' placeholder={cauthu.QUOCTICH} onChange={(e)=>setQuocTich(e.target.value)}/>
                <input className='Player_information_Change' type='text' placeholder={cauthu.SOAO} onChange={(e)=>setSoAo(e.target.value)}/>
                <select type='text' name="player" className="Player_object" onChange={(e)=>setLoai(e.target.value)}>
                    <option value={cauthu.VITRI}>{cauthu.VITRI}</option>
                    <option value="Tiền đạo">Tiền đạo</option>
                    <option value="Tiền vệ">Tiền vệ</option>
                    <option value="Hậu vệ">Hậu vệ</option>
                    <option value="Thủ môn">Thủ môn</option>
                </select>
            </div>
            <div className='content_right_searchPlayer_Change'>
                {/* <div>
                    {showImage? selectedFile.map((imageURL)=>{
                        return <img className='searchClub--image_Change'
                        src={imageURL} alt='' />
                    }) : <img className='searchClub--image_Change'
                        src={"http://localhost:8000/"+cauthu.AVATAR} alt='' />
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
                <img className='searchPlayer--image_Change' src={"http://localhost:8000/"+cauthu.AVATAR} alt='' />

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
