import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './Goal.css'

const Goal = () => {
  return (
    <div className="goal-main-container">
        <div className="left-column">
            <table>
                <tr>
                    <td>STT</td>
                    <th>Các loại bàn thắng</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Chân</td>
                </tr>

                <tr>
                    <td>2</td>
                    <td>Đầu</td>
                </tr>

                <tr>
                    <td>3</td>
                    <td>Penalty</td>
                </tr>

                <tr>
                    <td>4</td>
                    <td>Phạt</td>
                </tr>

                <tr>
                    <td>5</td>
                    <td>Bù giờ</td>
                </tr>

                <tr>
                    <td>6</td>
                    <td>...</td>
                </tr>
            </table>

            <button>Thêm <FontAwesomeIcon icon={faPlus}/></button>
        </div>

        <div className="right-column">
            <div className="time-input">
                <label htmlFor="time-input">Thời điểm ghi bàn tối đa</label>
                <input type="text" placeholder='Nhập thời gian'/>
            </div>

            <button>Thay đổi</button>
        </div>
    </div>
  )
}

export default Goal