import React, { useState } from 'react'
import './superSearch.css'
import { FcSearch } from 'react-icons/fc'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import ModalCT from '../../Pages/Organizer/components/modalCT'
import ModalUpdateCLB from '../../Pages/Manager/components/ModalUpdateCLB'
import ModalUpdateHLV from '../../Pages/Manager/components/ModalUpdateHLV'
import ModalUpdateCT from '../../Pages/Manager/components/ModalUpdateCT'


const Index = () => {

    const muagiaiID = useParams()
    const [cauthu, setCauThu] = useState([])
    const [huanluyenvien, setHuanLuyenVien] = useState([])
    const [doibong, setDoiBong] = useState([])
    const [query, setQuery] = useState('')
    const [selected, setSelected] = useState('')
    const [loaihlv, setLoaiHLV] = useState()
    const [vitrict, setViTriCT] = useState()
    const [cauthutoithieu, setThamSoCauThuToiThieu] = useState()
    const [ctchitiet, setCTchitiet] = useState(null)
    const [ctchitietmodal, setCTchitietModal] = useState(false)
    const [hlvchitiet, setHLVchitiet] = useState(null)
    const [hlvchitietmodal, setHLVchitietModal] = useState(false)
    const [clbchitiet, setCLBchitiet] = useState(null)
    const [clbchitietmodal, setCLBchitietModal] = useState(false)

    const getCT = async (payload) => {

        try {
            const res = await axios.get('http://localhost:8000/v1/cauthu/searchbyMG/' + payload)
            setCauThu(res.data)
        }
        catch (error) {
            console.log(error.message)
        }
    }
    const getHLV = async (payload) => {

        try {
            const res = await axios.get('http://localhost:8000/v1/huanluyenvien/searchbyMG/' + payload)
            setHuanLuyenVien(res.data)
        }
        catch (error) {
            console.log(error.message)
        }
    }

    const getDB = async (payload) => {

        try {
            const res = await axios.get('http://localhost:8000/v1/caulacbo/searchbyMG/' + payload)
            setDoiBong(res.data)
        }
        catch (error) {
            console.log(error.message)
        }
    }


    let [caulacbos, setCauLacBo] = useState([])
    const getCLB = async () => {
        try {
            const res = await axios.get('http://localhost:8000/v1/caulacbo/getcaulacbo1')
            setCauLacBo(res.data)
            caulacbos = res.data;
        }
        catch (error) {
            console.log(error.message)
        }
    }
    useEffect(() => {
        getCT(muagiaiID.muagiaiID)
        getHLV(muagiaiID.muagiaiID)
        getDB(muagiaiID.muagiaiID)
        getCLB()
        axios.get('http://localhost:8000/v1/thamso/getlist/' + muagiaiID.muagiaiID).then(res => {
            res.data.map((value) => {
                if (value.TENTHAMSO === 'So cau thu toi thieu')
                    setThamSoCauThuToiThieu(value.GIATRITHAMSO)
            })
        })
    }, [])

    let [nameclub,] = useState()
    let [clubid,] = useState()
    const find = (e) => {
        for (let i = 0; i < caulacbos.length; i++) {
            if (e === caulacbos[i]._id) { nameclub = caulacbos[i].TENCLB; clubid = caulacbos[i] }
        }
    }

    const renderCT = () => {
        return (
            <table>
                <thead>
                    <tr className='tilte'>
                        <th>C???u th???</th>
                        <th>C??u l???c b???</th>
                        <th>Lo???i c???u th???</th>
                        <th>S??? b??n th???ng</th>
                        <th>S??? th??? v??ng</th>
                        <th>S??? th??? ?????</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cauthu.filter((cauthu) => query !== '' ?
                            cauthu.HOTEN.toLowerCase().includes(query)
                            || cauthu.VITRI.toLowerCase().includes(query)
                            : cauthu).sort((a, b) => a._id > b._id ? -1 : 1)
                            .map(cauthu => {
                                const img_url = 'http://localhost:8000/' + cauthu.AVATAR
                                return (
                                    <tr className='cauthu_infor' key={cauthu._id}
                                        onClick={() => showCTModal(cauthu)}>
                                        {find(cauthu.MACLB)}
                                        <td className='name'>
                                            <img src={img_url} alt={cauthu.HOTEN} className='avatarCT' />

                                            {cauthu.HOTEN}
                                        </td>
                                        <td className="club">{nameclub}</td>
                                        <td className="position">{cauthu.VITRI}</td>
                                        <td className="sbt">{cauthu.SOBANTHANG}</td>
                                        <td className="stv">{cauthu.SOTHEVANG}</td>
                                        <td className="std">{cauthu.SOTHEDO}</td>
                                    </tr>
                                )
                            })
                    }
                </tbody>
            </table>
        )
    }

    const renderHLV = () => {
        return (
            <table>
                <thead>
                    <tr className='tilte'>
                        <th style={{ textAlign: "left", paddingLeft: '3vw' }}>Hu???n luy???n vi??n</th>
                        <th>C??u l???c b???</th>
                        <th>Lo???i</th>
                        <th>Qu???c t???ch</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        huanluyenvien.filter((huanluyenvien) => query !== '' ?
                            huanluyenvien.HOTEN.toLowerCase().includes(query)
                            || huanluyenvien.LOAI.toLowerCase().includes(query)
                            : huanluyenvien).sort((a, b) => a._id > b._id ? -1 : 1)
                            .map(huanluyenvien => {
                                const img_url = 'http://localhost:8000/' + huanluyenvien.AVATAR
                                return (
                                    <tr className='cauthu_infor'
                                        key={huanluyenvien._id}
                                        onClick={() => showHLVModal(huanluyenvien)}>
                                        {find(huanluyenvien.MACLB)}
                                        <td className='name'>
                                            <img src={img_url} alt={huanluyenvien.HOTEN} className='avatarCT' />

                                            {huanluyenvien.HOTEN}
                                        </td>
                                        <td className="club">{nameclub}</td>
                                        <td className="position">{huanluyenvien.LOAI}</td>
                                        <td className="sbt">{huanluyenvien.QUOCTICH}</td>
                                    </tr>
                                )
                            })
                    }
                </tbody>
            </table>
        )
    }

    const renderCLB = () => {
        return (
            <table>
                <thead>
                    <tr className='tilte'>
                        <th style={{ textAlign: "left", paddingLeft: '4vw' }}>C??u l???c b???</th>
                        <th>N??m th??nh l???p</th>
                        <th>S??n v???n ?????ng</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        doibong.filter((doibong) => query !== '' ?
                            doibong.TENCLB.toLowerCase().includes(query)
                            || doibong.SANVANDONG.toLowerCase().includes(query)
                            : doibong).sort((a, b) => a._id > b._id ? -1 : 1)
                            .map(doibong => {
                                const img_url = 'http://localhost:8000/' + doibong.LOGO
                                return (
                                    <tr className='cauthu_infor'
                                        key={doibong._id}
                                        onClick={() => showCLBModal(doibong)}>
                                        <td className='clb'>
                                            <img src={img_url} alt={doibong.TENCLB} className='avatarCT' />

                                            {doibong.TENCLB}
                                        </td>
                                        <td className="club">{doibong.NAMTHANHLAP}</td>
                                        <td className="position">{doibong.SANVANDONG}</td>
                                    </tr>
                                )
                            })
                    }
                </tbody>
            </table>
        )
    }

    const showCTModal = (cauthu) => {
        setCTchitiet(cauthu);
        setCTchitietModal(true);
    };

    const handleCloseCTModal = () => {
        setCTchitietModal(false);
    };
    const showHLVModal = (huanluyenvien) => {
        setHLVchitiet(huanluyenvien);
        setHLVchitietModal(true);
    };

    const handleCloseHLVModal = () => {
        setHLVchitietModal(false);
    };
    const showCLBModal = (doibong) => {
        setCLBchitiet(doibong);
        setCLBchitietModal(true);
    };

    const handleCloseCLBModal = () => {
        setCLBchitietModal(false);
    };

    const handleEditClbModal = async () => {
        if (document.getElementById('nameclb').value === ''
            || document.getElementById('yearclb').value === ''
            || document.getElementById('stadiumclb').value === '') {
            alert('Vui l??ng nh???p th??ng tin ch???nh s???a')
            return
        }
        const answer = window.confirm("B???n c?? ch???c ch???n s???a",);
        if (answer) {
            try {
                await axios.patch('http://localhost:8000/v1/caulacbo/updatecaulacbo/'
                    + clbchitiet._id, {
                    TENCLB: document.getElementById('nameclb').value,
                    NAMTHANHLAP: document.getElementById('yearclb').value,
                    SANVANDONG: document.getElementById('stadiumclb').value,
                    SL_CAUTHU: clbchitiet.SL_CAUTHU,
                    SL_HLV: clbchitiet.SL_HLV
                })
                alert("S???a th??nh c??ng")
                window.location.reload()
            }
            catch (error) {
                console.log(error.message)
            }
        }
    }
    const handleEditCtModal = async () => {
        if (document.getElementById('namect').value === ''
            || document.getElementById('soaoct').value === ''
            || document.getElementById('ngaysinhct').value === ''
            || document.getElementById('quoctichct').value === '') {
            alert('Vui l??ng nh???p th??ng tin ch???nh s???a')
            return
        }
        const answer = window.confirm("B???n c?? ch???c ch???n s???a",);
        if (answer) {
            try {
                await axios.patch('http://localhost:8000/v1/cauthu/updatecauthu/'
                    + ctchitiet._id, {
                    HOTEN: document.getElementById('namect').value,
                    VITRI: vitrict,
                    SOAO: document.getElementById('soaoct').value,
                    NGAYSINH: document.getElementById('ngaysinhct').value,
                    QUOCTICH: document.getElementById('quoctichct').value
                })
                alert("S???a th??nh c??ng")
                window.location.reload()
            }
            catch (error) {
                console.log(error.message)
            }
        }

    }
    const handleEditHlvModal = async () => {
        if (document.getElementById('namehlv').value === ''
            || document.getElementById('ngaysinhhlv').value === ''
            || document.getElementById('ngaythamgiahlv').value === ''
            || document.getElementById('quoctichhlv').value === '') {
            alert('Vui l??ng nh???p th??ng tin ch???nh s???a')
            return
        }
        const answer = window.confirm("B???n c?? ch???c ch???n s???a",);
        if (answer) {
            try {
                await axios.patch('http://localhost:8000/v1/huanluyenvien/updatehuanluyenvien/'
                    + hlvchitiet._id, {
                    HOTEN: document.getElementById('namehlv').value,
                    LOAI: loaihlv,
                    NGAYSINH: document.getElementById('ngaysinhhlv').value,
                    NGAYTHAMGIA: document.getElementById('ngaythamgiahlv').value,
                    QUOCTICH: document.getElementById('quoctichhlv').value
                })
                alert("S???a th??nh c??ng")
                window.location.reload()
            }
            catch (error) {
                console.log(error.message)
            }
        }
    }
    const handleDeleteHlvModal = async () => {
        find(hlvchitiet.MACLB)
        // console.log("a",clubid)
        const answer = window.confirm("B???n c?? ch???c ch???n x??a",);
        if (answer && clubid.SL_HLV > 1) {
            axios.delete('http://localhost:8000/v1/huanluyenvien/deletehuanluyenvien/' + hlvchitiet._id)
            axios.post('http://localhost:8000/v1/caulacbo/xoahlv', {
                "_id": hlvchitiet.MACLB
            })
            alert("X??a th??nh c??ng")
            window.location.reload()
        }
        else if (answer && clubid.SL_HLV <= 1) {
            alert("Kh??ng th??? x??a hu???n luy???n vi??n do s??? l?????ng hu???n luy???n vi??n ??ang ??? m???c t???i thi???u")
        }
    }
    const handleDeleteCtModal = async () => {
        find(ctchitiet.MACLB)
        // console.log("a",clubid)
        const answer = window.confirm("B???n c?? ch???c ch???n x??a",);
        console.log("cauthu", clubid)
        if (answer && clubid.SL_CAUTHU > cauthutoithieu) {
            axios.delete('http://localhost:8000/v1/cauthu/deletecauthu/' + ctchitiet._id)
            axios.post('http://localhost:8000/v1/caulacbo/xoacauthu', {
                "_id": ctchitiet.MACLB
            })
            alert("X??a th??nh c??ng")
            window.location.reload()
        }
        else if (answer && clubid.SL_CAUTHU <= cauthutoithieu) {
            alert("Kh??ng th??? x??a c???u th??? do s??? l?????ng c???u th??? ??ang ??? m???c t???i thi???u")
        }

    }
    const renderclbModal = () => {
        if (!clbchitiet) {
            return null;
        }
        const img_url = 'http://localhost:8000/' + clbchitiet.LOGO
        return (
            <ModalUpdateCLB
                show={clbchitietmodal}
                handleClose={handleCloseCLBModal}
                modalTitle={"Chi ti???t c??u l???c b???"}
                handleEditClbModal={handleEditClbModal}
                size="lg"
            >
                <div className='Mn_parent_div'>
                    <div className="modal_row1">
                        <label className="Mn_key">T??n </label>
                        <input type='text' className="Mn_value" id='nameclb' defaultValue={clbchitiet.TENCLB}></input>
                        <label className="Mn_key">N??m th??nh l???p</label>
                        <input type='number' className="Mn_value" id='yearclb' defaultValue={clbchitiet.NAMTHANHLAP}></input>
                    </div>
                    <div className="modal_row2">
                        <label className="Mn_key">S??n v???n ?????ng</label>
                        <input type='text' className="Mn_value" id='stadiumclb' defaultValue={clbchitiet.SANVANDONG}></input>
                        <label className="Mn_key">SL c???u th???</label>
                        <p className="value" id='slctclb'>{clbchitiet.SL_CAUTHU}</p>
                    </div>
                    <div className="modal_row3">
                        <label className="key1">SL HLV</label>
                        <p className="value" id='slhlvclb'>{clbchitiet.SL_HLV}</p>
                    </div>
                    <div className="modal_row4">
                        <label className="Mn_key2">Logo</label>
                        <div className="Mn_productImgContainer">
                            <img src={img_url} alt={clbchitiet.TENCLB} />
                        </div>
                    </div>

                </div>
            </ModalUpdateCLB>
        );
    };

    const renderhlvModal = () => {
        if (!hlvchitiet) {
            return null;
        }
        const img_url = 'http://localhost:8000/' + hlvchitiet.AVATAR
        return (
            <ModalUpdateHLV
                show={hlvchitietmodal}
                handleClose={handleCloseHLVModal}
                modalTitle={"Chi ti???t hu???n luy???n vi??n"}
                handleEditHlvModal={handleEditHlvModal}
                handleDeleteHlvModal={handleDeleteHlvModal}
                size="lg"
            >
                <div className='parent_div'>
                    <div className="modal_row1">
                        <label className="Mn_key">H??? t??n</label>
                        <input type='text' className="Mn_value" id='namehlv' defaultValue={hlvchitiet.HOTEN}></input>
                        <label className="Mn_key">Lo???i</label>
                        <select type='text' className="" id='vitrict' onChange={(e) => setLoaiHLV(e.target.value)}>
                            <option value={hlvchitiet.LOAI} selected disabled hidden>{hlvchitiet.LOAI}</option>
                            <option value="HLV Tr?????ng">HLV Tr?????ng</option>
                            <option value="Tr??? l?? HLV">Tr??? l?? HLV</option>
                            <option value="HLV Th??? m??n">HLV Th??? m??n</option>
                            <option value="HLV Th??? l???c">HLV Th??? l???c</option>
                        </select>
                    </div>
                    <div className="modal_row2">
                        <label className="Mn_key">Ng??y sinh</label>
                        <input type='text' className="Mn_value" id='ngaysinhhlv' defaultValue={hlvchitiet.NGAYSINH}></input>
                        <label className="Mn_key">Ng??y tham gia</label>
                        <input type='text' className="Mn_value" id='ngaythamgiahlv' defaultValue={hlvchitiet.NGAYTHAMGIA}></input>
                    </div>
                    <div className="modal_row3">
                        <label className="Mn_key1">Qu???c t???ch</label>
                        <input type='text' className="Mn_value" id='quoctichhlv' defaultValue={hlvchitiet.QUOCTICH}></input>
                    </div>
                    <div className="modal_row4">
                        <label className="Mn_key2">Avatar</label>
                        <div className="productImgContainer">
                            <img src={img_url} alt={hlvchitiet.HOTEN} />
                        </div>
                    </div>

                </div>
            </ModalUpdateHLV>
        );
    };

    const renderctModal = () => {
        if (!ctchitiet) {
            return null;
        }
        const img_url = 'http://localhost:8000/' + ctchitiet.AVATAR
        return (
            <ModalUpdateCT
                show={ctchitietmodal}
                handleClose={handleCloseCTModal}
                modalTitle={"Chi ti???t c???u th???"}
                handleEditCtModal={handleEditCtModal}
                handleDeleteCtModal={handleDeleteCtModal}
                size="lg"
            >
                <div className='parent_div'>
                    <div className="modal_row1">
                        <label className="Mn_key">H??? t??n</label>
                        <input type='text' className="Mn_value" id='namect' defaultValue={ctchitiet.HOTEN}></input>
                        <label className="Mn_key">V??? tr??</label>
                        <select type='text' className="" id='vitrict' onChange={(e) => setViTriCT(e.target.value)}>
                            <option value={ctchitiet.VITRI} selected disabled hidden>{ctchitiet.VITRI}</option>
                            <optgroup label="Ti???n ?????o">
                                <option value="Ti???n ?????o c???m">Ti???n ?????o c???m</option>
                                <option value="Ti???n ?????o c??nh tr??i">Ti???n ?????o c??nh tr??i</option>
                                <option value="Ti???n ?????o c??nh ph???i">Ti???n ?????o c??nh ph???i</option>
                            </optgroup>
                            <optgroup label="Ti???n v???">
                                <option value="Ti???n v??? trung t??m">Ti???n v??? trung t??m</option>
                                <option value="Ti???n v??? ph??ng ng???">Ti???n v??? ph??ng ng???</option>
                                <option value="Ti???n v??? c??nh tr??i">Ti???n v??? c??nh tr??i</option>
                                <option value="Ti???n v??? c??nh ph???i">Ti???n v??? c??nh ph???i</option>
                            </optgroup>
                            <optgroup label="H???u v???">
                                <option value="H???u v??? tr??i">H???u v??? tr??i</option>
                                <option value="H???u v??? ph???i">H???u v??? ph???i</option>
                                <option value="Trung v???">Trung v???</option>
                            </optgroup>
                            <optgroup label="Th??? m??n">
                                <option value="Th??? m??n">Th??? m??n</option>
                            </optgroup>
                        </select>
                    </div>
                    <div className="modal_row2">
                        <label className="Mn_key">S??? ??o</label>
                        <input type='number' className="Mn_value" id='soaoct' defaultValue={ctchitiet.SOAO}></input>
                        <label className="Mn_key">Ng??y sinh</label>
                        <input type='text' className="Mn_value" id='ngaysinhct' defaultValue={ctchitiet.NGAYSINH}></input>
                    </div>
                    <div className="modal_row3">
                        <label className="Mn_key1">Qu???c t???ch</label>
                        <input type='text' className="Mn_value" id='quoctichct' defaultValue={ctchitiet.QUOCTICH}></input>
                    </div>
                    <div className="modal_row4">
                        <label className="Mn_key2">Avatar</label>
                        <div className="productImgContainer">
                            <img src={img_url} alt={ctchitiet.HOTEN} />
                        </div>
                    </div>

                </div>
            </ModalUpdateCT>
        );
    };

    return (
        <div className='SPsearch_container'>
            <div className='SPsearch_title'>
                <FcSearch className='SPsearch_title_icon' size={60} />
                <h2 className='SPsearch_title_text'>TRA C???U</h2>
            </div>
            <div className="SPsearch_bar">
                <label htmlFor="search_bar" className='label'>Th??ng tin c???n t??m:</label>
                <input type="text" name='search_bar'
                    id='search_bar'
                    className='search_bar' placeholder='Nh???p th??ng tin'
                    onChange={(e) => {
                        setQuery(e.target.value.toLocaleLowerCase())
                    }} />
                <label htmlFor="combobox" className='combobox_label'>?????i t?????ng:</label>
                <select name="combobox"
                    className='combobox'
                    id='combobox'
                    onChange={(e) => {
                        setSelected(e.target.value)
                        document.getElementById('search_bar').value = ''
                        setQuery('')
                    }}>
                    <option >C???u th???</option>
                    <option >Hu???n luy???n vi??n</option>
                    <option >C??u l???c b???</option>
                </select>
            </div>
            {renderctModal()}
            {renderhlvModal()}
            {renderclbModal()}
            <div className="SPsearch_table">
                {
                    selected === '' || selected === 'C???u th???' ?
                        renderCT() : selected === 'Hu???n luy???n vi??n' ?
                            renderHLV() : renderCLB()
                }
            </div>
        </div>
    )
}

export default Index