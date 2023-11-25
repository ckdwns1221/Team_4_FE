import styled from 'styled-components';
import './SearchHeader.css';
import { Link,useNavigate } from 'react-router-dom';
import Search from '../Search';

const HeaderStyle = styled.header`
    width: 100%;
    height: 150px;
    border-bottom-right-radius: 30px; 
    background-color: #BEDCF3 ;
`;

function SHeader({searchkey}) {     
    return (
        <HeaderStyle >
            <div className='hs-set2'>
                <Search/>
                <img src='/images/Img_Ring.png' alt='이미지1' id='ring' />
                <img src='/images/Img_Light.png'alt='이미지2' id='light' />
            </div>
            <div className='hs-set1'>
                <Link to='/'>
                    <p id='slogo'><img src='/img/Logo.png' alt='로고'/></p>
                </Link>
                <div id='stext'>
                    <p id='blue'>'{searchkey}'</p>
                    <p id='stitle'>에 대한 검색 결과</p>
                </div>
            </div>
            <div className='hs-set3'>
                <p>로그아웃</p>
                <div id='s_user_radius'>
                    <img src='img/profile.png' alt='프로필' id='s_user_image'/>
                </div>
            </div>
        </HeaderStyle>
    );
}
    
export default SHeader;