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
    let [indexItemTimeline, setIndexItemTimeline] = useState(0)
    let [idItemTimeline, setIdItemTimeline] = useState("")
    let [amountERR1, setAmountERR1] = useState(0)
    let [amountERR2, setAmountERR2] = useState(0)
    let forceUpdate = useForceUpdate();
    let [hsThang, setHsThang] = useState(0)
    let [hsThua, setHsThua] = useState(0)
    let [hsHoa, setHsHoa] = useState(0)
    let [maxGhiBan, setMaxGhiBan] = useState(0)
    let [id1, setID1] = useState("")
    let [id2, setID2] = useState("")
    let [bxh1, setBXH1] = useState([])
    let [bxh2, setBXH2] = useState([])
    let [dadau, setdadau] = useState(false)

    const params = useParams()

    const getThamSo = async () => {
        try {
            axios.get(`http://localhost:8000/v1/thamso/getlist/${params.muagiaiID}`).then(res => {
                res.data.forEach(ts => {
                    if (ts.TENTHAMSO === "Hieu so tran thang") setHsThang(ts.GIATRITHAMSO)
                    if (ts.TENTHAMSO === "Hieu so tran hoa") setHsHoa(ts.GIATRITHAMSO)
                    if (ts.TENTHAMSO === "Hieu so tran thua") setHsThua(ts.GIATRITHAMSO)
                    if (ts.TENTHAMSO === "Thoi diem ghi ban toi da") setMaxGhiBan(ts.GIATRITHAMSO)
                })
            })

        } catch (error) {
            console.log(error)
        }
    }

    const getBXH = async () => {
        try {
            await axios.get(`http://localhost:8000/v1/bangxephang/read/${id1}/${params.muagiaiID}`).then(res => setBXH1(res.data))
            await axios.get(`http://localhost:8000/v1/bangxephang/read/${id2}/${params.muagiaiID}`).then(res => setBXH2(res.data))
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getBXH()
    }, [id1])

    console.log({ bxh1 })

    const getResults = async () => {
        try {
            const res = await axios.get(`http://localhost:8000/v1/ct_trandau/get/${params.idResult}`)
            if (res.data.length === 0) {
                eventsInTranDau.length = 0
                eventsInTranDauOffical.length = 0

                const respondFixture = await axios.get(`http://localhost:8000/v1/trandau/getTranDauById/${params.idResult}`)
                setNameClub1(respondFixture.data[0].DOI1.TENCLB)
                setNameClub2(respondFixture.data[0].DOI2.TENCLB)
                setLogoClub1(`http://localhost:8000/${respondFixture.data[0].DOI1.LOGO}`)
                setLogoClub2(`http://localhost:8000/${respondFixture.data[0].DOI2.LOGO}`)
                setID1(respondFixture.data[0].DOI1._id)
                setID2(respondFixture.data[0].DOI2._id)
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
                console.log(results[0])
                results.map(result => {
                    setResult1(result.SCORE_1)
                    setResult2(result.SCORE_2)
                    setNameClub1(result.MATD.DOI1.TENCLB)
                    setNameClub2(result.MATD.DOI2.TENCLB)
                    setLogoClub1(`http://localhost:8000/${result.MATD.DOI1.LOGO}`)
                    setLogoClub2(`http://localhost:8000/${result.MATD.DOI2.LOGO}`)
                    setID1(result.MATD.DOI1._id)
                    setID2(result.MATD.DOI2._id)
                })
                setdadau(true)

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
                        idSuKien: theMatchItem._id,
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
                        idSuKien: goalMatchItem._id,
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
        getThamSo()

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
        } else if (selected.includes(idTeam2)) {
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
        if (dadau === true) {
            return null
        } else {
            let idTeam1 = results[0].MATD ? results[0].MATD.DOI1._id : results[0].DOI1._id
            if (selected === '' || np === '' || event === '' || eventTypeSelected === '' || timeChange <= 0) notification('.notification', '#ed4337', 'Vui lòng nhập đúng và đầy đủ thông tin!')
            else if (timeChange > maxGhiBan) notification('.notification', '#ed4337', 'Thời gian ghi bàn tối đa ' + maxGhiBan)
            else {

                let eventAdded = {
                    idSuKien: "",
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
        if (dadau === true) {
            return null
        } else {

            let amountOfError1 = 0
            let amountOfError2 = 0
            eventsInTranDauOffical.forEach(e => {
                if (e.team === "1" && e.eventType.includes("Phạm lỗi")) amountOfError1++
                else if (e.team === "2" && e.eventType.includes("Phạm lỗi")) amountOfError2++
            })

            setAmountERR1(amountOfError1)
            setAmountERR2(amountOfError2)

            if (result1 > result2) {
                axios.defaults.baseURL = 'http://localhost:8000/'
                axios.patch(`/v1/bangxephang/update/${id1}`, {
                    TRANDACHOI: bxh1[0].TRANDACHOI + 1,
                    BANTHANG: bxh1[0].BANTHANG + result1,
                    BANTHUA: bxh1[0].BANTHANG + result2,
                    THANG: bxh1[0].THANG + 1,
                    HIEUSO: (bxh1[0].BANTHANG + result1) - (bxh1[0].BANTHANG + result2),
                    DIEM: bxh1[0].DIEM + hsThang
                }).then(d1 => console.log({ d1 }))

                axios.defaults.baseURL = 'http://localhost:8000/'
                axios.patch(`/v1/bangxephang/update/${id2}`, {
                    TRANDACHOI: bxh2[0].TRANDACHOI + 1,
                    BANTHANG: bxh2[0].BANTHANG + result2,
                    BANTHUA: bxh2[0].BANTHANG + result1,
                    THUA: bxh2[0].THUA + 1,
                    HIEUSO: (bxh2[0].BANTHANG + result2) - (bxh2[0].BANTHANG + result1),
                    DIEM: bxh2[0].DIEM + hsThua
                }).then(d1 => console.log({ d1 }))
            } else if (result1 === result2) {
                axios.defaults.baseURL = 'http://localhost:8000/'
                axios.patch(`/v1/bangxephang/update/${id1}`, {
                    TRANDACHOI: bxh1[0].TRANDACHOI + 1,
                    BANTHANG: bxh1[0].BANTHANG + result1,
                    BANTHUA: bxh1[0].BANTHANG + result2,
                    HOA: bxh1[0].HOA + 1,
                    HIEUSO: (bxh1[0].BANTHANG + result1) - (bxh1[0].BANTHANG + result2),
                    DIEM: bxh1[0].DIEM + hsHoa
                }).then(d1 => console.log({ d1 }))

                axios.defaults.baseURL = 'http://localhost:8000/'
                axios.patch(`/v1/bangxephang/update/${id2}`, {
                    TRANDACHOI: bxh2[0].TRANDACHOI + 1,
                    BANTHANG: bxh2[0].BANTHANG + result2,
                    BANTHUA: bxh2[0].BANTHANG + result1,
                    HOA: bxh2[0].HOA + 1,
                    HIEUSO: (bxh2[0].BANTHANG + result2) - (bxh2[0].BANTHANG + result1),
                    DIEM: bxh2[0].DIEM + hsHoa
                }).then(d1 => console.log({ d1 }))
            } else {
                axios.defaults.baseURL = 'http://localhost:8000/'
                axios.patch(`/v1/bangxephang/update/${id1}`, {
                    TRANDACHOI: bxh1[0].TRANDACHOI + 1,
                    BANTHANG: bxh1[0].BANTHANG + result1,
                    BANTHUA: bxh1[0].BANTHANG + result2,
                    THUA: bxh1[0].THUA + 1,
                    HIEUSO: (bxh1[0].BANTHANG + result1) - (bxh1[0].BANTHANG + result2),
                    DIEM: bxh1[0].DIEM + hsThua
                }).then(d1 => console.log({ d1 }))

                axios.defaults.baseURL = 'http://localhost:8000/'
                axios.patch(`/v1/bangxephang/update/${id2}`, {
                    TRANDACHOI: bxh2[0].TRANDACHOI + 1,
                    BANTHANG: bxh2[0].BANTHANG + result2,
                    BANTHUA: bxh2[0].BANTHANG + result1,
                    THANG: bxh2[0].THUA + 1,
                    HIEUSO: (bxh2[0].BANTHANG + result2) - (bxh2[0].BANTHANG + result1),
                    DIEM: bxh2[0].DIEM + hsThang
                }).then(d1 => console.log({ d1 }))
            }

            try {
                axios.defaults.baseURL = 'http://localhost:8000/'
                axios.post(`/v1/ct_trandau/create`, {
                    MATD: params.idResult,
                    SCORE_1: result1,
                    SCORE_2: result2,
                    CARD_1: amountOfError1,
                    CARD_2: amountOfError2
                }).then(res => {
                    if (res) {
                        console.log("Post chi tiet tran dau thanh cong")

                        axios.defaults.baseURL = 'http://localhost:8000/'
                        axios.patch(`/v1/trandau/updateTranDau/${params.idResult}`, { DADAU: true })

                        eventsInTranDauOffical.forEach(e => {
                            if (e.eventType === "Phạm lỗi" && e.idSuKien === "") {
                                try {
                                    axios.defaults.baseURL = 'http://localhost:8000/'
                                    axios.post(`/v1/the/create`, {
                                        MACT: e.idPerformer,
                                        MACLB: e.idTeam,
                                        MACT_TD: res.data._id,
                                        PHUTNHANTHE: e.time,
                                        LOAITHE: e.type === "Thẻ vàng" ? 1 : 2
                                    }).then((res) => {
                                        if (res) {
                                            e.idSuKien = res.data._id;
                                            console.log("Post thanh cong the")
                                        }
                                        if (e.type === "Thẻ vàng") {
                                            try {
                                                axios.patch(`http://localhost:8000/v1/cauthu/updateTheVangCauThu/${e.idPerformer}`)
                                                    .then(res => {
                                                        if (res) {
                                                            console.log("Cap nhat the vang cho cau thu thanh cong")
                                                        }
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
                            } else if (e.eventType === "Ghi bàn" && e.idSuKien === "") {
                                try {
                                    axios.defaults.baseURL = 'http://localhost:8000/'
                                    axios.post(`/v1/banthang/taobanthang`, {
                                        MACT: e.idPerformer,
                                        MACLB: e.idTeam,
                                        MACT_TD: res.data._id,
                                        PHUTGHIBAN: e.time,
                                        LOAIBANTHANG: e.type
                                    }).then(res => {
                                        if (res) {
                                            e.idSuKien = res.data._id;
                                            console.log("Post thanh cong ban thang")
                                        }
                                        try {
                                            axios.patch(`http://localhost:8000/v1/cauthu/updateBanThangCauThu/${e.idPerformer}`)
                                                .then(res => {
                                                    if (res) console.log("Cap nhat ban thang cho cau thu thanh cong")
                                                })
                                        } catch (error) {
                                            console.log(error)
                                        }

                                        axios.defaults.baseURL = 'http://localhost:8000/'

                                    })


                                } catch (error) {
                                    console.log(error);
                                }
                            }
                        })
                    }
                })
                notification('.notification', '#44b454', 'Lưu thông tin thành công!')
            } catch (error) {
                console.log(error);
            }
        }
    }

    function handleClickDelete(event, index) {
        setIdItemTimeline(event.idSuKien)
        setOpenConfirmDelete(true)
        setIndexItemTimeline(index)
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
                            <>
                                <div key={index} className={"timeline-container " + team}>
                                    <div className="timeline-circle" style={{ backgroundColor: color }}></div>
                                    <div className="timeline-content">
                                        <FontAwesomeIcon icon={faXmark} className='icon-delete' onClick={() => handleClickDelete(event, index)} />
                                        <div className={"arrow-" + team}></div>
                                        <p style={{ color: "grey" }}>{event.time + '\''}</p>
                                        <p style={{ fontWeight: "500" }}>{event.performer}</p>
                                        <p style={{ color: color, fontWeight: "bold" }}>{event.type}</p>
                                    </div>
                                </div>
                                <ConfirmDeleteResult openModal={openConfirmDelete} onClose={() => setOpenConfirmDelete(false)} onConfirm={() => handleConfirmDelete()} />
                            </>
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

    function handleConfirmDelete() {
        if (idItemTimeline === "") {
            if (eventsInTranDauOffical[indexItemTimeline].eventType === "Ghi bàn" && eventsInTranDauOffical[indexItemTimeline].team === "1") {
                let newResult = result1 - 1;
                setResult1(newResult)
            }
            else if (eventsInTranDauOffical[indexItemTimeline].eventType === "Ghi bàn" && eventsInTranDauOffical[indexItemTimeline].team === "2") {
                let newResult = result2 - 1;
                setResult2(newResult)
            }
            eventsInTranDauOffical.splice(indexItemTimeline, 1)
        } else {
            if (eventsInTranDauOffical[indexItemTimeline].eventType === "Ghi bàn") {
                axios.defaults.baseURL = 'http://localhost:8000/'
                axios.patch(`/v1/cauthu/decreaseBanThangCauThu/${eventsInTranDauOffical[indexItemTimeline].idPerformer}`).then(res => {
                    console.log(`Giam so ban thang cua cau thu ${eventsInTranDauOffical[indexItemTimeline].idPerformer} thanh cong`)
                })
                axios.delete(`/v1/banthang/deletebanthang/${idItemTimeline}`).then(res => {
                    if (res) {
                        console.log(`Xoa ban thang ${idItemTimeline}  thanh cong`)
                        if (eventsInTranDauOffical[indexItemTimeline].team === "1") {
                            let a = result1--;
                            setResult1(a - 1)

                            axios.patch(`/v1/ct_trandau/update/${results[0]._id}`, { SCORE_1: a - 1 })
                                .then(res => {
                                    if (res) console.log(`Cap nhat SCORE_1 cua chi tiet tran dau ${results[0]._id} thanh cong`)
                                })
                        }
                        else {
                            let a = result2--;
                            setResult2(a - 1)

                            axios.patch(`/v1/ct_trandau/update/${results[0]._id}`, { SCORE_2: a - 1 })
                                .then(res => {
                                    if (res) console.log(`Cap nhat SCORE_2 cua chi tiet tran dau ${results[0]._id} thanh cong`)
                                })
                        }
                    }
                    eventsInTranDauOffical.splice(indexItemTimeline, 1)
                    forceUpdate()
                })
            } else if (eventsInTranDauOffical[indexItemTimeline].eventType === "Phạm lỗi") {
                axios.defaults.baseURL = 'http://localhost:8000/'
                if (eventsInTranDauOffical[indexItemTimeline].type === "Thẻ vàng") {
                    axios.patch(`/v1/cauthu/decreaseTheVangCauThu/${eventsInTranDauOffical[indexItemTimeline].idPerformer}`).then(res => {
                        console.log(`Giam so the vang cua cau thu ${eventsInTranDauOffical[indexItemTimeline].idPerformer} thanh cong`)
                    })
                } else if (eventsInTranDauOffical[indexItemTimeline].type === "Thẻ vàng") {
                    axios.patch(`/v1/cauthu/decreaseTheVangCauThu/${eventsInTranDauOffical[indexItemTimeline].idPerformer}`).then(res => {
                        console.log(`Giam so the vang cua cau thu ${eventsInTranDauOffical[indexItemTimeline].idPerformer} thanh cong`)
                    })
                }
                axios.delete(`/v1/the/delete/${idItemTimeline}`).then(res => {
                    if (res) {
                        if (eventsInTranDauOffical[indexItemTimeline].team === "1") {
                            axios.patch(`/v1/ct_trandau/update/${results[0]._id}`, { CARD_1: amountERR1 })
                                .then(res => {
                                    if (res) console.log(`Cap nhat CARD_1 cua chi tiet tran dau ${results[0]._id} thanh cong`)
                                })
                        }
                        else {
                            axios.patch(`/v1/ct_trandau/update/${results[0]._id}`, { CARD_2: amountERR2 })
                                .then(res => {
                                    if (res) console.log(`Cap nhat CARD_2 cua chi tiet tran dau ${results[0]._id} thanh cong`)
                                })
                        }
                    }

                    eventsInTranDauOffical.splice(indexItemTimeline, 1)
                    forceUpdate()
                })
            }
        }
        setOpenConfirmDelete(false)
    }
    return (
        <>
            <Header />
            <div className='detail-add-result-main-wrapper'>
                <div className="detail-add-result-header">GHI NHẬN KẾT QUẢ</div>
                <div className="detail-add-result-content">

                    <div className="information-input-wrapper">
                        <div className="club-input-wrapper">
                            <label htmlFor="club-input">Câu lạc bộ</label>
                            <select onChange={handleChangeSelect} name="club-input" id="club-input" style={{ width: '10vw', height: '3.5vh' }}>
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
                                // getBXH()
                            }} name="player-input" id="player-input" style={{ width: '10vw', height: '3.5vh' }}>
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
                            <select onChange={handleEventSelect} name="event-input" id="event-input" style={{ width: '10vw', height: '3.5vh' }}>
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
                            }} className='input_time' type="number" name='time-input' id='time-input' placeholder='Nhập thời gian' style={{ width: '10vw', height: '3.5vh' }} />
                        </div>

                        <div className="type-input-wrapper">
                            <label htmlFor="type-input">Loại</label>
                            <select onChange={(e) => {
                                setEventTypeSelected(e.target.value)
                                removeClass()
                            }} name="type-input" id="type-input" style={{ width: '10vw', height: '3.5vh' }}>
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

                    {
                        dadau === false ? (
                            <div className="btn-wrapper">
                                <button className='btn-add-result' onClick={handleAddButton}>Thêm <FontAwesomeIcon icon={faPlus} /></button>
                                <button className='btn-save-result' onClick={handleSaveButton}>Lưu <FontAwesomeIcon icon={faFloppyDisk} /></button>
                            </div>
                        ) : (
                            <div className="btn-wrapper">
                                <button className='btn-add-result' style={{ cursor: "not-allowed" }} onClick={handleAddButton}>Thêm <FontAwesomeIcon icon={faPlus} /></button>
                                <button className='btn-save-result' style={{ cursor: "not-allowed" }} onClick={handleSaveButton}>Lưu <FontAwesomeIcon icon={faFloppyDisk} /></button>
                            </div>
                        )
                    }

                    <div className="detail-add-result-content-wrapper">
                        <div className="team-1">
                            <img className="club-logo club-logo-1" src={logoClub1} alt={`${nameClub1} Logo`} name="logo-1" style={{ width: '5vw', height: '5vw' }} />
                            <label htmlFor="logo-1" id="logo-1">{nameClub1}</label>
                        </div>

                        <div className="match-result">{result1} - {result2}</div>

                        <div className="team-2">
                            <img className="club-logo club-logo-2" src={logoClub2} alt={`${nameClub2} Logo`} name="logo-2" style={{ width: '5vw', height: '5vw' }} />
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