import React, { useState, useEffect } from 'react'
import "./AddPlayerAndCoach.css"
import PopupAddHLV from "./popup/Add_HLV";
import PopupAddPL from "./popup/Add_PL"
import Dropdown from "./dropdown/DropDown";
import dropdown_img from "./img/dropdown.png"
import Header from '../Header_Manager/Header';
import { Link, useLocation, useParams } from 'react-router-dom';
import soccer_field from "./img/soccer-field-seen-from-above (1).png"
import Axios from 'axios';
import icon_add_logo from "./img/Group 8.png"

function AddPlayerAndCoach() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [buttonPopup1, setButtonPopup1] = useState(false);
  const [selected, setSelected] = useState("Chọn loại")
  const options = ['HLV Trưởng', 'Trợ lý']
  const [isActive, setIsActive] = useState(false)
  const options1 = ['Tiền đạo', 'Tiền vệ', 'Hậu vệ trái', 'Hậu vệ phải', 'Trung vệ', 'Thủ môn']
  const [selected1, setSelected1] = useState("Chọn loại")
  const muagiaiID = useParams()
  const payload = {
    params: {
      muagiaiID
    }
  };
  var countCT = 0;
  var countHLV = 0;
  var yearNow = new Date()
  const { TENCLB } = useLocation().state;
  const { SANVANDONG } = useLocation().state;
  const { LOGO } = useLocation().state;
  const { ID_muagiai } = useLocation().state;
  const {ID_clb} = useLocation().state;
  const [slCauThu , setSlCauThu] = useState()
  const [slHLV , setSlHLV] = useState()
  const logo_url = 'http://localhost:8000/'+LOGO;
  const [hlvList , setHlvList] = useState()
  const [ctList , setCtList] = useState()
  const [showImage , setShowImage] = useState(false)
  const [showImage1, setShowImage1] = useState(false)
  const [selectedFile, setSelectedFile] = useState([])
  const [selectedFile1, setSelectedFile1] = useState([])
  //hlv
  const [hotenHLV, setHotenHLV] = useState()
  const [ngaysinhHLV, setNgaysinhHLV] = useState()
  const [ngaythamgia, setNgaythamgiaHLV] = useState()
  const [quoctichHLV, setQuoctichHLV] = useState()
  const [avatarHLV, setAvatarHLV] = useState()
  //ct
  const [hotenCT, setHotenCT] = useState()
  const [ngasinhCT, setNgaySinhCT] = useState()
  const [quoctichCT, setQuoctichCT] = useState()
  const [soao, setSoao] = useState()
  const [avatarCT, setAvatarCT] = useState()
  const [thamSoCtToiDa, setThamSoCtToiDa] = useState()
  const [thamSoTuoiToiThieu, setThamSoTuoiToiThieu] = useState()
  const [thamSOTuoiToiDa, setThamSoTuoiToiDa] = useState()
  const [thamSoCtNgoaiQuoc, setThamSoCtNgoaiQuoc] = useState()
  const onSelectedFile = (e) => {
    const selectedFiles = e.target.files;
    const selectedFileArrays = Array.from(selectedFiles);
    const imageURL = selectedFileArrays.map((file) => {
      return URL.createObjectURL(file)
    })
    setShowImage(true)
    setSelectedFile(imageURL)
    setAvatarHLV(e.target.files[0])
  }
  const onSelectedFile1 = (e) => {
    const selectedFiles = e.target.files;
    const selectedFileArrays = Array.from(selectedFiles);
    const imageURL = selectedFileArrays.map((file) => {
      return URL.createObjectURL(file)
    })
    setShowImage1(true)
    setSelectedFile1(imageURL)
    setAvatarCT(e.target.files[0])
  }
  console.log(ID_clb);
  useEffect(() => {
    Axios.get('http://localhost:8000/v1/huanluyenvien/gethuanluyenvien').then(res => setHlvList(res.data))
    Axios.get('http://localhost:8000/v1/cauthu/getcauthu').then(
      res => {
        setCtList(res.data)
      })
    Axios.get('http://localhost:8000/v1/thamso/getlist/' + payload.params.muagiaiID.muagiaiID).then(res => {
      res.data.map((value) => {
        if (value.TENTHAMSO === 'So cau thu toi da')
          setThamSoCtToiDa(value.GIATRITHAMSO)
        else if (value.TENTHAMSO === 'So tuoi toi thieu')
          setThamSoTuoiToiThieu(value.GIATRITHAMSO)
        else if (value.TENTHAMSO === 'So tuoi toi da')
          setThamSoTuoiToiDa(value.GIATRITHAMSO)
        else if (value.TENTHAMSO === 'So cau thu ngoai quoc toi da')
          setThamSoCtNgoaiQuoc(value.GIATRITHAMSO)
      })
    })


    Axios.get('http://localhost:8000/v1/caulacbo/getcaulacbo/'+payload.params.muagiaiID.muagiaiID).then(res=>{
      res.data.map((value)=>{
        if(value._id === ID_clb)
        {
          setSlCauThu(value.SL_CAUTHU)
          setSlHLV(value.SL_HLV)
        }
      })
    })
  },[])

  console.log(slCauThu)
  const submitHLVHandler = ()=>{

    const fd = new FormData()
    fd.append('MAMG', payload.params.muagiaiID.muagiaiID)
    fd.append('MACLB', ID_clb)
    fd.append('HOTEN', hotenHLV)
    fd.append('NGAYSINH', ngaysinhHLV)
    fd.append('NGAYTHAMGIA', ngaythamgia)
    fd.append('QUOCTICH', quoctichHLV)
    fd.append('LOAI', selected)
    fd.append('AVATAR', avatarHLV)
    Axios.post('http://localhost:8000/v1/huanluyenvien/taohuanluyenvien', fd)
    Axios.post('http://localhost:8000/v1/caulacbo/themhlv', {
      "_id": ID_clb
    })
    setButtonPopup(false)
    window.location.reload()
  }
  const submitCTHandler = () => {
    var nsinhCT;
    var countCtNgoaiQuoc = 0;
    const fd = new FormData();
    fd.append('MAMG', payload.params.muagiaiID.muagiaiID)
    fd.append('MACLB', ID_clb)
    fd.append('HOTEN', hotenCT)
    fd.append('NGAYSINH', ngasinhCT)
    fd.append('QUOCTICH', quoctichCT)
    fd.append('SOAO', soao)
    fd.append('VITRI', selected1)
    fd.append('AVATAR', avatarCT)
    if (typeof ngasinhCT !== 'undefined') {
      nsinhCT = ngasinhCT.split('/')[2]
    }
    ctList.map((ct) => {
      if (ct.QUOCTICH !== 'Việt Nam' && ct.MACLB === ID_clb)
        ++countCtNgoaiQuoc
    })

    if(slCauThu > thamSoCtToiDa){
      alert('SỐ CẦU THỦ TỐI ĐA CỦA MỖI CÂU LẠC BỘ LÀ'+thamSoCtToiDa)
    }
    else if ((yearNow.getFullYear() - nsinhCT) < thamSoTuoiToiThieu) {
      alert('Tuổi CỦA CẦU THỦ TỐI THIỂU BẰNG ' + thamSoTuoiToiThieu)
    }
    else if ((yearNow.getFullYear() - nsinhCT) > thamSOTuoiToiDa) {
      alert('TUỔI CỦA CẦU THỦ TỐI ĐA BẰNG ' + thamSOTuoiToiDa)
    }
    else if (countCtNgoaiQuoc >= thamSoCtNgoaiQuoc && quoctichCT !== "Việt Nam") {
      alert('SỐ CẦU THỦ NGOẠI QUỐC TỐI ĐA BẰNG ' + thamSoCtNgoaiQuoc)
    }
    else {
      Axios.post('http://localhost:8000/v1/cauthu/taocauthu', fd)
      Axios.post('http://localhost:8000/v1/caulacbo/themcauthu', {
        "_id": ID_clb
      })
      setButtonPopup1(false)
      window.location.reload()
    }
  }
  console.log(thamSoCtToiDa + ' ' + thamSoTuoiToiThieu + ' ' + thamSOTuoiToiDa + ' ' + thamSoCtNgoaiQuoc);
  return (
    <div className='add_player_coach_container'>
      <Header />
      <div className='add_player_coach_table'>
        <div className='title_container'>
          <div className='title'>Câu lạc bộ</div>
        </div>
        <div className='caulacbo_info_container'>
          <img src={logo_url} className='caulacbo_logo' alt='' />
          <div className='caulacbo_info'>
            <div className='caulacbo_info_name'>{TENCLB}</div>
            <div className='caulacbo_info_stadium'>
              <img src={soccer_field} alt />
              <div>SVD : {SANVANDONG}</div>
            </div>
          </div>
        </div>
        <hr />
        <div className='add_list'>
          <div className='add_container'>
            <div className='title_text_and_amout_count'>
              <div className='title_text'>Huấn luyện viên</div>
              <div className='label'>Số lượng:</div>
              <div className='amout_count'>{slHLV}</div>
            </div>
            <div className='add_btn' onClick={() => setButtonPopup(true)}>Thêm <strong>+</strong></div>
            <PopupAddHLV trigger={buttonPopup} setTrigger={setButtonPopup}>
              <div className='input_container1'>
                <div>
                  <div className='input'>
                    <div className='label1'>Họ tên:</div>
                    <input className='input_in_popup' type='text' onChange={e => setHotenHLV(e.target.value)} />
                  </div>
                  <div className='input'>
                    <div className='label1'>Ngày sinh:</div>
                    <input className='input_in_popup' type='text' onChange={e => setNgaysinhHLV(e.target.value)} />
                  </div>
                  <div className='input'>
                    <div className='label1'>Ngày tham gia:</div>
                    <input className='input_in_popup' type='text' onChange={e => setNgaythamgiaHLV(e.target.value)} />
                  </div>
                  <div className='input'>
                    <div className='label1'>Quốc tịch:</div>
                    <input className='input_in_popup' type='text' onChange={e => setQuoctichHLV(e.target.value)} />
                  </div>
                  <div className='input1'>
                    <div className='label1'>Loại:</div>
                    <select type='text' className='input_in_popup' id='loai' onChange={(e) => setSelected(e.target.value)}>
                      <option value="HLV Trưởng">HLV Trưởng</option>
                      <option value="Trợ lý HLV">Trợ lý HLV</option>
                      <option value="HLV Thủ môn">HLV Thủ môn</option>
                      <option value="HLV Thể lực">HLV Thể lực</option>
                    </select>
                  </div>
                </div>
                <div>
                  {showImage ? <img className='HLV_img' src={selectedFile} alt='' /> : <img className='HLV_img' src={icon_add_logo} alt='' />}
                  <label className='add_logo_clb_lb'>
                    Thêm ảnh HLV
                    <input
                      className='add_logo_clb_btn'
                      type='file'
                      accept='image/png , image/jpg'
                      onChange={(e) => onSelectedFile(e)}
                    />
                  </label>
                </div>
              </div>
              <div className='save_btn' onClick={submitHLVHandler}>Lưu</div>
            </PopupAddHLV>
          </div>
          <table >
            <tr>
              <td className='td_title'>STT</td>
              <td className='td_title'>Họ và Tên</td>
              <td className='td_title'>Ngày sinh</td>
              <td className='td_title'>Quốc tịch</td>
              <td className='td_title'>Loại</td>
            </tr>
            {hlvList?.map((hlv, key) => {
              return hlv.MACLB === ID_clb ? (<tr key={key}>
                <td className='td_content'>{++countHLV}</td>
                <td className='td_content'>{hlv.HOTEN}</td>
                <td className='td_content'>{hlv.NGAYSINH}</td>
                <td className='td_content'>{hlv.QUOCTICH}</td>
                <td className='td_content'>{hlv.LOAI}</td>
              </tr>
              ) : ""
            })}
          </table>
        </div>
        <hr />
        <div className='add_list'>
          <div className='add_container'>
            <div className='title_text_and_amout_count'>
              <div className='title_text'>Cầu thủ</div>
              <div className='label'>Số lượng:</div>
              <div className='amout_count'>{slCauThu}</div>
            </div>
            <div className='add_btn' onClick={() => setButtonPopup1(true)}>Thêm <strong>+</strong></div>
            <PopupAddPL trigger={buttonPopup1} setTrigger1={setButtonPopup1}>
              <div className='input_container1'>
                <div>
                  <div className='input'>
                    <div className='label1'>Họ tên:</div>
                    <input className='input_in_popup' type='text' onChange={e => setHotenCT(e.target.value)} />
                  </div>
                  <div className='input'>
                    <div className='label1'>Ngày sinh:</div>
                    <input className='input_in_popup' type='text' onChange={e => setNgaySinhCT(e.target.value)} />
                  </div>
                  <div className='input'>
                    <div className='label1'>Quốc tịch:</div>
                    <input className='input_in_popup' type='text' onChange={e => setQuoctichCT(e.target.value)} />
                  </div>
                  <div className='input'>
                    <div className='label1'>Số áo:</div>
                    <input className='input_in_popup' type='number' onChange={e => setSoao(e.target.value)} />
                  </div>
                  <div className='input1'>
                    <div className='label1'>Loại:</div>
                    <select type='text' className="input_in_popup" id='loai' onChange={(e) => setSelected1(e.target.value)}>
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
                </div>
                <div>
                  {showImage1 ? <img className='HLV_img' src={selectedFile1} alt='' /> : <img className='HLV_img' src={icon_add_logo} alt='' />}
                  <label className='add_logo_clb_lb'>
                    Thêm ảnh cầu thủ
                    <input
                      className='add_logo_clb_btn'
                      type='file'
                      accept='image/png , image/jpg'
                      onChange={(e) => onSelectedFile1(e)}
                    />
                  </label>
                </div>
              </div>
              <div className='save_btn' onClick={submitCTHandler}>Lưu</div>
            </PopupAddPL>
          </div>
          <table >
            <tr>
              <td className='td_title'>STT</td>
              <td className='td_title'>Họ và Tên</td>
              <td className='td_title'>Ngày sinh</td>
              <td className='td_title'>Quốc tịch</td>
              <td className='td_title'>Loại</td>
            </tr>
            {ctList?.map((ct, key) => {
              return ct.MACLB === ID_clb ? (<tr key={key}>
                <td className='td_content'>{++countCT}</td>
                <td className='td_content'>{ct.HOTEN}</td>
                <td className='td_content'>{ct.NGAYSINH}</td>
                <td className='td_content'>{ct.QUOCTICH}</td>
                <td className='td_content'>{ct.VITRI}</td>
              </tr>) : ""
            })}
          </table>
        </div>
        <hr />
        <Link to={'/manager/home/' + ID_muagiai + '/createCLub'}>
          <div className='save_btn_in_main_page' >Lưu</div>
        </Link>
      </div>
    </div>
  )
}

export default AddPlayerAndCoach
