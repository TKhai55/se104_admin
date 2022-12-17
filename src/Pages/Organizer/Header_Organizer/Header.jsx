import React, { useEffect, useRef } from 'react'
import logo from "../images/logo.svg";
import "./Header.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-regular-svg-icons"
import { Link, useNavigate, useParams } from 'react-router-dom';



const Header = () => {

    const muagiaiID = useParams()
    const navigate = useNavigate()

    const payload = useRef({});

    useEffect(() => {
        payload.current = {
            params: {
                muagiaiID
            }
        };
    }, []);

    const returnHome = () => {
        navigate('/organizer/home/' + payload.current.params.muagiaiID.muagiaiID)
    }

    return (
        <header >
            <div className='header d_flex' >
                <div className="logo" >
                    <img className='mainlogo' src={logo} alt="logo" onClick={returnHome} />
                </div>
                <div className="title">
                    <h2>BAN TỔ CHỨC</h2>
                </div>
                <div className="user">
                    <div className="icon">
                        <FontAwesomeIcon icon={faUser} className='user_icon'></FontAwesomeIcon>
                    </div>
                    <div className="button">
                        <Link to='/'>Đăng xuất</Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header