import React, { useEffect, useState } from 'react'
import './DetailAddResult.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faFloppyDisk, faTrashCan, faXmark } from '@fortawesome/free-solid-svg-icons'
import Header from '../Header_Manager/Header'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import ConfirmDeleteResult from './ConfirmDeleteResult/ConfirmDeleteResult'

function useForceUpdate() {
    let [value, setState] = useState(true);
    return () => setState(!value);
  }

let eventsInTranDauOffical = []
const DetailAddResult = () => {
    let [eventsInTranDau] = useState([])
    let [results, setResults] = useState([])
    let [players1, setPlayers1] = useState([])
    let [players2, setPlayers2] = useState([])
    let [the, setThe] = useState([])
    let [goal, setGoal] = useState([])
    let [selected, setSelected] = useState('')
    let [event, setEvent] = useState('')
    let [typeEvent, setTypeEvent] = useState([])
    let [result1, setResult1] = useState(0)
    let [result2, setResult2] = useState(0)
    let [nameClub1, setNameClub1] = useState('')
    let [nameClub2, setNameClub2] = useState('')
    let [logoClub1, setLogoClub1] = useState('')
    let [logoClub2, setLogoClub2] = useState('')
    let [theMatch, setTheMatch] = useState([])
    let [goalMatch, setGoalMatch] = useState([])
    let [check, setCheck] = useState(true)
    let [selectedPlayer, setSelectedPlayer] = useState('')
    let [eventTypeSelected, setEventTypeSelected] = useState('')
    let [timeChange, setTimeChange] = useState(0)
    let [openConfirmDelete, setOpenConfirmDelete] = useState(false)
    let forceUpdate = useForceUpdate();

    const params = useParams()
    const getResults = async () => {
        try {
            const res = await axios.get(`http://localhost:8000/v1/ct_trandau/get/${params.id}`)
            if (res.data.length === 0) {
                eventsInTranDau.length = 0
                eventsInTranDauOffical.length = 0

                const respondFixture = await axios.get(`http://localhost:8000/v1/trandau/getTranDauById/${params.id}`)
                setNameClub1(respondFixture.data[0].DOI1.TENCLB)
                setNameClub2(respondFixture.data[0].DOI2.TENCLB)
                setResults(respondFixture.data)
                results = respondFixture.data
                setCheck(false)
                check = false

                const resPlayer1 = await axios.get(`http://localhost:8000/v1/cauthu/searchByClub/${respondFixture.data[0].DOI1._id}`)
                const resPlayer2 = await axios.get(`http://localhost:8000/v1/cauthu/searchByClub/${respondFixture.data[0].DOI2._id}`)
                setPlayers1(resPlayer1.data)
                setPlayers2(resPlayer2.data)
                players1 = resPlayer1.data
                players2 = resPlayer2.data
            } else {
                setResults(res.data)
                results = res.data
                results.map(result => {
                    setResult1(result.SCORE_1)
                    setResult2(result.SCORE_2)
                    setNameClub1(result.MATD.DOI1.TENCLB)
                    setNameClub2(result.MATD.DOI2.TENCLB)
                    setLogoClub1(`http://localhost:8000/${result.MATD.DOI1.LOGO}`)
                    setLogoClub2(`http://localhost:8000/${result.MATD.DOI2.LOGO}`)
                })

                const resPlayer1 = await axios.get(`http://localhost:8000/v1/cauthu/searchByClub/${results[0].MATD.DOI1._id}`)
                const resPlayer2 = await axios.get(`http://localhost:8000/v1/cauthu/searchByClub/${results[0].MATD.DOI2._id}`)
                setPlayers1(resPlayer1.data)
                setPlayers2(resPlayer2.data)
                players1 = resPlayer1.data
                players2 = resPlayer2.data

                const resTheTranDau = await axios.get(`http://localhost:8000/v1/the/getTheByCT_TD/${results[0]._id}`)
                setTheMatch(resTheTranDau.data)
                theMatch = resTheTranDau.data
                theMatch.map(theMatchItem => {
                    let loaithe = theMatchItem.LOAITHE === 1 ? "vàng" : "đỏ"
                    let teamName = theMatchItem.MACLB === results[0].MATD.DOI1._id ? '1' : '2'
                    let theObject = {
                        idPerformer: theMatchItem.MACT._id,
                        type: `Thẻ ${loaithe}`,
                        performer: theMatchItem.MACT.HOTEN,
                        time: theMatchItem.PHUTNHANTHE,
                        team: teamName,
                        eventType: "Phạm lỗi",
                        idTeam: theMatchItem.MACLB
                    }
                    let founded = eventsInTranDau.some(the => {
                        return (
                            the.type === theObject.type && the.performer === theObject.performer && the.time === theObject.time && the.team === theObject.team
                        )
                    })
                    if (!founded) eventsInTranDau.push(theObject)
                })

                const resGoalMatch = await axios.get(`http://localhost:8000/v1/banthang/getBanThangByCT_TD/${results[0]._id}`)
                setGoalMatch(resGoalMatch.data)
                goalMatch = resGoalMatch.data
                goalMatch.map(goalMatchItem => {
                    let teamName = goalMatchItem.MACLB === results[0].MATD.DOI1._id ? '1' : '2'
                    let goalObject = {
                        idPerformer: goalMatchItem.MACT._id,
                        type: goalMatchItem.LOAIBANTHANG,
                        performer: goalMatchItem.MACT.HOTEN,
                        time: goalMatchItem.PHUTGHIBAN,
                        team: teamName,
                        eventType: "Ghi bàn",
                        idTeam: goalMatchItem.MACLB
                    }
                    let founded = eventsInTranDau.some(goal => {
                        return (
                            goal.type === goalObject.type && goal.performer === goalObject.performer && goal.time === goalObject.time && goal.team === goalObject.team
                        )
                    })
                    if (!founded) eventsInTranDau.push(goalObject)
                })
                eventsInTranDau.sort((a, b) => a.time - b.time)
                eventsInTranDauOffical = eventsInTranDau
            }

                const resThe = await axios.get(`http://localhost:8000/v1/loaithe/getloaithe`)
                setThe(resThe.data)
                the = resThe.data

                const resGoal = await axios.get(`http://localhost:8000/v1/loaibanthang/read`)
                setGoal(resGoal.data)
                goal = resGoal.data
        }
        catch (error) {
            console.log(error.message)
        }
    }
    useEffect(() => {
        getResults();
    }, [])

    let [club, setClub] = useState([])
    const handleChangeSelect = (event) => {
        let idTeam1 = results[0].MATD ? results[0].MATD.DOI1._id : results[0].DOI1._id
        let idTeam2 = results[0].MATD ? results[0].MATD.DOI2._id : results[0].DOI2._id
        setSelected(event.target.value)
        selected = event.target.value
        setSelected(event.target.value)
        if (selected.includes(idTeam1)) {
            setClub(players1)
        } else if (selected.includes(idTeam2)){
            setClub(players2)
        }
        removeClass()
    }

    const handleEventSelect = (e) => {
        setEvent(e.target.value)
        event = e.target.value
        if (event === '1') {
            setTypeEvent(goal)
            typeEvent = goal
        }
        else if (event === '2') {
            setTypeEvent(the)
            typeEvent = the
        }
        removeClass()
    }
    
    function handleAddButton() {
        let idTeam1 = results[0].MATD ? results[0].MATD.DOI1._id : results[0].DOI1._id
        if (selected === '' || np === '' || event === '' || eventTypeSelected === '' || timeChange <= 0) notification('.notification', '#ed4337', 'Vui lòng nhập đầy đủ thông tin!')
        else {

            let eventAdded = {
                idPerformer: selectedPlayer,
                type: eventTypeSelected,
                performer: np,
                time: timeChange,
                team: selected.includes(idTeam1) ? "1" : "2",
                eventType: event === '1' ? "Ghi bàn" : "Phạm lỗi",
                idTeam: selected
            }

            if (eventAdded.eventType === "Ghi bàn" && eventAdded.team === "1") {
                let a = result1 + 1
                setResult1(a)
            } else if (eventAdded.eventType === "Ghi bàn" && eventAdded.team === "2") {
                let b = result2 + 1
                setResult2(b)
            }
            eventsInTranDauOffical.push(eventAdded)
            eventsInTranDauOffical.sort((a, b) => a.time - b.time)
            forceUpdate()
        }
    }

    function notification(selector, color, innerText) {
        document.querySelector(selector).style.display = 'block'
        document.querySelector(selector).style.color = color
        document.querySelector(selector).innerText = innerText
    }

    function removeClass() {
        document.querySelector('.notification').style.display = 'none'

    }

    useEffect(() => {
        const unloadCallback = (event) => {
          event.preventDefault();
          event.returnValue = "";
          return "";
        };
    
        window.addEventListener("beforeunload", unloadCallback);
        return () => window.removeEventListener("beforeunload", unloadCallback);
    }, []);

    function handleSaveButton() {
        let amountOfError1 = 0
        let amountOfError2 = 0
        eventsInTranDauOffical.forEach(e => {
            if (e.team === "1" && e.eventType.includes("Phạm lỗi"))  amountOfError1++
            else if (e.team === "2" && e.eventType.includes("Phạm lỗi"))  amountOfError2++
        })

        try {
            axios.defaults.baseURL = 'http://localhost:8000/'
            axios.post(`/v1/ct_trandau/create`, {
                MATD: params.id,
                SCORE_1: result1,
                SCORE_2: result2,
                CARD_1: amountOfError1,
                CARD_2: amountOfError2
            }).then(res => {
                if (res) {
                    console.log("Post chi tiet tran dau thanh cong")

                    eventsInTranDauOffical.forEach(e => {
                        if (e.eventType === "Phạm lỗi") {
                            try {
                                axios.defaults.baseURL = 'http://localhost:8000/'
                                axios.post(`/v1/the/create`, {
                                    MACT: e.idPerformer,
                                    MACLB: e.idTeam,
                                    MACT_TD: res.data._id,
                                    PHUTNHANTHE: e.time,
                                    LOAITHE: e.type === "Thẻ vàng" ? 1 : 2
                                }).then((res) => {
                                    if (res) console.log("Post thanh cong the")
                                    if (e.type === "Thẻ vàng") {
                                        try {
                                            axios.patch(`http://localhost:8000/v1/cauthu/updateTheVangCauThu/${e.idPerformer}`)
                                            .then(res => {
                                                if (res) console.log("Cap nhat the vang cho cau thu thanh cong")
                                            })
                                        } catch (error) {
                                            console.log(error)
                                        }
                                    } else {
                                        try {
                                            axios.patch(`http://localhost:8000/v1/cauthu/updateTheDoCauThu/${e.idPerformer}`)
                                            .then(res => {
                                                if (res) console.log("Cap nhat the do cho cau thu thanh cong")
                                            })
                                        } catch (error) {
                                            console.log(error)
                                        }
                                    }
                                })
                            } catch (error) {
                                console.log(error);
                            }
                        } else {
                            try {
                                axios.defaults.baseURL = 'http://localhost:8000/'
                                axios.post(`/v1/banthang/taobanthang`, {
                                    MACT: e.idPerformer,
                                    MACLB: e.idTeam,
                                    MACT_TD: res.data._id,
                                    PHUTGHIBAN: e.time,
                                    LOAIBANTHANG: e.type
                                }).then(res => {
                                    if (res) console.log("Post thanh cong ban thang")
                                    try {
                                        axios.patch(`http://localhost:8000/v1/cauthu/updateBanThangCauThu/${e.idPerformer}`)
                                        .then(res => {
                                            if (res) console.log("Cap nhat ban thang cho cau thu thanh cong")
                                        })
                                    } catch (error) {
                                        console.log(error)
                                    }
                                })
                            } catch (error) {
                                console.log(error);
                            }
                        }
                    })
                }
            })
        } catch (error) {
            console.log(error);
        }
    }

    function handleDeleteButton() {
        // console.log(np)
        eventsInTranDauOffical.forEach(e => {
            console.log(e)
        })
        // console.log(selectedPlayer)
    }

    function handleClickDelete(event) {
        // alert(`Cau thu ${event.performer} da thuc hien su kien ${event.eventType} vao thoi diem ${event.time}'`)
        // console.log(event)
        setOpenConfirmDelete(true)
    }

    function renderTimeLine() {
        return (
        <div className="timeline">
            <div className="vertical-ruler"></div>
            {
                eventsInTranDauOffical.map((event, index) => {
                    const team = event.team === '1' ? 'left' : 'right'
                    const color = event.eventType === "Ghi bàn" ? "#44b454" : event.type === "Thẻ vàng" ? "#fbd000" : "#b44444"
                    
                    return (
                        <div key={index} className={"timeline-container " + team}>
                            <div className="timeline-circle" style={{backgroundColor: color}}></div>
                            <div className="timeline-content">
                                <FontAwesomeIcon icon={faXmark} className='icon-delete' onClick={() => handleClickDelete(event)}/>
                                <div className={"arrow-"+team}></div>
                                <p style={{color: "grey"}}>{event.time+'\''}</p>
                                <p style={{fontWeight: "500"}}>{event.performer}</p>
                                <p style={{color: color, fontWeight: "bold"}}>{event.type}</p>
                            </div>
                            <ConfirmDeleteResult openModal={openConfirmDelete} onClose={() => setOpenConfirmDelete(false)} onConfirm={() => handleConfirmDelete(index)}/>
                        </div>
                    )
                })
            }
        </div>)
    }

    let [np, setNp] = useState('')
    function handleOnChangeCauThu(event) {
        removeClass()

        setSelectedPlayer(event.target.value)
        var index = event.nativeEvent.target.selectedIndex;
        np = event.nativeEvent.target[index].text
        setNp(event.nativeEvent.target[index].text)
    }

    function handleConfirmDelete(index) {
        console.log(index)
        eventsInTranDauOffical.splice(index, 1)
        console.log(eventsInTranDauOffical)
        setOpenConfirmDelete(false)
    }
    
  return (
    <>
        <Header/>
        <div className='detail-add-result-main-wrapper'>
        <div className="detail-add-result-header">GHI NHẬN KẾT QUẢ</div>
        <div className="detail-add-result-content">

        <div className="information-input-wrapper">
                <div className="club-input-wrapper">
                    <label htmlFor="club-input">Câu lạc bộ</label>
                    <select onChange={handleChangeSelect} name="club-input" id="club-input" style={{width: '10vw', height: '3.5vh'}}>
                        <option value="0" default hidden>Chọn câu lạc bộ</option>
                        {
                            check ? results.map((result) => (
                                <>
                                    <option value={result.MATD.DOI1._id}>{result.MATD.DOI1.TENCLB}</option>
                                    <option value={result.MATD.DOI2._id}>{result.MATD.DOI2.TENCLB}</option>
                                </>
                            )) : results.map(result => (
                                <>
                                    <option value={result.DOI1._id}>{result.DOI1.TENCLB}</option>
                                    <option value={result.DOI2._id}>{result.DOI2.TENCLB}</option>
                                </>
                            ))
                        } 
                    </select>
                </div>

                <div className="player-input-wrapper">
                    <label htmlFor="player-input">Cầu thủ</label>
                    <select onChange={(e) => {
                        handleOnChangeCauThu(e)
                    }} name="player-input" id="player-input" style={{width: '10vw', height: '3.5vh'}}>
                        <option default hidden>Chọn cầu thủ</option>
                        {
                            club.map((clubItem, index) => (
                                <option key={index} value={clubItem._id}>{clubItem.HOTEN}</option>
                            ))
                        }
                    </select>
                </div>

                <div className="event-input-wrapper">
                    <label htmlFor="event-input">Sự kiện</label>
                    <select onChange={handleEventSelect} name="event-input" id="event-input" style={{width: '10vw', height: '3.5vh'}}>
                        <option value="0" default hidden>Chọn sự kiện</option>
                        <option value="1">Ghi bàn</option>
                        <option value="2">Phạm lỗi</option>
                    </select>
                </div>

                <div className="time-input-wrapper">
                    <label htmlFor="time-input">Thời gian</label>
                    <input onChange={(e) => {
                        setTimeChange(e.target.value)
                        removeClass()
                    }} className='input_time' type="number" name='time-input' id='time-input' placeholder='Nhập thời gian' style={{width: '10vw', height: '3.5vh'}}/>
                </div>

                <div className="type-input-wrapper">
                    <label htmlFor="type-input">Loại</label>
                    <select onChange={(e) => {
                        setEventTypeSelected(e.target.value)
                        removeClass()
                    }} name="type-input" id="type-input" style={{width: '10vw', height: '3.5vh'}}>
                        <option value="0" default hidden>Mặc định</option>
                        {
                            typeEvent.map((type, index) => (
                                <option key={index} value={type.TEN}>{type.TEN}</option>
                            ))
                        }
                    </select>
                </div>
            <div className='notification'></div>

            </div>

            <div className="btn-wrapper">
                <button className='btn-delete-result' onClick={handleDeleteButton}>Xoá <FontAwesomeIcon icon={faTrashCan} /></button>
                <button className='btn-add-result' onClick={handleAddButton}>Thêm <FontAwesomeIcon icon={faPlus}/></button>
                <button className='btn-save-result' onClick={handleSaveButton}>Lưu <FontAwesomeIcon icon={faFloppyDisk}/></button>
            </div>

            <div className="detail-add-result-content-wrapper">
                <div className="team-1">
                    <img className="club-logo club-logo-1" src={logoClub1} alt={`${nameClub1} Logo`} name="logo-1" style={{width: '5vw', height: '5vw'}}/>
                    <label htmlFor="logo-1" id="logo-1">{nameClub1}</label>
                </div>

                <div className="match-result">{result1} - {result2}</div>

                <div className="team-2">
                    <img className="club-logo club-logo-2" src={logoClub2} alt={`${nameClub2} Logo`} name="logo-2" style={{width: '5vw', height: '5vw'}}/>
                    <label htmlFor="logo-2" id="logo-2">{nameClub2}</label>
                </div>
            </div>

            {renderTimeLine()}
            </div>
    </div>
    </>
  )
}

export default DetailAddResult