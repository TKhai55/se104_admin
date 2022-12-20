import React,{useEffect,useState} from 'react'
import Header from '../Header_Manager/Header'
import "./Create_Report.css"
import create_report_img from "./img/create_report_img.png"
import export_report_img from "./img/exel_img.png"
import Axios from 'axios'
import CommonUtils from '../utils/CommonUtils'
import {useParams} from 'react-router-dom'
import axios from 'axios'

function Create_Report() {
    const [bangxephang, setBangXepHang] = useState([])
    const [topGhiBan , setTopGhiBan] = useState()
    const [topThePhat,setTopThePhat] = useState()
    const [dsCauThu,setDSCauThu] = useState([])
    const [dsCauThuCoThe, setDsCauThuCoThe] = useState([])
    let bxhh = []
    const [cttd, setCttd] = useState([])
    const [clb , setCLB] = useState([])
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

    async function getCauThu() {
        axios.get(`http://localhost:8000/v1/cauthu/getcauthughiban`).then(res => setDSCauThu(res.data))
        axios.get(`http://localhost:8000/v1/cauthu/getcauthucothe`).then(res => setDsCauThuCoThe(res.data))
        axios.get(`http://localhost:8000/v1/ct_trandau/getlist`).then(res => setCttd(res.data))
    }
    
    useEffect(()=>{
        Axios.get('http://localhost:8000/v1/bangxephang/sort')
        .then((res)=>setBangXepHang(res.data))
        Axios.get('http://localhost:8000/v1/cauthu/topghiban').then((res)=>setTopGhiBan(res.data))
        Axios.get('http://localhost:8000/v1/cauthu/topthephat').then((res) => setTopThePhat(res.data))
        Axios.get('http://localhost:8000/v1/caulacbo/getcaulacbo').then((res)=>setCLB(res.data))
        getCauThu()
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

    dsCauThu.sort((a, b) => b.SOBANTHANG - a.SOBANTHANG)
    dsCauThuCoThe.sort((a, b) => (b.SOTHEDO*2 + b.SOTHEVANG) - (a.SOTHEDO*2 + a.SOTHEVANG))

    let dsBXH = []
    cttd.forEach(td => {
        let BXHItem = {
            DADAU : 0,
            THANG: 0,
            THUA: 0
        }
        clb.forEach(clb => {
            if (td.MATD.DOI1._id === clb._id) {
                BXHItem.TENCLB = clb.TENCLB
                BXHItem.DADAU = BXHItem.DADAU + 1
                if (td.SCORE1 > td.SCORE2) {
                    BXHItem.THANG = BXHItem.THANG + 1
                    BXHItem.BANTHANG = td.SCORE1
                } else if (td.SCORE1 < td.SCORE2) {
                    BXHItem.THUA = BXHItem.THUA + 1
                    BXHItem.BANTHUA = td.SCORE1
                }
                BXHItem.HIEUSO = BXHItem.BANTHANG - BXHItem.BANTHUA
            } else if (td.MATD.DOI2._id === clb._id){
                BXHItem.TENCLB = clb.TENCLB
                BXHItem.DADAU = BXHItem.DADAU + 1
                if (td.SCORE1 < td.SCORE2) {
                    BXHItem.THANG = BXHItem.THANG + 1
                    BXHItem.BANTHANG = td.SCORE2
                } else if (td.SCORE1 > td.SCORE2) {
                    BXHItem.THUA = BXHItem.THUA + 1
                    BXHItem.BANTHUA = td.SCORE2
                }
                BXHItem.HIEUSO = BXHItem.BANTHANG - BXHItem.BANTHUA
            }
                

            dsBXH.push(BXHItem)
        })
    })

    console.log({dsBXH})

    let arrayGoalExported = []
    dsCauThu.forEach(ct => {
        let cauThuXuat = {}
        cauThuXuat["Họ tên"] = ct.HOTEN
        cauThuXuat["Tên câu lạc bộ"] = ct.MACLB.TENCLB
        cauThuXuat["Ngày sinh"] = ct.NGAYSINH
        cauThuXuat["Quốc tịch"] = ct.QUOCTICH
        cauThuXuat["Số áo"] = ct.SOAO
        cauThuXuat["Vị trí"] = ct.VITRI
        cauThuXuat["Số bàn thắng"] = ct.SOBANTHANG

        arrayGoalExported.push(cauThuXuat)
    })
    
    let arrayPunishExported = []
    dsCauThuCoThe.forEach(ct => {
        let cauThuXuat = {}
        cauThuXuat["Họ tên"] = ct.HOTEN
        cauThuXuat["Tên câu lạc bộ"] = ct.TENCLB
        cauThuXuat["Vị trí"] = ct.VITRI
        cauThuXuat["Số thẻ vàng"] = ct.SOTHEVANG
        cauThuXuat["Số thẻ đỏ"] = ct.SOTHEDO

        arrayPunishExported.push(cauThuXuat)
    })

    console.log({cttd})

    const handleOnClickExport = async() =>{
        await CommonUtils.exportExcel(bxh,"Bảng Xếp Hạng","charts")
    }
    const handleOnClickExport1 = async() =>{
        await CommonUtils.exportExcel(arrayGoalExported, "Top Ghi Bàn", "Top Goal Scorer")
    }
    const handleOnClickExport2 = async() =>{
        await CommonUtils.exportExcel(arrayPunishExported, "Top Thẻ Phạt", "penalty card rating")
    }
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    var yyyy = today.getFullYear();

    today = dd + '/' + mm + '/' + yyyy;
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
                      <td className='td_date' colSpan='10'>Ngày : {today}</td>
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
                    <td className='td_date' colSpan='5'>Ngày : {today}</td>
                </tr>
                <tr>
                    <td className='td'>STT</td>
                    <td className='td'>Cầu thủ</td>
                    <td className='td'>Câu lạc bộ</td>
                    <td className='td'>Loại cầu thủ</td>
                    <td className='td'>Số bàn thắng</td>
                </tr>

                {
                    dsCauThu.map((ct, key) => {
                        return(
                            <tr key={key}>
                                <td className='td'>{key+1}</td>
                                <td className='td'>{ct.HOTEN}</td>
                                <td className='td'>{ct.MACLB.TENCLB}</td>
                                <td className='td'>{ct.VITRI}</td>
                                <td className='td'>{ct.SOBANTHANG}</td>
                            </tr>
                        )
                    })
                }
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
                    <td className='td_date' colSpan='6'>Ngày : {today}</td>
                </tr>
                <tr>
                    <td className='td'>STT</td>
                    <td className='td'>Cầu thủ</td>
                    <td className='td'>Câu lạc bộ</td>
                    <td className='td'>Loại cầu thủ</td>
                    <td className='td'>Thẻ vàng</td>
                    <td className='td'>Thẻ đỏ</td>
                </tr>
                {
                    dsCauThuCoThe.map((ct, index) => {
                        return(
                            <tr key={index}>
                                <td className="td">{index+1}</td>
                                <td className="td">{ct.HOTEN}</td>
                                <td className="td">{ct.MACLB.TENCLB}</td>
                                <td className="td">{ct.VITRI}</td>
                                <td className="td">{ct.SOTHEVANG}</td>
                                <td className="td">{ct.SOTHEDO}</td>
                            </tr>
                        )
                    })
                }
            </table>

            <div className='export_report_btn' onClick={handleOnClickExport2}>Xuất báo cáo
                <img src={export_report_img} alt=''/>
            </div>
        </div>
    </div>
  )
}

export default Create_Report
