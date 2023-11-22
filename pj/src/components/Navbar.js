import React from 'react';
import { Link } from 'react-router-dom'
import '../css/Navbar.css'

const Navbar = () => {
    return (
        <div className="Nav-container">
            <div className='bg-Ring'>
                <img className='Nav-Ring' alt='Nav-Ring' src='img/img_Ring.png' />
                <Link to='/'>
                    <div className="Nav-logo">
                        <img className='logo-img' src="img/Logo.png" alt="Logo.png" />
                    </div>
                </Link>
            </div>
            <div className='bg-Light'>
                <Link to='/login' className='Link-login'>
                    <div className="Nav-loginBtn">
                        로그인
                    </div>
                    <img className='Nav-Light' alt='Nav-Light' src='img/img_Light.png' />
                </Link>
                <Link to='/signup' className='Link-login'>
                    <div className="Nav-signupBtn">
                        회원가입
                    </div>
                </Link>
            </div>
      </div>
    );
};

export default Navbar;