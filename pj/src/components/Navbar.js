import React from 'react';
import '../css/Navbar.css'

const Navbar = () => {
    return (
        <div className="Nav-container">
            <div className='bg-Ring'>
                <img className='Nav-Ring' alt='Nav-Ring' src='img/img_Ring.png' />
                <div className="Nav-logo">
                    {/* 로고 만들어지면 수정 */}
                    슼카이브   
                </div>
            </div>
            <div className='bg-Light'>
                <div className="Nav-loginBtn">
                    로그인
                </div>
                <img className='Nav-Light' alt='Nav-Light' src='img/img_Light.png' />
            </div>
      </div>
    );
};

export default Navbar;