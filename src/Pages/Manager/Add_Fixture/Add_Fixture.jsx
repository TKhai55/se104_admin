import React from 'react'
import Header from '../Header_Manager/Header'
import "./Add_Fixture.css"
import add_fixture_img from "./img/add_fixture_container.png"
import dropdown from "./img/dropdown.png"

function Add_Fixture() {
  return (
    <div className='add_fixture_container'>
        <Header/>
        <div className='add_fixture_table'>
            <div className='title_container'>
                <img src={add_fixture_img} alt='' />
                <div className='title'>Tạo trận đấu</div>
            </div>
            <div className='round_container'>
                <div className='label'>Vòng đấu</div>
                <div className='dropdown_round'>
                    <div className='text'>Vòng 1</div>
                    <img className='dropdown_img' src={dropdown} alt=''/>
                </div>
            </div>
            <div className='input_flex'>
                <div className='input_col'>
                    <div className='input_cotainer'>
                        <div className='label'>Đội 1:</div>
                        <div className='input'>
                            <div className='input_text'></div>
                            <img className='dropdown_img1' src={dropdown} alt=''/>
                        </div>
                    </div>
                    <div className='input_cotainer'>
                        <div className='label'>Đội 2:</div>
                        <div className='input'>
                            <div className='input_text'></div>
                            <img className='dropdown_img1' src={dropdown} alt='' />
                        </div>
                    </div>
                </div>
                  <div className='input_col'>
                      <div className='input_cotainer'>
                          <div className='label'>Thời gian:</div>
                          <input type='date'/>
                      </div>
                      <div className='input_cotainer'>
                          <div className='label'>Sân:</div>
                          <div className='input'>
                              <div className='input_text'></div>
                          </div>
                      </div>
                  </div>
            </div>
            <div className='add_schedule_btn'>
                Lên lịch thi đấu
            </div>
        </div>
    </div>
  )
}

export default Add_Fixture
