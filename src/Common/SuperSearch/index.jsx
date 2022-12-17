import React from 'react'
import './style.css'
import { FcSearch } from 'react-icons/fc'


const index = () => {

    return (
        <div className='SPsearch_container'>
            <div className='SPsearch_title'>
                <FcSearch className='SPsearch_title_icon' size={60} />
                <h2 className='SPsearch_title_text'>TRA CỨU</h2>
            </div>
            <div className="SPsearch_bar">
                <label htmlFor="search_bar" className='label'>Thông tin cần tìm:</label>
                <input type="text" name='search_bar' className='search_bar' placeholder='Nhập thông tin' />
                <label htmlFor="combobox" className='combobox_label'>Đối tượng:</label>
                <select name="combobox" className='combobox' id='combobox'>
                    <option >Cầu thủ</option>
                    <option >Huấn luyện viên</option>
                    <option >Câu lạc bộ</option>
                </select>
            </div>
            <div className="SPsearch_table">

            </div>
        </div>
    )
}

export default index