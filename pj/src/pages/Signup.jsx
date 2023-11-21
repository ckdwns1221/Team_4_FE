import React, { useState, useEffect } from 'react'
import '../css/Signup.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

/* 더미 데이터 */
const User = {
    email: 'test1234@email.com',
    id: 'test1234',
    pw: 'test1234@@@',
    pwcheck: 'test1234@@@'
}

export default function Signup() {
    const [email, setEmail] =  useState('');
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [pwcheck, setPwcheck] = useState('');

    const [emailValid, setEmailValid] = useState(false);
    const [idValid, setIdValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);
    const [pwcheckValid, setPwcheckValid] = useState(false);

    const [notAllow, setNotAllow] = useState(true);

    const handleEmail = (e) => {
        setEmail(e.target.value);
        const regex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        if (regex.test(e.target.value)) {
          setEmailValid(true);
        } else {
          setEmailValid(false);
        }
      };
    const handleId = (e) => {
        setId(e.target.value);
        const regex = /^[a-zA-Z0-9]+$/;     
        if(regex.test(id)) {
            setIdValid(true);
        } else {
            setIdValid(false);
        }
    }
    const handlePassword = (e) => {
        setPw(e.target.value);
        const regex = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
        if(regex.test(pw)) {
            setPwValid(true);
        } else {
            setPwValid(false);
        }
    }
    const handlePasswordcheck = (e) => {
        setPwcheck(e.target.value);
        const regex = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
        if(regex.test(pwcheck)) {
            setPwcheckValid(true);
        } else {
            setPwcheckValid(false);
        }
    }
    
    const onClickConfirmButton = () => {
        if(email === User.email && id === User.id && pw === User.pw && pwcheck === User.pwcheck) {
            alert('회원가입에 성공했습니다.');
        } else {
            alert('양식을 다시 확인해주세요.');
        }
    }

    useEffect(() => {
        if(pwValid && pwcheckValid) {
            setNotAllow(false);
            return;
        }
        setNotAllow(true);
    },[pwValid,pwcheckValid])
      
    return (
        <div className='display-container'>
            <Navbar />
            <div className="Signup-container">
                <div className='titleWrap'>
                    회원가입
                </div>
                <div className='contentWrap'>
                    <div className='inputTitle'>이메일</div>
                    <div className='inputWrap'>
                        <input 
                            type='text'
                            className='input' 
                            placeholder='이메일을 입력해주세요.' 
                            value={email} 
                            onChange={handleEmail} />
                    </div>
                    <div className="errorMessageWrap">
                        {!emailValid && email.length > 0 && (
                        <div>올바른 이메일을 입력해주세요.</div>
                        )}
                    </div>
                    <div className='inputTitle' style={{ marginTop: "26px"}}>아이디</div>
                    <div className='inputWrap'>
                        <input 
                            type='text'
                            className='input' 
                            placeholder='아이디를 입력해주세요.' 
                            value={id} 
                            onChange={handleId} />
                    </div>
                    <div className='inputTitle' style={{ marginTop: "26px"}}>
                        비밀번호
                    </div> 
                    <div className='inputWrap'>
                        <input 
                            type='password'
                            className='input' 
                            placeholder='비밀번호를 입력해주세요.' 
                            value={pw} 
                            onChange={handlePassword}/>
                    </div>
                    <div className='errorMessageWrap'>
                        { !pwValid && pw.length > 0 && (
                            <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
                        )
                        }
                    </div>
                    <div className='inputTitle' style={{ marginTop: "26px"}}>
                        비밀번호 확인
                    </div> 
                    <div className='inputWrap'>
                        <input 
                            type='password'
                            className='input' 
                            placeholder='위 비밀번호와 동일하게 입력하세요.' 
                            value={pwcheck} 
                            onChange={handlePasswordcheck}/>
                    </div>
                    <div className='errorMessageWrap'>
                        { !pwcheckValid && pwcheck.length > 0 && (
                            <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
                        )
                        }
                    </div>
                </div>
                <div>
                    <button className='bottomBtn' disabled={notAllow} onClick={onClickConfirmButton}>
                        회원가입하기
                        </button>
                    <div className='gotologin'>
                        이미 가입하셨나요?
                        <div className='loginBtn'>로그인하기</div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        
    )
}