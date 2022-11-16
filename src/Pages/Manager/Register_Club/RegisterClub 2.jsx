import React,{useState} from 'react'
import "./RegisterClub.css"
import Header from '../Header_Manager/Header'
import icon_register from "./img/icon_register.png"
import add_logo_clb_img from "./img/logo-clb.png";
import PopupAddHLV from "./popup/Add_HLV";
import HLV_img from "./img/HLV_img.png"
import PopupAddPL from "./popup/Add_PL"
import PL_img from "./img/PL_img.png"
import Dropdown from "./dropdown/DropDown";
import dropdown_img from "./img/dropdown.png"

function RegisterClub() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [buttonPopup1, setButtonPopup1] = useState(false);
  const [selected, setSelected] = useState("Chọn loại")
  const options = ['HLV Trưởng', 'Trợ lý']
  const [isActive, setIsActive] = useState(false)
  const options1 = ['Tiền đạo', 'Tiền vệ','Hậu vệ','Thủ môn']
  const [selected1, setSelected1] = useState("Chọn loại")
  return (
    <div className='register_club_container'>
        <Header/>
        <div className='register_club_table'>
          <div className='title_container'>
              <img src={icon_register} alt=''/>
              <div className='title'>Đăng kí đội bóng</div>
          </div>
          <div className='input_container'>
            <div>
              <div className='label_text'>
                <div className='label'>Tên đội bóng:</div>
                <input className='input_in_main_page' type='text' />
                </div>
              <div className='label_text'>
                <div className='label'>Năm thành lập:</div>
                <input className='input_in_main_page' type='text' />
              </div>
              <div className='label_text'>
                <div className='label'>Sân vận động:</div>
                <input className='input_in_main_page' type='text' />
              </div>
            </div>  
            <div className='add_logo_clb'>
              <img className='add_logo_clb_img' 
              src={add_logo_clb_img} alt='' />
              <div className='add_logo_clb_btn'>
                Thêm LOGO CLB <strong>+</strong>
              </div>
            </div>   
          </div>
          <hr/>
          <div className='add_list'>
            <div className='add_container'>
              <div className='title_text_and_amout_count'>
                <div className='title_text'>Huấn luyện viên</div>
                <div className='label'>Số lượng:</div>
                <div className='amout_count'>1</div>
              </div>
            <div className='add_btn' onClick={() => setButtonPopup(true)}>Thêm <strong>+</strong></div>
              {/* show popup add hlv*/}
              <PopupAddHLV trigger={buttonPopup} setTrigger={setButtonPopup}>
                <div className='input_container1'>
                  <div>
                    <div className='input'>
                      <div className='label1'>Họ tên:</div>
                      <input className='input_in_popup' type='text' />
                    </div>
                    <div className='input'>
                      <div className='label1'>Ngày sinh:</div>
                      <input className='input_in_popup' type='text' />
                    </div>
                    <div className='input'>
                      <div className='label1'>Ngày tham gia:</div>
                      <input className='input_in_popup' type='text' />
                    </div>
                    <div className='input'>
                      <div className='label1'>Quốc tịch:</div>
                      <input className='input_in_popup' type='text' />
                    </div>
                    <div className='input1'>
                      <div className='label1'>Loại:</div>
                        <Dropdown>
                          <div className='dropdown_btn'>
                            {selected}
                            <img src={dropdown_img} alt='' onClick={() => setIsActive(!isActive)} />
                          </div>
                          {isActive &&
                            <div className='dropdown_content'>
                              {options.map(optoin => (
                                <div
                                  className='dropdown_item'
                                  onClick={(e) => {setSelected(optoin);
                                    setIsActive(!isActive)
                                  }}>
                                  {optoin}
                                </div>
                              ))}
                            </div>}
                        </Dropdown>
                    </div>
                  </div>
                  <div>
                    <img className='HLV_img' src={HLV_img} alt=''/>
                    <div className='add_btn'>Ảnh HLV <strong>+</strong></div>
                  </div>
                </div>
                <div className='save_btn'>Lưu</div>
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
              <tr>
                <td className='td_content'>1</td>
                <td className='td_content'>Kiatisuk Senamuang</td>
                <td className='td_content'>11/08/1973</td>
                <td className='td_content'>Thái Lan</td>
                <td className='td_content'>Trưởng</td>
              </tr>
              <tr>
                <td className='td_content'>...</td>
                <td className='td_content'>...</td>
                <td className='td_content'>...</td>
                <td className='td_content'>...</td>
                <td className='td_content'>...</td>
              </tr>
            </table>
          </div>
          <hr/>
        <div className='add_list'>
          <div className='add_container'>
            <div className='title_text_and_amout_count'>
              <div className='title_text'>Cầu thủ</div>
              <div className='label'>Số lượng:</div>
              <div className='amout_count'>1</div>
            </div>
            <div className='add_btn' onClick={() => setButtonPopup1(true)}>Thêm <strong>+</strong></div>
            {/* show popup add pl*/}
            <PopupAddPL trigger={buttonPopup1} setTrigger1={setButtonPopup1}>
              <div className='input_container1'>
                <div>
                  <div className='input'>
                    <div className='label1'>Họ tên:</div>
                    <input className='input_in_popup' type='text' />
                  </div>
                  <div className='input'>
                    <div className='label1'>Ngày sinh:</div>
                    <input className='input_in_popup' type='text' />
                  </div>
                  <div className='input'>
                    <div className='label1'>Chiều cao:</div>
                    <input className='input_in_popup' type='text' />
                  </div>
                  <div className='input'>
                    <div className='label1'>Quốc tịch:</div>
                    <input className='input_in_popup' type='text' />
                  </div>
                  <div className='input'>
                    <div className='label1'>Số áo:</div>
                    <input className='input_in_popup' type='text' />
                  </div>
                  <div className='input1'>
                    <div className='label1'>Loại:</div>
                    <Dropdown>
                      <div className='dropdown_btn'>
                        {selected1}
                        <img src={dropdown_img} alt='' onClick={() => setIsActive(!isActive)} />
                      </div>
                      {isActive &&
                        <div className='dropdown_content'>
                          {options1.map(optoin => (
                            <div
                              className='dropdown_item'
                              onClick={(e) => {setSelected1(optoin);
                                setIsActive(!isActive)
                              }}>
                              {optoin}
                            </div>
                          ))}
                        </div>}
                    </Dropdown>
                  </div>
                </div>
                <div>
                  <img className='HLV_img' src={PL_img} alt='' />
                  <div className='add_btn'>Ảnh <strong>+</strong></div>
                </div>
              </div>
              <div className='save_btn'>Lưu</div>
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
            <tr>
              <td className='td_content'>1</td>
              <td className='td_content'>Nguyễn Công Phượng</td>
              <td className='td_content'>21/01/1995</td>
              <td className='td_content'>Việt Nam</td>
              <td className='td_content'>Tiền đạo</td>
            </tr>
            <tr>
              <td className='td_content'>...</td>
              <td className='td_content'>...</td>
              <td className='td_content'>...</td>
              <td className='td_content'>...</td>
              <td className='td_content'>...</td>
            </tr>
          </table>
        </div>
        <hr/>
        <div className='save_btn_in_main_page'>Lưu</div>
      </div>
    </div>
  )
}

export default RegisterClub
