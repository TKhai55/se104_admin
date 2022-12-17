import React,{useEffect,useState} from 'react'
import Header from '../Header_Manager/Header'
import "./Create_Report.css"
import create_report_img from "./img/create_report_img.png"
import export_report_img from "./img/exel_img.png"
import Axios from 'axios'
import CommonUtils from '../utils/CommonUtils'
import {useParams} from 'react-router-dom'

function Create_Report() {
    const [bangxephang, setBangXepHang] = useState([])
    const [topGhiBan , setTopGhiBan] = useState()
    const [topThePhat,setTopThePhat] = useState()
    const [clb , setCLB] = useState()
    var countBXH =0
    var bxh = []
    var tgb = []
    var ttp = []
    const muagiaiID = useParams()
    const payload = {
        params: {
            muagiaiID
        }
    };
    
    useEffect(()=>{
        Axios.get('http://localhost:8000/v1/bangxephang/sort')
        .then((res)=>setBangXepHang(res.data))
        Axios.get('http://localhost:8000/v1/cauthu/topghiban').then((res)=>setTopGhiBan(res.data))
        Axios.get('http://localhost:8000/v1/cauthu/topthephat').then((res) => setTopThePhat(res.data))
        Axios.get('http://localhost:8000/v1/caulacbo/getcaulacbo').then((res)=>setCLB(res.data))
    },[])
    bangxephang.map((value)=>{
        if(value.MAMG === payload.params.muagiaiID.muagiaiID){
            bxh.push({TENCLB : value.TENCLB,
                TRANDACHOI:value.TRANDACHOI,
                THANG:value.THANG,
                HOA: value.HOA,
                THUA:value.THUA,
                BANTHANG:value.BANTHANG,
                BANTHUA:value.BANTHUA,
                HIEUSO:value.HIEUSO,
                DIEM:value.DIEM
            })
        }
    })
    console.log(bxh)
    console.log(payload.params.muagiaiID.muagiaiID)
    const handleOnClickExport = async() =>{
        await CommonUtils.exportExcel(bxh,"Bảng Xếp Hạng","charts")
    }
    const handleOnClickExport1 = async() =>{
        await CommonUtils.exportExcel(topGhiBan, "Top Ghi Bàn", "Top Goal Scorer")
    }
    const handleOnClickExport2 = async() =>{
        await CommonUtils.exportExcel(topThePhat, "Top Thẻ Phạt", "penalty card rating")
    }
  return (
    <div className='create_report_container'>
        <Header />
        <div className='create_report_table'>
            <div className='title_container'>
                <img src={create_report_img} alt='' />
                <div className='title'>Lập báo cáo giải</div>
            </div>
            <table>
                <tr>
                    <td className='td_title' colSpan='10'>Bảng xếp hạng</td>
                </tr>
                <tr>
                      <td className='td_date' colSpan='10'>Ngày : 31/10/2022</td>
                </tr>
                <tr>
                    <td className='td'>STT</td>
                    <td className='td'>Câu lạc bộ</td>
                    <td className='td'>Trận đã đá</td>
                    <td className='td'>Thắng</td>
                    <td className='td'>Hòa</td>
                    <td className='td'>Thua</td>
                    <td className='td'>Bàn thắng</td>
                    <td className='td'>Bàn thua</td>
                    <td className='td'>Hiệu số</td>
                    <td className='td'>Điểm số</td>
                </tr>
                {bangxephang?.map((bxh,key)=>{
                    return (bxh.MAMG === payload.params.muagiaiID.muagiaiID) ? (<tr key={key}>
                        <td className='td'>{++countBXH}</td>
                        <td className='td'>{bxh.TENCLB}</td>
                        <td className='td'>{bxh.TRANDACHOI}</td>
                        <td className='td'>{bxh.THANG}</td>
                        <td className='td'>{bxh.HOA}</td>
                        <td className='td'>{bxh.THUA}</td>
                        <td className='td'>{bxh.BANTHANG}</td>
                        <td className='td'>{bxh.BANTHUA}</td>
                        <td className='td'>{bxh.HIEUSO}</td>
                        <td className='td'>{bxh.DIEM}</td>
                    </tr>) : ""
                })}  
            </table>
            <div className='export_report_btn' onClick={handleOnClickExport}>Xuất báo cáo
                <img src={export_report_img} alt='' />
            </div>
            <hr/>
            
            <table>
                <tr>
                    <td className='td_title' colSpan='5'>Top ghi bàn</td>
                </tr>
                <tr>
                    <td className='td_date' colSpan='5'>Ngày : 31/10/2022</td>
                </tr>
                <tr>
                    <td className='td'>STT</td>
                    <td className='td'>Cầu thủ</td>
                    <td className='td'>Câu lạc bộ</td>
                    <td className='td'>Loại cầu thủ</td>
                    <td className='td'>Số bàn thắng</td>
                </tr>
                {topGhiBan?.map((tgb,key)=>{
                    return <tr key={key}>
                        <td className='td'>{key+1}</td>
                        <td className='td'>{tgb.HOTEN}</td>
                        <td className='td'>
                            {clb?.map((value) => {
                                return (tgb.MACLB === value._id && value.MAMG === payload.params.muagiaiID.muagiaiID) ? value.TENCLB : ''
                            })}
                        </td>
                        <td className='td'>{tgb.VITRI}</td>
                        <td className='td'>{tgb.SOBANTHANG}</td>
                    </tr>
                })}
            </table>
            <div className='export_report_btn' onClick={handleOnClickExport1}>Xuất báo cáo
                <img src={export_report_img} alt='' />
            </div>
            <hr />
            <table>
                <tr>
                    <td className='td_title' colSpan='6'>Danh sách cầu thủ nhận thẻ</td>
                </tr>
                <tr>
                    <td className='td_date' colSpan='6'>Ngày : 31/10/2022</td>
                </tr>
                <tr>
                    <td className='td'>STT</td>
                    <td className='td'>Cầu thủ</td>
                    <td className='td'>Câu lạc bộ</td>
                    <td className='td'>Loại cầu thủ</td>
                    <td className='td'>Thẻ vàng</td>
                    <td className='td'>Thẻ đỏ</td>
                </tr>
                {topThePhat?.map((ttp, key) => {
                    return <tr key={key}>
                        <td className='td'>{key + 1}</td>
                        <td className='td'>{ttp.HOTEN}</td>
                        <td className='td'>
                            {clb?.map((value) => {
                                return (ttp.MACLB === value._id && value.MAMG === payload.params.muagiaiID.muagiaiID) ? value.TENCLB : ''
                            })}
                        </td>
                        <td className='td'>{ttp.VITRI}</td>
                        <td className='td'>{ttp.SOTHEVANG}</td>
                        <td className='td'>{ttp.SOTHEDO}</td>
                    </tr>
                })}
            </table>

            <div className='export_report_btn' onClick={handleOnClickExport2}>Xuất báo cáo
                <img src={export_report_img} alt=''/>
            </div>
        </div>
    </div>
  )
}

export default Create_Report
