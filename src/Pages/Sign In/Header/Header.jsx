import React from 'react'
import logo from "../images/logo.svg";
import "./Header.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-regular-svg-icons"




const Header = () => {
    return (
        <header >
            <div className='header d_flex' >
                <div className="logo" >
                    <img className='mainlogo' src={logo} alt="logo" />
                </div>
                <div className="title">
                    <h2>GIẢI VÔ ĐỊCH BÓNG ĐÁ QUỐC GIA V_LEAGUE</h2>
                </div>
                <div className="user">
                    <FontAwesomeIcon icon={faUser} className='user_icon'></FontAwesomeIcon>
                </div>
            </div>
        </header>
    )
}

export default Header