import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Player.css'

const Player = () => {

  const [minPlayer, setMinPlayer] = useState(18)
  const [maxPlayer, setMaxPlayer] = useState(35)
  const [minAge, setMinAge] = useState(16)
  const [maxAge, setMaxAge] = useState(30)
  const [maxForeignPlayer, setMaxForeignPlayer] = useState(3)

  function handleSubmit() {
    if (minPlayer === "") {
      document.querySelector('#min-player').classList.add('data-empty')
      document.querySelector('.warning').style.display = "block"
    } else if (maxPlayer === "") {
      document.querySelector('#max-player').classList.add('data-empty')
      document.querySelector('.warning').style.display = "block"
    } else if (minAge === "") {
      document.querySelector('#min-age').classList.add('data-empty')
      document.querySelector('.warning').style.display = "block"
    } else if (maxAge === "") {
      document.querySelector('#max-age').classList.add('data-empty')
      document.querySelector('.warning').style.display = "block"
    } else if (maxForeignPlayer === "") {
      document.querySelector('#min-foreigner').classList.add('data-empty')
      document.querySelector('.warning').style.display = "block"
    } else {
      postData()
      alert('Thay đổi quy định về Cầu thủ/CLB thành công!')
    }
  }

  function removeWarningClass(name) {
    document.querySelector(name).classList.remove('data-empty')
    document.querySelector('.warning').style.display = 'none'
  }

  async function postData() {
    axios.defaults.baseURL = 'http://localhost:8000/'
    await axios.post('/v1/thamso/create', {
      TENTHAMSO: "So cau thu toi thieu",
      GIATRITHAMSO: minPlayer
    }).then(respond => {
        console.log(respond);
    })

    await axios.post('/v1/thamso/create', {
      TENTHAMSO: "So cau thu toi da",
      GIATRITHAMSO: maxPlayer
    }).then(respond => {
        console.log(respond);
    })

    await axios.post('/v1/thamso/create', {
      TENTHAMSO: "So tuoi toi thieu",
      GIATRITHAMSO: minAge
    }).then(respond => {
        console.log(respond);
    })

    await axios.post('/v1/thamso/create', {
      TENTHAMSO: "So tuoi toi da",
      GIATRITHAMSO: maxAge
    }).then(respond => {
        console.log(respond);
    })

    await axios.post('/v1/thamso/create', {
      TENTHAMSO: "So cau thu ngoai quoc toi da",
      GIATRITHAMSO: maxForeignPlayer
    }).then(respond => {
        console.log(respond);
    })
  }

    const getGoal = async () => {

        try {
            const res = await axios.get('http://localhost:8000/v1/thamso/getlist')
            for (var i = 0; i < res.data.length; i++) {
              if (res.data[i].TENTHAMSO === 'So cau thu toi thieu') {
                setMinPlayer(res.data[i].GIATRITHAMSO)
              } else if (res.data[i].TENTHAMSO === 'So cau thu toi da') {
                setMaxPlayer(res.data[i].GIATRITHAMSO)
              } else if (res.data[i].TENTHAMSO === 'So tuoi toi thieu') {
                setMinAge(res.data[i].GIATRITHAMSO)
              } else if (res.data[i].TENTHAMSO === 'So tuoi toi da') {
                setMaxAge(res.data[i].GIATRITHAMSO)
              } else if (res.data[i].TENTHAMSO === 'So cau thu ngoai quoc toi da') {
                setMaxForeignPlayer(res.data[i].GIATRITHAMSO)
              }
            }
        }
        catch (error) {
            console.log(error.message)
        }
    }
    useEffect(() => {
        getGoal()
    }, [])

  return (
    <div className="main-player-wrapper">
      <div className="min-player-wrapper">
        <label htmlFor="min-player">Số cầu thủ tối thiểu</label>
        <input type="number" id='min-player' value={minPlayer} onChange={(e) => {
          removeWarningClass('#min-player')
          setMinPlayer(e.target.value)
        }} />
      </div>

      <div className="max-player-wrapper">
        <label htmlFor="max-player">Số cầu thủ tối đa</label>
        <input type="number" id='max-player' value={maxPlayer} onChange={(e) => {
          removeWarningClass('#max-player')
          setMaxPlayer(e.target.value)
        }} />
      </div>

      <div className="min-age-wrapper">
        <label htmlFor="min-age">Số tuổi tối thiểu</label>
        <input type="number" id='min-age' value={minAge} onChange={(e) => {
          removeWarningClass('#min-age')
          setMinAge(e.target.value)
        }}/>
      </div>

      <div className="max-age-wrapper">
        <label htmlFor="max-age">Số tuổi tối đa</label>
        <input type="number" id='max-age' value={maxAge} onChange={(e) => {
          removeWarningClass('#max-age')
          setMaxAge(e.target.value)
        }} />
      </div>

      <div className="min-player-wrapper">
        <label htmlFor="min-foreigner">Số cầu thủ ngoại quốc tối đa</label>
        <input type="number" id='min-foreigner' value={maxForeignPlayer} onChange={(e) => {
          removeWarningClass('#min-foreigner')
          setMaxForeignPlayer(e.target.value)
        }} />
      </div>

      <div className='warning'>Vui lòng nhập đầy đủ thông tin!</div>
      <button onClick={handleSubmit}>Áp dụng</button>
    </div>
  )
}

export default Player