import React,{useState} from 'react'
import Header from '../Header_Manager/Header'
import "./Add_Fixture.css"
import add_fixture_img from "./img/add_fixture_container.png"
import Axios from 'axios'
import { Link } from 'react-router-dom'

function Add_Fixture() {
    const [vongdau , setVongDau] = useState("")
    const [luotDau , setLuotDau] = useState("")
    const [doi1 , setDoi1] = useState("")
    const [doi2 , setDoi2] = useState("")
    const [ngayDienRa , setNgayDienRa] = useState("")
    const [san , setSan] = useState("")
    const [thoiGianDienRa , setThoiGianDienRa] = useState("")
    const submitHandler = ()=>{
        Axios.post('http://localhost:8000/v1/trandau/add',{
            NGAYDIENRA : ngayDienRa,
            THOIGIANDIENRA: thoiGianDienRa,
            DOI1: doi1,
            DOI2: doi2,
            VONGDAU: vongdau,
            LUOTDAU: luotDau,
            SANVANDONG: san
        })
        console.log("Thêm thành công");
    }
  return (
    <div className='add_fixture_container'>
        <Header/>
        <div className='add_fixture_table'>
            <div className='title_container'>
                <img src={add_fixture_img} alt='' />
                <div className='title'>Tạo trận đấu</div>
            </div>
            <div className='round_container'>
                <div className='round_container_flex'>
                    <div className='label'>Vòng đấu:</div>
                    <div className='dropdown_round'>
                        <input type='text' className='input_vongdau' onChange={(e) => setVongDau(e.target.value)} />
                    </div>
                </div>
                <div className='round_container_flex'>
                    <div className='label'>Lượt đấu:</div>
                    <div className='dropdown_round'>
                        <input type='text' className='input_vongdau' onChange={(e) => setLuotDau(e.target.value)} />
                    </div>
                </div>
            </div>
            <div className='input_flex'>
                <div className='input_col'>
                    <div className='input_cotainer'>
                        <div className='label'>Đội 1:</div>
                        <input type='text' className='input_doibong' onChange={(e) => setDoi1(e.target.value)} />
                    </div>
                    <div className='input_cotainer'>
                        <div className='label'>Đội 2:</div>
                        <input type='text' className='input_doibong' onChange={(e) => setDoi2(e.target.value)} />
                    </div>
                    <div className='input_cotainer'>
                        <div className='label'>Thời gian diễn ra:</div>
                        <input type='text' className='input_doibong' onChange={(e) => setThoiGianDienRa(e.target.value)} />
                    </div>
                </div>
                  <div className='input_col'>
                      <div className='input_cotainer'>
                          <div className='label'>Ngày diễn ra:</div>
                          <input className='input_date' type='date' onChange={(e) => setNgayDienRa(e.target.value)} />
                      </div>
                      <div className='input_cotainer'>
                          <div className='label'>Sân:</div>
                          <input type='text' className='input_doibong' onChange={(e) => setSan(e.target.value)} />
                      </div>
                  </div>
            </div>
            <Link to='/manager/home/createMatch'>
                <div className='add_schedule_btn' onClick={()=>submitHandler()}>
                    Lên lịch thi đấu
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Add_Fixture
