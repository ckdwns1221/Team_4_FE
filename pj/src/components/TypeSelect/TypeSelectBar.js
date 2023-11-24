import styled from 'styled-components';
import './TypeSelectBar.css';
import { Link,useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const HeaderStyle = styled.header`
    width: 100%;
    height: 150px;
    border-bottom-right-radius:  30px; 
    background-color: ${(props) => props.color};
`;

function TBar({color,category}) { 
    const movePage= useNavigate(); 

    function moveScrapSearch() {
        movePage('/search');
      }  
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
        <HeaderStyle color={color}>
        {/* <header> */}
            <div className='ht-set2'>
                <div className='ht-searchbarWrap'>
                    <div className='ht-searchBtn' onClick={moveScrapSearch}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </div>
                    <input type='text' placeholder='파일 검색'/>
                </div>
                <img src='/images/Img_Ring.png' alt='이미지1' id='ring' />
                <img src='/images/Img_Light.png' alt='이미지2' id='light' />
            </div>
            <div className='ht-set1'>
                <Link to='/'>
                    <img id='tlogo' src='/img/Logo.png' alt='로고'/>
                </Link>
                <div id='ttext'>
                    <p id='ttitle'>{category_1}</p>
                    <p id='tinfo'>찾고자 하는 파일 유형을 선택해주세요.</p>
                </div>
            </div>
        {/* </header>  */}
        </HeaderStyle>
    );
}
    
export default TBar;