import React from 'react'
import './Player.css'

const Player = () => {
  return (
    <div className="main-player-wrapper">
      <div className="min-player-wrapper">
        <label htmlFor="min-player">Số cầu thủ tối thiểu</label>
        <input type="text" id='min-player' defaultValue={10} />
      </div>

      <div className="max-player-wrapper">
        <label htmlFor="max-player">Số cầu thủ tối đa</label>
        <input type="text" id='max-player' defaultValue={10} />
      </div>

      <div className="min-age-wrapper">
        <label htmlFor="min-age">Số tuổi tối thiểu</label>
        <input type="text" id='min-age' defaultValue={10} />
      </div>

      <div className="max-age-wrapper">
        <label htmlFor="max-age">Số tuổi tối đa</label>
        <input type="text" id='max-age' defaultValue={10} />
      </div>

      <div className="min-player-wrapper">
        <label htmlFor="min-foreigner">Số cầu thủ ngoại quốc tối đa</label>
        <input type="text" id='min-foreigner' defaultValue={10} />
      </div>

      <button>Áp dụng</button>
    </div>
  )
}

export default Player