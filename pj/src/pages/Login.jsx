import React, { useState, useEffect } from 'react'
import '../../css/Login.css';
import Navbar from '../../components/Main/Navbar'
import Footer from '../../components/Main/Footer'

/* 더미 데이터 */
const User = {
    id: 'test1234',
    pw: 'test1234@@'
}

export default function Login() {
    const [id, setId] = useState('');
    const [pw, setPw] = useState("");

    const [idValid, setIdValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);
    const [notAllow, setNotAllow] = useState(true);

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
    
    const onClickConfirmButton = () => {
        if(id === User.id && pw === User.pw) {
            alert('로그인에 성공했습니다.');
        } else {
            alert('등록되지 않은 회원입니다.');
        }
    }

    useEffect(() => {
        if(idValid && pwValid) {
            setNotAllow(false);
            return;
        }
        setNotAllow(true);
    },[idValid,pwValid])
      
    return (
        <div className='display-container'>
            <Navbar/>
            <div className="page">
                <div className='titleWrap'>
                    로그인
                </div>
                <div className='contentWrap'>
                    <div className='inputTitle'>아이디</div>
                    <div className='inputWrap'>
                        <input 
                            type='text'
                            className='input' 
                            placeholder='아이디를 입력해주세요.' 
                            value={id} 
                            onChange={handleId} />
                    </div>
                    <div className='errorMessageWrap'>
                        {
                            !idValid && id.length > 0 && (
                                <div>올바른 아이디를 입력해주세요.</div>
                            )
                        }
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
                </div>
                <div>
                    <button className='bottomBtn' disabled={notAllow} onClick={onClickConfirmButton}>
                        로그인하기
                        </button>
                    <div className='gotoSignup'>
                        아직 회원이 아니신가요?
                        <div className='SignupBtn'>회원가입 하기</div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}