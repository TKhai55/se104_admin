import React from 'react'
import './Score.css'

const Score = () => {
  return (
    <div className="score-main-wrapper">
      <div className="left-column">
        <div>
          <label htmlFor="win-score">Số điểm trận thắng</label>
          <input type="text" defaultValue={5} id='win-score'/>
        </div>

        <div>
          <label htmlFor="lose-score">Số điểm trận thua</label>
          <input type="text" defaultValue={5} id='lose-score'/>
        </div>

        <div>
          <label htmlFor="draw-score">Số điểm trận hoà</label>
          <input type="text" defaultValue={5} id='draw-score'/>
        </div>
      </div>

      <div className="right-column">
        <div>Lưu ý: Số điểm trận THẮNG {'>'} HOÀ {'>'} THUA</div>
        <button>Áp dụng</button>
      </div>
    </div>
  )
}

export default Score