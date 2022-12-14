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
        cauThuXuat["H??? t??n"] = ct.HOTEN
        cauThuXuat["T??n c??u l???c b???"] = ct.MACLB.TENCLB
        cauThuXuat["Ng??y sinh"] = ct.NGAYSINH
        cauThuXuat["Qu???c t???ch"] = ct.QUOCTICH
        cauThuXuat["S??? ??o"] = ct.SOAO
        cauThuXuat["V??? tr??"] = ct.VITRI
        cauThuXuat["S??? b??n th???ng"] = ct.SOBANTHANG

        arrayGoalExported.push(cauThuXuat)
    })
    
    let arrayPunishExported = []
    dsCauThuCoThe.forEach(ct => {
        let cauThuXuat = {}
        cauThuXuat["H??? t??n"] = ct.HOTEN
        cauThuXuat["T??n c??u l???c b???"] = ct.TENCLB
        cauThuXuat["V??? tr??"] = ct.VITRI
        cauThuXuat["S??? th??? v??ng"] = ct.SOTHEVANG
        cauThuXuat["S??? th??? ?????"] = ct.SOTHEDO

        arrayPunishExported.push(cauThuXuat)
    })

    console.log({cttd})

    const handleOnClickExport = async() =>{
        await CommonUtils.exportExcel(bxh,"B???ng X???p H???ng","charts")
    }
    const handleOnClickExport1 = async() =>{
        await CommonUtils.exportExcel(arrayGoalExported, "Top Ghi B??n", "Top Goal Scorer")
    }
    const handleOnClickExport2 = async() =>{
        await CommonUtils.exportExcel(arrayPunishExported, "Top Th??? Ph???t", "penalty card rating")
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
                <div className='title'>L???p b??o c??o gi???i</div>
            </div>
            <table>
                <tr>
                    <td className='td_title' colSpan='10'>B???ng x???p h???ng</td>
                </tr>
                <tr>
                      <td className='td_date' colSpan='10'>Ng??y : {today}</td>
                </tr>
                <tr>
                    <td className='td'>STT</td>
                    <td className='td'>C??u l???c b???</td>
                    <td className='td'>Tr???n ???? ????</td>
                    <td className='td'>Th???ng</td>
                    <td className='td'>H??a</td>
                    <td className='td'>Thua</td>
                    <td className='td'>B??n th???ng</td>
                    <td className='td'>B??n thua</td>
                    <td className='td'>Hi???u s???</td>
                    <td className='td'>??i???m s???</td>
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
            <div className='export_report_btn' onClick={handleOnClickExport}>Xu???t b??o c??o
                <img src={export_report_img} alt='' />
            </div>
            <hr/>
            
            <table>
                <tr>
                    <td className='td_title' colSpan='5'>Top ghi b??n</td>
                </tr>
                <tr>
                    <td className='td_date' colSpan='5'>Ng??y : {today}</td>
                </tr>
                <tr>
                    <td className='td'>STT</td>
                    <td className='td'>C???u th???</td>
                    <td className='td'>C??u l???c b???</td>
                    <td className='td'>Lo???i c???u th???</td>
                    <td className='td'>S??? b??n th???ng</td>
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
            <div className='export_report_btn' onClick={handleOnClickExport1}>Xu???t b??o c??o
                <img src={export_report_img} alt='' />
            </div>
            <hr />
            <table>
                <tr>
                    <td className='td_title' colSpan='6'>Danh s??ch c???u th??? nh???n th???</td>
                </tr>
                <tr>
                    <td className='td_date' colSpan='6'>Ng??y : {today}</td>
                </tr>
                <tr>
                    <td className='td'>STT</td>
                    <td className='td'>C???u th???</td>
                    <td className='td'>C??u l???c b???</td>
                    <td className='td'>Lo???i c???u th???</td>
                    <td className='td'>Th??? v??ng</td>
                    <td className='td'>Th??? ?????</td>
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

            <div className='export_report_btn' onClick={handleOnClickExport2}>Xu???t b??o c??o
                <img src={export_report_img} alt=''/>
            </div>
        </div>
    </div>
  )
}

export default Create_Report
