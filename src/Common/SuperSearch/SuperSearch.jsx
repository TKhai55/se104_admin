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
                        <th>Cầu thủ</th>
                        <th>Câu lạc bộ</th>
                        <th>Loại cầu thủ</th>
                        <th>Số bàn thắng</th>
                        <th>Số thẻ vàng</th>
                        <th>Số thẻ đỏ</th>
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
                        <th style={{ textAlign: "left", paddingLeft: '3vw' }}>Huấn luyện viên</th>
                        <th>Câu lạc bộ</th>
                        <th>Loại</th>
                        <th>Quốc tịch</th>
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
                        <th style={{ textAlign: "left", paddingLeft: '4vw' }}>Câu lạc bộ</th>
                        <th>Năm thành lập</th>
                        <th>Sân vận động</th>
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
            alert('Vui lòng nhập thông tin chỉnh sửa')
            return
        }
        const answer = window.confirm("Bạn có chắc chắn sửa",);
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
                alert("Sửa thành công")
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
            alert('Vui lòng nhập thông tin chỉnh sửa')
            return
        }
        const answer = window.confirm("Bạn có chắc chắn sửa",);
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
                alert("Sửa thành công")
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
            alert('Vui lòng nhập thông tin chỉnh sửa')
            return
        }
        const answer = window.confirm("Bạn có chắc chắn sửa",);
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
                alert("Sửa thành công")
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
        const answer = window.confirm("Bạn có chắc chắn xóa",);
        if (answer && clubid.SL_HLV > 1) {
            axios.delete('http://localhost:8000/v1/huanluyenvien/deletehuanluyenvien/' + hlvchitiet._id)
            axios.post('http://localhost:8000/v1/caulacbo/xoahlv', {
                "_id": hlvchitiet.MACLB
            })
            alert("Xóa thành công")
            window.location.reload()
        }
        else if (answer && clubid.SL_HLV <= 1) {
            alert("Không thể xóa huấn luyện viên do số lượng huấn luyện viên đang ở mức tối thiểu")
        }
    }
    const handleDeleteCtModal = async () => {
        find(ctchitiet.MACLB)
        // console.log("a",clubid)
        const answer = window.confirm("Bạn có chắc chắn xóa",);
        console.log("cauthu", clubid)
        if (answer && clubid.SL_CAUTHU > cauthutoithieu) {
            axios.delete('http://localhost:8000/v1/cauthu/deletecauthu/' + ctchitiet._id)
            axios.post('http://localhost:8000/v1/caulacbo/xoacauthu', {
                "_id": ctchitiet.MACLB
            })
            alert("Xóa thành công")
            window.location.reload()
        }
        else if (answer && clubid.SL_CAUTHU <= cauthutoithieu) {
            alert("Không thể xóa cầu thủ do số lượng cầu thủ đang ở mức tối thiểu")
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
                modalTitle={"Chi tiết câu lạc bộ"}
                handleEditClbModal={handleEditClbModal}
                size="lg"
            >
                <div className='Mn_parent_div'>
                    <div className="modal_row1">
                        <label className="Mn_key">Tên </label>
                        <input type='text' className="Mn_value" id='nameclb' defaultValue={clbchitiet.TENCLB}></input>
                        <label className="Mn_key">Năm thành lập</label>
                        <input type='number' className="Mn_value" id='yearclb' defaultValue={clbchitiet.NAMTHANHLAP}></input>
                    </div>
                    <div className="modal_row2">
                        <label className="Mn_key">Sân vận động</label>
                        <input type='text' className="Mn_value" id='stadiumclb' defaultValue={clbchitiet.SANVANDONG}></input>
                        <label className="Mn_key">SL cầu thủ</label>
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
                modalTitle={"Chi tiết huấn luyện viên"}
                handleEditHlvModal={handleEditHlvModal}
                handleDeleteHlvModal={handleDeleteHlvModal}
                size="lg"
            >
                <div className='parent_div'>
                    <div className="modal_row1">
                        <label className="Mn_key">Họ tên</label>
                        <input type='text' className="Mn_value" id='namehlv' defaultValue={hlvchitiet.HOTEN}></input>
                        <label className="Mn_key">Loại</label>
                        <select type='text' className="" id='vitrict' onChange={(e) => setLoaiHLV(e.target.value)}>
                            <option value={hlvchitiet.LOAI} selected disabled hidden>{hlvchitiet.LOAI}</option>
                            <option value="HLV Trưởng">HLV Trưởng</option>
                            <option value="Trợ lý HLV">Trợ lý HLV</option>
                            <option value="HLV Thủ môn">HLV Thủ môn</option>
                            <option value="HLV Thể lực">HLV Thể lực</option>
                        </select>
                    </div>
                    <div className="modal_row2">
                        <label className="Mn_key">Ngày sinh</label>
                        <input type='text' className="Mn_value" id='ngaysinhhlv' defaultValue={hlvchitiet.NGAYSINH}></input>
                        <label className="Mn_key">Ngày tham gia</label>
                        <input type='text' className="Mn_value" id='ngaythamgiahlv' defaultValue={hlvchitiet.NGAYTHAMGIA}></input>
                    </div>
                    <div className="modal_row3">
                        <label className="Mn_key1">Quốc tịch</label>
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
                modalTitle={"Chi tiết cầu thủ"}
                handleEditCtModal={handleEditCtModal}
                handleDeleteCtModal={handleDeleteCtModal}
                size="lg"
            >
                <div className='parent_div'>
                    <div className="modal_row1">
                        <label className="Mn_key">Họ tên</label>
                        <input type='text' className="Mn_value" id='namect' defaultValue={ctchitiet.HOTEN}></input>
                        <label className="Mn_key">Vị trí</label>
                        <select type='text' className="" id='vitrict' onChange={(e) => setViTriCT(e.target.value)}>
                            <option value={ctchitiet.VITRI} selected disabled hidden>{ctchitiet.VITRI}</option>
                            <optgroup label="Tiền đạo">
                                <option value="Tiền đạo cắm">Tiền đạo cắm</option>
                                <option value="Tiền đạo cánh trái">Tiền đạo cánh trái</option>
                                <option value="Tiền đạo cánh phải">Tiền đạo cánh phải</option>
                            </optgroup>
                            <optgroup label="Tiền vệ">
                                <option value="Tiền vệ trung tâm">Tiền vệ trung tâm</option>
                                <option value="Tiền vệ phòng ngự">Tiền vệ phòng ngự</option>
                                <option value="Tiền vệ cánh trái">Tiền vệ cánh trái</option>
                                <option value="Tiền vệ cánh phải">Tiền vệ cánh phải</option>
                            </optgroup>
                            <optgroup label="Hậu vệ">
                                <option value="Hậu vệ trái">Hậu vệ trái</option>
                                <option value="Hậu vệ phải">Hậu vệ phải</option>
                                <option value="Trung vệ">Trung vệ</option>
                            </optgroup>
                            <optgroup label="Thủ môn">
                                <option value="Thủ môn">Thủ môn</option>
                            </optgroup>
                        </select>
                    </div>
                    <div className="modal_row2">
                        <label className="Mn_key">Số áo</label>
                        <input type='number' className="Mn_value" id='soaoct' defaultValue={ctchitiet.SOAO}></input>
                        <label className="Mn_key">Ngày sinh</label>
                        <input type='text' className="Mn_value" id='ngaysinhct' defaultValue={ctchitiet.NGAYSINH}></input>
                    </div>
                    <div className="modal_row3">
                        <label className="Mn_key1">Quốc tịch</label>
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
                <h2 className='SPsearch_title_text'>TRA CỨU</h2>
            </div>
            <div className="SPsearch_bar">
                <label htmlFor="search_bar" className='label'>Thông tin cần tìm:</label>
                <input type="text" name='search_bar'
                    id='search_bar'
                    className='search_bar' placeholder='Nhập thông tin'
                    onChange={(e) => {
                        setQuery(e.target.value.toLocaleLowerCase())
                    }} />
                <label htmlFor="combobox" className='combobox_label'>Đối tượng:</label>
                <select name="combobox"
                    className='combobox'
                    id='combobox'
                    onChange={(e) => {
                        setSelected(e.target.value)
                        document.getElementById('search_bar').value = ''
                        setQuery('')
                    }}>
                    <option >Cầu thủ</option>
                    <option >Huấn luyện viên</option>
                    <option >Câu lạc bộ</option>
                </select>
            </div>
            {renderctModal()}
            {renderhlvModal()}
            {renderclbModal()}
            <div className="SPsearch_table">
                {
                    selected === '' || selected === 'Cầu thủ' ?
                        renderCT() : selected === 'Huấn luyện viên' ?
                            renderHLV() : renderCLB()
                }
            </div>
        </div>
    )
}

export default Index