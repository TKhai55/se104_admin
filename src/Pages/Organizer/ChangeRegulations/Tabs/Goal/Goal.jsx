import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons'
import './Goal.css'
import axios from 'axios'
import { useState } from 'react'
import ConfirmDelete from './ConfirmDelete/ConfirmDelete'

const Goal = () => {
    let [goal, setGoal] = useState([])
    let [goalInput, setGoalInput] = useState()
    let [goalTime, setGoalTime] = useState()
    let [openConfirmDelete, setOpenConfirmDelete] = useState(false)
    let [nameGoal, setNameGoal] = useState('')
    let [idGoal, setIdGoal] = useState('')

    const getGoalTime = async () => {
        try {
            const res = await axios.get('http://localhost:8000/v1/thamso/getlist')
            for (var i = 0; i < res.data.length; i++) {
                if (res.data[i].TENTHAMSO === 'Thoi diem ghi ban toi da') {
                    setGoalTime(res.data[i].GIATRITHAMSO)
                }
            }
        }
        catch (error) {
            console.log(error.message)
        }
    }

    const getGoal = async () => {
        try {
            const res = await axios.get('http://localhost:8000/v1/loaibanthang/read')
            setGoal(res.data)
        }
        catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        getGoal()
    }, [goal])

    useEffect(() => {
        getGoalTime()
    }, [])

    async function handleClickGoalTime() {
        if (goalTime === '') {
            document.querySelector('.input-goal-time').classList.add('data-empty')
            notification('.notification-text', '#ed4337', 'Chưa nhập thông tin!')
        } else {
            try {
                axios.defaults.baseURL = 'http://localhost:8000/'
                await axios.post('/v1/thamso/create', {
                TENTHAMSO: "Thoi diem ghi ban toi da",
                GIATRITHAMSO: goalTime
              }).then(respond => {
                  console.log(respond);
              })
              notification('.notification-text', '#4a934a', 'Thêm thành công!')
            } catch (error) {
                console.log(error)
            }
        }
    }
    
    async function handleClickGoal() {
        if (goalInput === '') {
            notification(".notification-text-goal", '#ed4337', 'Chưa nhập thông tin!')
        } else {
            let flag = false
            goal.map(goalItem => {
                flag = goalInput.includes(goalItem.TENBANTHANG)
                if (flag) {
                    notification(".notification-text-goal", '#ed4337', `${goalInput} đã được nhập trước đó!`)
                }
                
            })
            if (!flag) {
                try {
                    axios.defaults.baseURL = 'http://localhost:8000/'
                    await axios.post('/v1/loaibanthang/add', {
                    TENBANTHANG: goalInput,
                  }).then(respond => {
                      goal.push(respond.data)
                      document.querySelector('.goal-input').value = ''
                      console.log(respond);
                  })
                setGoalInput('')
                notification(".notification-text-goal", '#4a934a', 'Thêm thành công!')
                } catch (error) {
                    console.log(error)
                }
            }
        }
    }

    function removeClass(selector) {
        document.querySelector('.input-goal-time').classList.remove('data-empty')
        document.querySelector(selector).style.display = 'none'
    }

    function notification(selector, color, innerText) {
        document.querySelector(selector).style.display = 'block'
        document.querySelector(selector).style.color = color
        document.querySelector(selector).innerText = innerText
    }

    function onDeleteItem(name, id) {
        setOpenConfirmDelete(true)
        setNameGoal(name)
        setIdGoal(id)
    }

    async function handleConfirmDelete(idOfGoal) {
        try {
            axios.defaults.baseURL = 'http://localhost:8000/'
            await axios.delete(`/v1/loaibanthang/delete/${idOfGoal}`).then(res => {
                setOpenConfirmDelete(false)
                console.log(res)
            })
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className="goal-main-container">
        <div className="left-column">
            <table>
                <tr>
                    <td>STT</td>
                    <th>Các loại bàn thắng</th>
                    <th></th>
                </tr>
                {
                    goal.length > 0 && goal.map((goalItem, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{goalItem.TEN}</td>
                                <button className='icon-delete'><FontAwesomeIcon icon={faXmark} onClick={() => onDeleteItem(goalItem.TENBANTHANG, goalItem._id)}/></button>
                            </tr>
                        )
                    })
                }
            </table>
            <ConfirmDelete openModal={openConfirmDelete} name={nameGoal} onClose={() => setOpenConfirmDelete(false)} onConfirm={() => handleConfirmDelete(idGoal)}/>
            <div className='goal-input-container'>
                <div className='notification-text-goal'></div>
                <input className='goal-input' type="text" onChange={(e) => {
                    setGoalInput(e.target.value)
                    removeClass('.notification-text-goal')
                }}/>
                <button className='add-button' onClick={handleClickGoal}>Thêm <FontAwesomeIcon icon={faPlus}/></button>
            </div>
        </div>

        <div className="right-column">
            <div className="time-input">
                <label htmlFor="time-input">Thời điểm ghi bàn tối đa</label>
                <input className='input-goal-time' value={goalTime} type="number" placeholder='Nhập thời gian'onChange={(e) => {
                    setGoalTime(e.target.value)
                    removeClass('.notification-text')
                }}/>
            </div>
            <div className='notification-text'></div>
            <button onClick={handleClickGoalTime}>Thay đổi</button>
        </div>
    </div>
  )
}

export default Goal