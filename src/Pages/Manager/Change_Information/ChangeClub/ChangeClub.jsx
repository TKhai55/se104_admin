import React,{useState, useEffect} from 'react'
import './ChangeClub.css'
import cp from '../../../Administrator/images/image 10.png'
import Axios from "axios"


export default function ChangeClub(props) {
    let [caulacbos, setCauLacBo] = useState()

    const getCLB = async () => {

        try {
            const res = await Axios.get('http://localhost:8000/v1/caulacbo/getaclub/6396fd49425c26e4c186feb1')
            setCauLacBo(res.data)
            caulacbos=res.data;
            console.log("caulacbo",caulacbos)

        }
        catch (error) {
            console.log(error.message)
        }
    }
    useEffect(() => {
        getCLB()
    }, [])

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
    Axios.patch('http://localhost:8000/v1/caulacbo/updatecaulacbo/'+'6396fd49425c26e4c186feb1',{
            TENCLB : tenDoiBong,
            NAMTHANHLAP: namThanhLap,
            SANVANDONG: sanVanDong
        })
        console.log("Thêm thành công");
    }

    return (props.trigger) ? (
    <div className='SearchClub_Change popup'>
        <div className='SearchClub-content_Change popup_inner'>
            <div className='content_left_searchClub_Change'>
                <p className='titleContent_searchClub_item_Change'>Tên đội bóng:</p>
                <p className='titleContent_searchClub_item_Change'>Năm thành lập:</p>
                <p className='titleContent_searchClub_item_Change'>Sân vận động:</p>
            </div>
            <div className='content_middle_searchClub_Change'>
                <input className='Club_information_Change' type='text' placeholder={caulacbos.TENCLB} onChange={(e)=>setTenDoiBong(e.target.value)}/>
                <input className='Club_information_Change' type='text' placeholder={caulacbos.NAMTHANHLAP} onChange={(e) => setNamThanhLap(e.target.value)}/>
                <input className='Club_information_Change' type='text' placeholder={caulacbos.SANVANDONG} onChange={(e) => setSanVanDong(e.target.value)}/>
            </div>
            <div className='content_right_searchClub_Change'>
                {/* <div className='add_logo_clb'>
                    {showImage? selectedFile.map((imageURL)=>{
                        return <img className='searchClub--image_Change'
                        src={imageURL} alt='' />
                    }) : <img className='searchClub--image_Change'
                        src={"http://localhost:8000/"+caulacbos.LOGO} alt='' />
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
                <img className='searchClub--image_Change' src={caulacbos.LOGO} alt='' />
            </div>
        </div>
        <div className='searchClub_button_change_Change'>
            <button className='searchClub_button_fix_Change' onClick={()=>{submitHandler(); window.location.reload()}}>Sửa</button>
            <button className='searchClub_button_exit_Change' onClick={() => props.setTrigger(false)}>Thoát</button>
            {props.children}
        </div>
    </div>    
  ): "";
}
