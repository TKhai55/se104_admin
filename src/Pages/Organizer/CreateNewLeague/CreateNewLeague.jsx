import React from 'react'
import Header from '../Header_Organizer/Header'
import './CreateNewLeague.css'

const CreateNewLeague = () => {
    return (
        <div className='CreateNewLeague'>
            <Header />
            <section className='CreateNewLeague_wrapper'>
                <div className="create_wrapper">
                    <div className="title"><p>TẠO MÙA GIẢI</p></div>
                    <div className="content_wrapper">
                        <div className="input">
                            <form>
                                <div className="form_content1">
                                    <label htmlFor="account">Tên mùa giải:</label>
                                    <input type="text" name="account" id="account" placeholder="Tên mùa giải" />
                                </div>
                                <div className="form_content2">
                                    <label htmlFor="password">Số đội tham gia:</label>
                                    <input type="number" name="password" id="password" placeholder="Số đội tham gia" />
                                </div>
                            </form>
                        </div>
                        <div className="logo_input">
                            <button className='addLogo'>Thêm logo</button>
                            <div className="img_layout">
                                <img src="https://upload.wikimedia.org/wikipedia/vi/5/59/V.League_1_%282021%29.png" alt="logo" />
                            </div>
                        </div>
                    </div>
                    <button className='createLeague'>Tạo mùa giải mới</button>
                </div>
            </section>
        </div>
    )
}

export default CreateNewLeague