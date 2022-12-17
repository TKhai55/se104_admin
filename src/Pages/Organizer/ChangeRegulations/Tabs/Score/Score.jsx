import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import './Score.css'

const Score = () => {

  const [winScore, setWinScore] = useState(3)
  const [drawScore, setDrawScore] = useState(2)
  const [loseScore, setLoseScore] = useState(1)
  const MGID = useParams()
  function handleSubmit() {
    if (winScore === '') document.querySelector("#win-score").classList.add("data-empty")
    else if (loseScore === '') document.querySelector("#lose-score").classList.add("data-empty")
    else if (drawScore === '') document.querySelector("#draw-score").classList.add("data-empty")
    else if (winScore <= drawScore || winScore <= loseScore || drawScore <= loseScore) Warning() 
    else {
      postData()
      alert("Thay đổi quy định về điểm số thành công!")
    }
  }

  function Warning() {
    document.querySelector("#warning").classList.add('shake')
    setTimeout(() => {
      document.querySelector("#warning").classList.remove('shake')
    }, 500)
  }

  function removeShakeClass(id) {
    document.querySelector(`#${id}`).classList.remove("data-empty")
  }

  async function postData() {
    axios.defaults.baseURL = 'http://localhost:8000/'
    await axios.post(`/v1/thamso/create/${MGID.muagiaiID}`, {
      MAMG: MGID.muagiaiID,
      TENTHAMSO: "Hieu so tran thang",
      GIATRITHAMSO: winScore
    }).then(respond => {
        console.log(respond);
    })

    await axios.post(`/v1/thamso/create/${MGID.muagiaiID}`, {
      MAMG: MGID.muagiaiID,
      TENTHAMSO: "Hieu so tran hoa",
      GIATRITHAMSO: drawScore
    }).then(respond => {
        console.log(respond);
    })

    await axios.post(`/v1/thamso/create/${MGID.muagiaiID}`, {
      MAMG: MGID.muagiaiID,
      TENTHAMSO: "Hieu so tran thua",
      GIATRITHAMSO: loseScore
    }).then(respond => {
        console.log(respond);
    })
  }

  const getScore = async () => {

    try {
        const res = await axios.get(`http://localhost:8000/v1/thamso/getlist/${MGID.muagiaiID}`)
        for (var i = 0; i < res.data.length; i++) {
          if (res.data[i].TENTHAMSO === 'Hieu so tran thang') {
            setWinScore(res.data[i].GIATRITHAMSO)
          } else if (res.data[i].TENTHAMSO === 'Hieu so tran hoa') {
            setDrawScore(res.data[i].GIATRITHAMSO)
          } else if (res.data[i].TENTHAMSO === 'Hieu so tran thua') {
            setLoseScore(res.data[i].GIATRITHAMSO)
          }
        }
    }
    catch (error) {
        console.log(error.message)
    }
}
useEffect(() => {
    getScore()
}, [])

  return (
    <div className="score-main-wrapper">
      <div className="left-column">
        <div>
          <label htmlFor="win-score">Số điểm trận thắng</label>
          <input type="number" id='win-score' value={winScore} onChange={(e) => {
            removeShakeClass("win-score")
            setWinScore(e.target.value)
          }}/>
        </div>

        <div>
          <label htmlFor="draw-score">Số điểm trận hoà</label>
          <input type="number" value={drawScore} id='draw-score' onChange={(e) => {
            removeShakeClass("draw-score")
            setDrawScore(e.target.value)
          }}/>
        </div>

        <div>
          <label htmlFor="lose-score">Số điểm trận thua</label>
          <input type="number" value={loseScore} id='lose-score' onChange={(e) => {
            removeShakeClass("lose-score")
            setLoseScore(e.target.value)
          }}/>
        </div>
      </div>

      <div className="right-column">
        <div id='warning'>Lưu ý: Số điểm trận THẮNG {'>'} HOÀ {'>'} THUA</div>
        <button id="submit-button" onClick={handleSubmit}>Áp dụng</button>
      </div>
    </div>
  )
}

export default Score