import React, { useState } from 'react'
import "./RegisterClub.css"
import Header from '../Header_Manager/Header'
import icon_register from "./img/icon_register.png"
import image11 from "./img/Group 8.png"
import Axios from "axios"
import { Link, useParams } from 'react-router-dom'


function RegisterClub() {
  const [showImage, setShowImage] = useState(false)
  const [selectedFile, setSelectedFile] = useState([])
  const [tenDoiBong, setTenDoiBong] = useState()
  const [namThanhLap, setNamThanhLap] = useState()
  const [sanVnDong, setSanVanDong] = useState()
  const [logo, setLogo] = useState()
  const muagiaiID = useParams()
  const payload = {
    params: {
      muagiaiID
    }
  }
  console.log(payload.params.muagiaiID.muagiaiID)
  const onSelectedFile = (e) => {
    const selectedFiles = e.target.files;
    const selectedFileArrays = Array.from(selectedFiles);
    const imageURL = selectedFileArrays.map((file) => {
      return URL.createObjectURL(file)
    })
    setShowImage(true)
    setSelectedFile(imageURL)
    setLogo(e.target.files[0])
    console.log(logo)
  }
  const submitHandler = () => {
    const fd = new FormData();
    fd.append('MAMG', payload.params.muagiaiID.muagiaiID)
    fd.append('TENCLB', tenDoiBong)
    fd.append('NAMTHANHLAP', namThanhLap)
    fd.append('SANVANDONG', sanVnDong)
    fd.append('LOGO', logo)
    Axios.post('http://localhost:8000/v1/caulacbo/taocaulacbo', fd)
  }
  return (
    <div className='register_club_container'>
      <Header />
      <div className='register_club_table'>
        <div className='title_container'>
          <img src={icon_register} alt='' />
          <h2>Đăng ký đội bóng</h2>
        </div>
        <div className='input_container'>
          <div>
            <div className='label_text'>
              <div className='label'>Tên đội bóng:</div>
              <input className='input_in_main_page' type='text' onChange={(e) => setTenDoiBong(e.target.value)} />
            </div>
            <div className='label_text'>
              <div className='label'>Năm thành lập:</div>
              <input className='input_in_main_page' type='number' onChange={(e) => setNamThanhLap(e.target.value)} />
            </div>
            <div className='label_text'>
              <div className='label'>Sân vận động:</div>
              <input className='input_in_main_page' type='text' onChange={(e) => setSanVanDong(e.target.value)} />
            </div>
          </div>
          <div className='add_logo_clb'>
            {showImage ? selectedFile.map((imageURL) => {
              return <img className='add_logo_clb_img'
                src={imageURL} alt='' />
            }) : <img className='add_logo_clb_img'
              src={image11} alt='' />
            }
            <label className='add_logo_clb_lb'>
              Thêm LOGO CLB
              <input
                className='add_logo_clb_btn'
                type='file'
                accept='image/png , image/jpg'
                onChange={(e) => onSelectedFile(e)}
              />
            </label>
          </div>
        </div>
        {/*  */}
        <Link to={'/manager/home/' + payload.params.muagiaiID.muagiaiID + '/createCLub'}>
          <div className='save_btn_in_main_page' onClick={submitHandler}>Lưu</div>
        </Link>
      </div>
    </div>
  )
}

export default RegisterClub
