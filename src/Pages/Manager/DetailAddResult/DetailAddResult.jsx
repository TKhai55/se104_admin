import React from 'react'
import './DetailAddResult.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft, faPlus, faFloppyDisk } from '@fortawesome/free-solid-svg-icons'
import Header from '../Header_Manager/Header'

const eventsInMatch = [
    {
        id: '1',
        type: 'Ghi ban',
        performer: 'Nguyen Cong Phuong',
        time: 10,
        team: '1'
    },
    {
        id: '2',
        type: 'Ghi ban',
        performer: 'Le Cong Vinh',
        time: 15,
        team: '1'
    },
    {
        id: '3',
        type: 'The vang',
        performer: 'Nguyen Hung Dung',
        time: 30,
        team: '2'
    },
    {
        id: '4',
        type: 'The do',
        performer: 'Dang Van Lam',
        time: 68,
        team: '2'
    },
    {
        id: '5',
        type: 'Ghi ban',
        performer: 'Nguyen Cong Phuong',
        time: 75,
        team: '1'
    },
    {
        id: '6',
        type: 'Ghi ban',
        performer: 'Doan Van Hau',
        time: 90,
        team: '2'
    },
    {
        id: '7',
        type: 'Ghi ban',
        performer: 'Doan Van Hau',
        time: 90,
        team: '2'
    },
    {
        id: '8',
        type: 'The vang',
        performer: 'Doan Van Hau',
        time: 90,
        team: '1'
    }
]

const DetailAddResult = () => {
  return (
    <>
        <Header/>
        <div className='detail-add-result-main-wrapper'>
        <div className="detail-add-result-header">GHI NHẬN KẾT QUẢ</div>
        <div className="detail-add-result-content">

        <div className="information-input-wrapper">
                <div className="club-input-wrapper">
                    <label htmlFor="club-input">Câu lạc bộ</label>
                    <select name="club-input" id="club-input" style={{width: '10vw', height: '3.5vh'}}>
                        <option value="0" default>Chon cau lac bo</option>
                        <option value="1">Hai Phong</option>
                        <option value="2">Song Lam Nghe An</option>
                        <option value="3">Hoang Anh Gia Lai</option>
                    </select>
                </div>

                <div className="player-input-wrapper">
                    <label htmlFor="player-input">Cầu thủ</label>
                    <select name="player-input" id="player-input" style={{width: '10vw', height: '3.5vh'}}>
                        <option value="0" default>Chon cau thu</option>
                        <option value="1">Nguyen Duy Linh</option>
                        <option value="2">Que Ngoc Hai</option>
                        <option value="3">Doan Van Hau</option>
                        <option value="4">Nguyen Hung Dung</option>
                        <option value="5">Nguyen Cong Phuong</option>
                    </select>
                </div>

                <div className="event-input-wrapper">
                    <label htmlFor="event-input">Sự kiện</label>
                    <select name="event-input" id="event-input" style={{width: '10vw', height: '3.5vh'}}>
                        <option value="0" default>Chon su kien</option>
                        <option value="1">Ghi ban</option>
                        <option value="2">The vang</option>
                        <option value="3">The do</option>
                    </select>
                </div>

                <div className="time-input-wrapper">
                    <label htmlFor="time-input">Thời gian</label>
                    <input className='input_time' type="text" name='time-input' id='time-input' placeholder='Nhap thoi gian' style={{width: '10vw', height: '3.5vh'}}/>
                </div>

                <div className="type-input-wrapper">
                    <label htmlFor="type-input">Loại</label>
                    <select name="type-input" id="type-input" style={{width: '10vw', height: '3.5vh'}}>
                        <option value="0" default>Mac dinh</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                </div>
            </div>
            <div className="btn-wrapper">
                <button className='btn-delete-result'>Xoá <FontAwesomeIcon icon={faDeleteLeft} /></button>
                <button className='btn-add-result'>Thêm <FontAwesomeIcon icon={faPlus}/></button>
                <button className='btn-save-result'>Lưu <FontAwesomeIcon icon={faFloppyDisk}/></button>
            </div>


            <div className="detail-add-result-content-wrapper">
                <div className="team-1">
                    <img className="club-logo club-logo-1" src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/Hoang_Anh_Gia_Lai_FC_logo.svg/1200px-Hoang_Anh_Gia_Lai_FC_logo.svg.png" alt="Hoang Anh Gia Lai Logo" name="logo-1" style={{width: '5vw', height: '5vw'}}/>
                    <label htmlFor="logo-1" id="logo-1">Hoang Anh Gia Lai</label>
                </div>

                <div className="match-result">2 - 2</div>

                <div className="team-2">
                    <img className="club-logo club-logo-2" src="https://upload.wikimedia.org/wikipedia/vi/thumb/2/21/H%E1%BA%A3i_Ph%C3%B2ng_FC_2021.svg/1200px-H%E1%BA%A3i_Ph%C3%B2ng_FC_2021.svg.png" alt="Hai Phong Logo" name="logo-2" style={{width: '5vw', height: '5vw'}}/>
                    <label htmlFor="logo-2" id="logo-2">Hai Phong</label>
                </div>
            </div>

            <div className="timeline">
                <div className="vertical-ruler"></div>
                {
                    eventsInMatch.map((event, index) => {
                        const team = event.team === '1' ? 'left' : 'right'
                        const color = (event.type === 'Ghi ban' ? '#44b454' : (event.type === 'The vang' ? '#fbd000' : '#b44444'))
                        
                        return (
                            <div key={index} className={"timeline-container " + team}>
                                <div className="timeline-circle" style={{backgroundColor: color}}></div>
                                <div className="timeline-content">
                                    <div className={"arrow-"+team}></div>
                                    <h2>{event.time+'\''}</h2>
                                    <h3>{event.performer}</h3>
                                    <h4>{event.type}</h4>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
    </>
  )
}

export default DetailAddResult