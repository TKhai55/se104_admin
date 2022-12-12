import React from 'react'
import { Link } from 'react-router-dom'
import './Organizer_Header_Search.css'
import {FcSearch} from 'react-icons/fc'
import {AiFillCaretDown} from 'react-icons/ai'
import axios from "axios";
import { useState, useEffect,useRef } from 'react'

export default function HeaderSearch() {
  const valuesearch = useRef("");
  const submitHandler = async () => {
    try {
      const valueSearch = {
        ten: valuesearch.current.value,
      };
      console.log("valueSearch", valueSearch);
    } catch (e) {
      console.log(e.message)
    }
  };

  const orderHandler = async () => {
      submitHandler();   
  };

  let [cauthus, setCauThu] = useState([])

    const getCT = async () => {

        try {
            const res = await axios.get('http://localhost:8000/v1/cauthu/search/')
            setCauThu(res.data)
            cauthus=res.data;
        }
        catch (error) {
            console.log(error.message)
        }
    }
    useEffect(() => {
        getCT()
  }, [])
    
  return (
    <div className='Header_Search'>
      <div className='Header_Search_title'>
        <FcSearch className='Header_title_icon' size={40}/>
        <p className='Header_title_text'>TRA CỨU</p>
      </div>
      <div className='Header_Search_filter'>
        <p className='txt_header_filter'>Tên cần tìm:</p>
        <input className='input_header_filter1' ref={valuesearch} ></input>
        <p className='txt_header_filter'>Đối tượng:</p>
        <div className='dropdown_select_object'>
          <p className='input_header_select_object'>Đối tượng <AiFillCaretDown className='input_header_select_object_icon'/></p>
          <div className='drop-list'>
            <Link to='/organizer/home/searchplayer' className='drop-list__item' 
              // onClick={() => {
              //       props.handleFilter(resource.filter(product => product.Name.toLocaleLowerCase('VN').includes(stringToSearch.toLocaleLowerCase('VN'))))
              //       setString('')
              //   }}
              >Cầu thủ
              </Link>
            <Link to='/organizer/home/searchcoach' className='drop-list__item'>Huấn luyện viên</Link>
            <Link to='/organizer/home/searchclub' className='drop-list__item'>Câu lạc bộ</Link>
          </div>
        </div>  
      </div>
    </div>
  )
}
