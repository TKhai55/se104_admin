import React from 'react'
import "./Footer.css"
import col1_row1 from '../images/col1_row1.png'
import col1_row2 from '../images/col1_row2.png'
import col2_row1 from '../images/col2_row1.png'
import col2_row2 from '../images/col2_row2.png'
import col3_row1 from '../images/col3_row1.png'
import col3_row2 from '../images/col3_row2.png'


const Footer = () => {
    return (
        <footer>
            <div className='footer d_flex'>
                <div className="container">
                    <div className="col1">
                        <div className="row1">
                            <div className='img_div'>
                                <img className='img' src={col1_row1} alt="c1_r1" />
                            </div>
                            <div className="para">
                                <p>ĐƠN VỊ CHỦ QUẢN</p>
                                <p>Công ty cổ phần bóng đá chuyên nghiệp Việt Nam (VPF)</p>
                            </div>

                        </div>
                        <div className="row2">
                            <div className='img_div'>
                                <img className='img' src={col1_row2} alt="c1_r2" />
                            </div>
                            <div className="para">
                                <p>ĐỊA CHỈ</p>
                                <p>Tầng 3, Tòa nhà Handico, Khu đô thị mới Mễ Trì Hạ,
                                    đường Phạm Hùng, quận Nam Từ Liêm, TP. Hà Nội.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col2">
                        <div className="row1">
                            <div className='img_div'>
                                <img className='img' src={col2_row1} alt="c1_r1" />
                            </div>
                            <div className="para">
                                <p>GIẤY PHÉP</p>
                                <p>Giấy phép số 4593/GP-TTĐT do sở TT-TT Hà Nội cấp ngày 31/10/2017</p>
                            </div>
                        </div>
                        <div className="row2">
                            <div className='img_div'>
                                <img className='img' src={col2_row2} alt="c1_r1" />
                            </div>
                            <div className="para">
                                <p>NGƯỜI CHỊU TRÁCH NHIỆM NỘI DUNG</p>
                                <p>Nguyễn Thị Thu Huyền (Trưởng phòng Truyền Thông - 02437858457 (máy lẻ 126))</p>
                            </div>
                        </div>
                    </div>
                    <div className="col3">
                        <div className="row1">
                            <div className='img_div'>
                                <img className='img' src={col3_row1} alt="c1_r1" />
                            </div>
                            <div className="para">
                                <p>LIÊN LẠC</p>
                                <p>024.3785.8457/58 - FAX: 024.3785.8462</p>
                            </div>
                        </div>
                        <div className="row2">
                            <div className='img_div'>
                                <img className='img' src={col3_row2} alt="c1_r1" />
                            </div>
                            <div className="para">
                                <p>TRANG WEB</p>
                                <a href="https://vpf.vn/mobile/#" target="_blank" rel="noopener noreferrer">www.vpf.vn</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="empty"></div>
            </div>
        </footer>
    )
}

export default Footer