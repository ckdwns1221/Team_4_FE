import styled from 'styled-components';
import './TypeSelectBar.css';
import { Link } from 'react-router-dom';
import Search from '../Search';

const HeaderStyle = styled.header`
    width: 100%;
    height: 150px;
    border-bottom-right-radius:  30px; 
    background-color: ${(props) => props.color};
`;

function TBar({color,category}) {  
    let category_1 ;
    if (category == 'news')
        category_1 = '시사/뉴스';
    else if(category == 'food')
        category_1 = '푸드';
    else if(category=='culture')
        category_1 = '문화/예술';
    else if(category=='it')
        category_1 = 'it/기술';
    else if(category=='health')
        category_1 = '건강/의학';
    else if(category=='business')
        category_1 = '비지니스';
    else if(category=='economy')
        category_1 = '경제/금융';
    else if(category=='etc')
        category_1 = '기타';

    return (
        <div className="display-container">
            <HeaderStyle color={color}>
                <div className="TSNav-container">
                    <div className='TSBg-Ring'>
                        <img className='TSNav-Ring' alt='Nav-Ring' src='img/img_Ring.png' />
                        <Link to='/'>
                            <div className="TSNav-logo">
                                <img className='TSlogo-img' src="img/Logo.png" alt="Logo.png" />
                            </div>
                        </Link>
                    </div>
                    {/* <div className='TSBg-Light'>
                        <Link to='/login' className='RSLink-login'>
                            <div className="TSNav-loginBtn">
                                로그인
                            </div>
                            <img className='TSNav-Light' alt='Nav-Light' src='img/img_Light.png' />
                        </Link>
                        <Link to='/signup' className='TSLink-login'>
                            <div className="TSNav-signupBtn">
                                회원가입
                            </div>
                        </Link>
                    </div> */}
                    <div className='TSLogoutWrap'>
                        <div className="TSMpAndLogout">
                            <Link to='/mypage'>
                                <div className="TSNavImgProfile">
                                    <img src="/img/Img_Profile.png" alt="" />
                                </div>
                            </Link>
                            <Link to='/' style={{textDecoration: "none"}}>
                                <div className="TSNavLogout">
                                    로그아웃
                                </div>
                            </Link>
                        </div>
                        <img className='TSNav-Light' alt='Nav-Light' src='img/img_Light.png' />
                    </div>
                </div>
            </HeaderStyle>
            <div className="typeAndSearch">
                <div id='tText'>
                        <p id='tTitle'>{category_1}</p>
                        <p id='tInfo'>찾고자 하는 파일 유형을 선택해주세요.</p>
                    </div>
                <div className="TSBSearch">
                    <Search/>
                </div>
            </div>
        </div>
    );
}
    
export default TBar;