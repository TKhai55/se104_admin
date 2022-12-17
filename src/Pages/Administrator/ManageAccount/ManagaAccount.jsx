import React, { useEffect, useState } from 'react'
import Header from '../Header_Administrator/Header'
import './ManagaAccount.css'
import icon from '../images/manageAccount.png'
import axios from 'axios'



const ManagaAccount = () => {

    let i = 1;

    const [taikhoans, setTaiKhoan] = useState([])
    const [curaccnum, setCurAccNum] = useState([])
    const [changetaikhoan, setChangeTaiKhoan] = useState([])



    var table = document.getElementById("tableID");
    if (table) {
        for (let j = 1; j < table.rows.length; j++) {
            table.rows[j].onclick = function (e) {
                Array.from(this.parentElement.children).forEach(function (e) {
                    e.classList.remove('slected_row')
                })
                this.classList.add('slected_row')
                e = e || window.event;
                var data1 = []
                var target = e.srcElement || e.target;
                while (target && target.nodeName !== "TR") {
                    target = target.parentNode;
                }
                if (target) {

                    var cells = target.getElementsByTagName("td");
                    for (var i = 0; i < cells.length; i++) {
                        data1.push(cells[i].innerHTML);
                        searchTK(data1)
                    }
                }

            };
        }
    }




    const getTK = async () => {

        try {
            const res = await axios.get('http://localhost:8000/v1/auth/gettaikhoan')
            setTaiKhoan(res.data)
            setCurAccNum(res.data.length)
        }
        catch (error) {
            console.log(error.message)
        }
    }
    const searchTK = async (data1) => {

        try {
            const res = await axios.get('http://localhost:8000/v1/auth/search/' + data1[1])
            setChangeTaiKhoan(res.data[0])
        }
        catch (error) {
            alert(error.message)
            console.log(error.message)
        }
    }
    const DeleteTK = async () => {
        var answer = window.confirm("Bạn có chắc muốn xoá tài khoản ?");
        if (answer) {
            try {
                await axios.delete('http://localhost:8000/v1/auth/deletetaikhoan/' + changetaikhoan._id)
                alert("Xoá tài khoản thành công")
                window.location.reload();
                return false;
            }
            catch (error) {
                alert(error.message)
                console.log(error.message)
            }
        }
        else {
            return
        }

    }
    const FixTK = async () => {
        let string_anwser = prompt("Nhập mật khẩu muốn đổi")
        if (string_anwser.length === 0) {
            console.log("1")
            alert('Vui lòng nhập mật khẩu muốn đổi')
            return
        }
        else if (string_anwser.length > 8) {
            try {
                await axios.patch('http://localhost:8000/v1/auth/updatetaikhoan/' + changetaikhoan._id, {
                    TENTAIKHOAN: changetaikhoan.TENTAIKHOAN,
                    MATKHAU: string_anwser,
                    PHANQUYEN: changetaikhoan.PHANQUYEN
                })
                alert("Đổi mật khẩu thành công")
                window.location.reload();
                return false;
            }
            catch (error) {
                console.log(error.message)
            }
        }
        else {
            alert('Mật khẩu phải dài hơn 8 chữ số')
            return
        }
    }

    useEffect(() => {
        getTK()
    }, [])
    function fix() {
        FixTK()
    }

    function deleteTK() {
        DeleteTK()
    }

    return (
        <div>
            <Header />
            <section className='ManagaAccount'>
                <div className="content_wrapper">


                    <div className="title">
                        <p>QUẢN LÝ TÀI KHOẢN</p>
                        <img src={icon} alt="icon" className="icon_title" />
                    </div>
                    <div className="content">
                        <div className="curAcc">
                            Số lượng tài khoản: {curaccnum}
                        </div>
                        <button className='delete' onClick={deleteTK}>Xoá</button>
                        <button className='fix' onClick={fix}>Đổi mật khẩu </button>

                        <table className="table_content" id='tableID'>
                            <thead>
                                <tr>
                                    <th className='stt'>STT</th>
                                    <th className='tk'>Tài khoản</th>
                                    <th className='mk'>Mật khẩu</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    taikhoans.map(taikhoan => {
                                        return (
                                            <tr id='tablerow' key={taikhoan._id} >
                                                <td>{i++}</td>
                                                <td>{taikhoan.TENTAIKHOAN}</td>
                                                <td className='text'>{taikhoan.MATKHAU}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </section >
        </div >
    )
}

export default ManagaAccount