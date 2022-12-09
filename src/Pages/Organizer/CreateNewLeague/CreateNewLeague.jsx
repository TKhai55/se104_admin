import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../Header_Organizer/Header'
import './CreateNewLeague.css'

const CreateNewLeague = () => {

    const [logo, setLogo] = useState()
    const navigate = useNavigate()

    useEffect(() => {

        return () => {
            logo && URL.revokeObjectURL(logo.previewLogo)
        }
    }, [logo])

    const previewLogo = (e) => {
        const image = e.target.files[0]

        image.preview = URL.createObjectURL(image)

        setLogo(image)
    }

    async function submit() {
        const form = document.getElementById('form');
        const formData = new FormData(form);


        if (document.getElementById("TENMUAGIAI").value === '') {
            alert("Vui lòng điền tên mùa giải")
            return
        }
        if (document.getElementById("SL_CLB").value === '') {
            alert("Vui lòng điền số lượng câu lạc bộ")
            return
        }
        if (parseInt(document.getElementById("SL_CLB").value) < 2) {
            alert("Số lượng câu lạc bộ phải lớn hơn 2")
            return
        }
        if (!document.getElementById("LOGO").value) {
            alert("Vui lòng cập nhật logo")
            return
        }

        else
            try {
                const res = await axios.post('http://localhost:8000/v1/muagiai/taomuagiai', formData)
                console.log(res)
                alert("Tạo giải thành công")
                navigate('/organizer')
            }
            catch (error) {
                alert(error.message)
                console.log(error.message)
            }
    }



    return (
        <div className='CreateNewLeague'>
            <Header />
            <section className='CreateNewLeague_wrapper'>
                <div className="create_wrapper">
                    <div className="title"><p>TẠO MÙA GIẢI</p></div>
                    <div className="content_wrapper">
                        <div className="input">
                            <form id='form'>
                                <div className='form_content'>

                                    <div className="form_content1">
                                        <label htmlFor="TENMUAGIAI">Tên mùa giải:</label>
                                        <input type="text" name="TENMUAGIAI" id="TENMUAGIAI" placeholder="Tên mùa giải" />
                                    </div>
                                    <div className="form_content2">
                                        <label htmlFor="SL_CLB">Số đội tham gia:</label>
                                        <input type="number" name="SL_CLB" id="SL_CLB" placeholder="Số đội tham gia" />
                                    </div>
                                </div>
                                <div className="logo_input">
                                    <label htmlFor="LOGO">Thêm Logo:</label>
                                    <input type="file" accept='image/*' onChange={previewLogo} name='LOGO' id="LOGO" />
                                    <div className="img_layout">
                                        {logo && (
                                            <img src={logo.preview} alt="logo" />

                                        )}
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <button className='createLeague' onClick={submit} >Tạo mùa giải mới</button>

                </div>
            </section>
        </div>
    )
}

export default CreateNewLeague