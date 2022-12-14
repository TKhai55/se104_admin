import React,{useState, useEffect} from 'react'
import './ChangeCoach.css'
import Axios from "axios"

export default function ChangeCoach(props) {
    let [huanluyenviens, setHuanLuyenVien] = useState()

    const getHLV = async () => {

        try {
            const res = await Axios.get('http://localhost:8000/v1/huanluyenvien/getacoach/'+'6397e0ef5cd5df5b102ea909')
            setHuanLuyenVien(res.data)
            huanluyenviens=res.data;
            console.log("huanluyenviens",huanluyenviens)

        }
        catch (error) {
            console.log(error.message)
        }
    }
    useEffect(() => {
        getHLV()
    }, [])

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
    Axios.patch('http://localhost:8000/v1/huanluyenvien/updatehuanluyenvien/'+'6397e0ef5cd5df5b102ea909',{
            HOTEN : hoten,
            NGAYSINH: ngaysinh,
            NGAYTHAMGIA: ngaythamgia,
            QUOCTICH: quoctich,
            LOAI: loai
        })
        alert("Sửa thành công");
    }

  return (props.trigger) ? (
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
                <input className='Coach_information_Change' type='text' placeholder={huanluyenviens.HOTEN} onChange={(e)=>setHoTen(e.target.value)}/>
                <input className='Coach_information_Change' type='text' placeholder={huanluyenviens.NGAYSINH} onChange={(e)=>setNgaySinh(e.target.value)}/>
                <input className='Coach_information_Change' type='text' placeholder={huanluyenviens.NGAYTHAMGIA} onChange={(e)=>setNgayThamGia(e.target.value)}/>
                <input className='Coach_information_Change' type='text' placeholder={huanluyenviens.QUOCTICH} onChange={(e)=>setQuocTich(e.target.value)}/>
                <select type='text' name="coach" className="Coach_object" onChange={(e)=>setLoai(e.target.value)}>
                    <option value={huanluyenviens.LOAI}>{huanluyenviens.LOAI}</option>
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
                        src={"http://localhost:8000/"+huanluyenviens.AVATAR} alt='' />
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
                <img className='searchCoach--image_Change' src={"http://localhost:8000/"+huanluyenviens.AVATAR} alt='' />
            </div>
        </div>
        <div className='searchCoach_button_change_Change'>
            <button className='searchCoach_button_fix_Change' onClick={()=>{submitHandler(); window.location.reload()}}>Sửa</button>
            <button className='searchCoach_button_exit_Change' onClick={() => props.setTrigger(false)}>Thoát</button>
            {props.children}
        </div>
    </div>    
  ): "";
}
