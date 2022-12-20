import React,{useEffect, useState} from 'react'
import Header from '../Header_Manager/Header'
import "./Add_Fixture.css"
import add_fixture_img from "./img/add_fixture_container.png"
import Axios from 'axios'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Add_Fixture() {
    const muagiaiID = useParams()
    const [rounds, setRounds] = useState([])
    let [totalNum, setTotalNum] = useState(0)
    const [selected, setSelected] = useState(0)
    const [vongdau , setVongDau] = useState("")
    const [luotDau , setLuotDau] = useState("")
    const [doi1 , setDoi1] = useState("")
    const [doi2 , setDoi2] = useState("")
    const [ngayDienRa , setNgayDienRa] = useState("")
    const [san , setSan] = useState("")
    const [thoiGianDienRa , setThoiGianDienRa] = useState("")
    const [dsCLB, setDsCLB] = useState([])

    const getSLTT = async () => {
        try {
            const res = await axios.get('http://localhost:8000/v1/muagiai/getmuagiai/' + muagiaiID.muagiaiID)
            totalNum = res.data.SL_CLB
            setTotalNum(res.data.SL_CLB)

            if (totalNum % 2 === 0) totalNum = totalNum - 1

            for(var i = 1; i <= totalNum * 2; i++) {
                if (rounds.length < totalNum * 2) {
                    rounds.push(i)
                }
            }
        }
        catch (error) {
            console.log(error.message)
        }
    }

    const submitHandler = ()=>{
        axios.post('http://localhost:8000/v1/trandau/add',{
            MAMG: muagiaiID.muagiaiID,
            NGAYDIENRA : ngayDienRa,
            THOIGIANDIENRA: thoiGianDienRa,
            MAMG: muagiaiID.muagiaiID,
            DOI1: doi1,
            DOI2: doi2,
            VONGDAU: vongdau,
            LUOTDAU: 0,
            SANVANDONG: san
        }).then(res => {
            if (res) console.log("Add thanh cong")
        })
        alert('Thêm thành công!')
        window.location.reload()
    }

    async function getCLB() {

        const res = await axios.get('http://localhost:8000/v1/caulacbo/getcaulacbo/' + muagiaiID.muagiaiID)
        setDsCLB(res.data)
    }

    useEffect(() => {
        getCLB()
        getSLTT()
    })

  return (
    <div className='add_fixture_container'>
        <Header/>
        <div className='add_fixture_table'>
            <div className='title_container'>
                <img src={add_fixture_img} alt='' />
                <p className='title'>Tạo trận đấu</p>
            </div>
            <div className='round_container'>
                <div className='round_container_flex'>
                    <label className='label'>Vòng đấu:</label>
                    <select onChange={(e) => setVongDau(e.target.value)} className='dropdown_round'>
                        <option>Chọn vòng đấu</option>
                        {
                            rounds.map((round) => {
                                return <option value={round}>{round}</option>
                            })
                        }
                    </select>
                    {/* <div className='dropdown_round'>
                        <input type='number' className='input_vongdau' onChange={(e) => setVongDau(e.target.value)} />
                    </div> */}
                </div>
            </div>
            <div className='input_flex'>
                <div className='input_col'>
                    <div className='input_cotainer'>
                        <div className='label'>Đội 1:</div>
                        <select onChange={(e) => {
                            setDoi1(e.target.value)
                            dsCLB.forEach(clb => {
                                if (clb._id === e.target.value) setSan(clb.SANVANDONG)
                            })
                        }} className='input_doibong'>
                            <option hidden>Chọn đội bóng</option>
                            {
                                dsCLB
                                // .filter((clb) => clb._id !== doi2)
                                .map(clb => (
                                    <option value={clb._id}>{clb.TENCLB}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className='input_cotainer'>
                        <div className='label'>Đội 2:</div>
                        <select onChange={(e) => setDoi2(e.target.value)} className='input_doibong'>
                            <option hidden>Chọn đội bóng</option>
                            {
                                dsCLB.filter((clb) => clb._id !== doi1).map(clb => (
                                    doi1 !== "" ? <option value={clb._id}>{clb.TENCLB}</option> : null
                                ))
                            }
                        </select>
                    </div>
                    <div className='input_cotainer'>
                        <div className='label'>Thời gian:</div>
                        <input type='time' className='input_doibong' onChange={(e) => setThoiGianDienRa(e.target.value)} />
                    </div>
                </div>
                  <div className='input_col'>
                      <div className='input_cotainer'>
                          <div className='label'>Ngày diễn ra:</div>
                          <input className='input_date' type='date' onChange={(e) => setNgayDienRa(e.target.value)} />
                      </div>
                      <div className='input_cotainer'>
                          <div className='label'>Sân:</div>
                          <select className='input_doibong'>
                            {
                                dsCLB.filter((clb) => clb._id === doi1 || clb._id === doi2).map(clb => {
                                    return (clb._id === doi1 ? <option selected value={clb.SANVANDONG}>{clb.SANVANDONG}</option> : <option value={clb.SANVANDONG}>{clb.SANVANDONG}</option>)
                                })
                            }
                          </select>
                      </div>
                  </div>
            </div>
                <div className='add_schedule_btn' onClick={()=>submitHandler()}>
                    Lên lịch thi đấu
                </div>
        </div>
    </div>
  )
}

export default Add_Fixture
