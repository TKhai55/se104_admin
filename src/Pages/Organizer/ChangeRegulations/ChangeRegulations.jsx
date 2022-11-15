import React, {useState} from 'react'
import Header from '../Header_Organizer/Header'
import './ChangeRegulations.css'
import Goal from './Tabs/Goal/Goal'
import Player from './Tabs/Player/Player'
import Score from './Tabs/Score/Score'

const ChangeRegulations = () => {
    const [index, setIndex] = useState(0)

  return (
    <div className='change-regulations-main-wrapper'>
        <Header/>
        <div className="change-regulations-header">ĐỔI QUY ĐỊNH</div>
        <div className="change-regulations-content-wrapper">
            <div className="change-regulations-tabs">
                <div className="tab-header-list">
                    <div className={`tab-header h-0 ${index === 0 ? 'active' : null}`} onClick={() => {setIndex(0)}}>
                        <b></b>
                        <b></b>
                        Bàn thắng
                    </div>
                    <div className={`tab-header h-1 ${index === 1 ? 'active' : null}`} onClick={() => {setIndex(1)}}>
                        <b></b>
                        <b></b>
                        Cầu thủ / CLB
                    </div>
                    <div className={`tab-header h-2 ${index === 2 ? 'active' : null}`} onClick={() => {setIndex(2)}}>
                        <b></b>
                        <b></b>
                        Điểm số
                    </div>
                </div>

                <div className="tab-content" hidden={index !== 0}><Goal/></div>
                <div className="tab-content" hidden={index !== 1}><Player/></div>
                <div className="tab-content" hidden={index !== 2}><Score/></div>
            </div>
        </div>
    </div>
  )
}

export default ChangeRegulations