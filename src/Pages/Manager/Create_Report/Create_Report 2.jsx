import React from 'react'
import Header from '../Header_Manager/Header'
import "./Create_Report.css"
import create_report_img from "./img/create_report_img.png"
import export_report_img from "./img/exel_img.png"

function Create_Report() {
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
                    <td className='td'>Hiệu số</td>
                </tr>
                <tr>
                    <td className='td'>1</td>
                    <td className='td'>Hoàn Anh Gia Lai</td>
                    <td className='td'>4</td>
                    <td className='td'>4</td>
                    <td className='td'>0</td>
                    <td className='td'>0</td>
                    <td className='td'>10</td>
                    <td className='td'>0</td>
                    <td className='td'>10</td>
                    <td className='td'>12</td>
                </tr>
                <tr>
                    <td className='td'>...</td>
                    <td className='td'>...</td>
                    <td className='td'>...</td>
                    <td className='td'>...</td>
                    <td className='td'>...</td>
                    <td className='td'>...</td>
                    <td className='td'>...</td>
                    <td className='td'>...</td>
                    <td className='td'>...</td>
                    <td className='td'>...</td>
                </tr>
            </table>
            
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
                <tr>
                    <td className='td'>1</td>
                    <td className='td'>Nguyễn Công Phượng</td>
                    <td className='td'>Hoàn Anh Gia Lai</td>
                    <td className='td'>Tiền đạo</td>
                    <td className='td'>12</td>
                </tr>
                <tr>
                    <td className='td'>...</td>
                    <td className='td'>...</td>
                    <td className='td'>...</td>
                    <td className='td'>...</td>
                    <td className='td'>...</td>
                </tr>
            </table>

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
                <tr>
                    <td className='td'>1</td>
                    <td className='td'>Nguyễn Công Phượng</td>
                    <td className='td'>Hoàn Anh Gia Lai</td>
                    <td className='td'>Tiền đạo</td>
                    <td className='td'>12</td>
                    <td className='td'>12</td>
                </tr>
                <tr>
                    <td className='td'>...</td>
                    <td className='td'>...</td>
                    <td className='td'>...</td>
                    <td className='td'>...</td>
                    <td className='td'>...</td>
                    <td className='td'>...</td>
                </tr>
            </table>

            <div className='export_report_btn'>Xuất báo cáo
                <img src={export_report_img} alt=''/>
            </div>
        </div>
    </div>
  )
}

export default Create_Report
