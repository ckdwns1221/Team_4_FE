import React from 'react';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

import Footer from '../../components/Footer';
import './Main.css'
/* font-awesome */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Main() {
    const movePage= useNavigate();

    function moveWriteScrap() {
      movePage('/WriteScrap');
    }
    function moveLogin() {
      movePage('/login');
    }
    function moveScrapSearch() {
      movePage('/search');
    }
    function moveShare() {
      movePage('/share');
    }
    /* function moveNews() {
      movePage('/');
    }
    function moveFood() {
      movePage('/');
    }
    function moveArts() {
      movePage('/');
    }
    function moveFinance() {
      movePage('/');
    }
    function moveTech() {
      movePage('/');
    }
    function moveHealth() {
      movePage('/');
    }
    function moveBusiness() {
      movePage('/');
    }
    function moveEtc() {
      movePage('/');
    } */

    return (
      <div className='display-container'>
        <div className='mainWrap'>
          {/* Nab section */}
          <div className='mainNav-container'>
            <Link to='/'>
                <img className='MainLogoImg' src="img/Logo.png" alt="Logo.png" />
            </Link>
            <div className='Main-navLogin' onClick={ moveLogin }>
              로그인
            </div>
            {/* <Link to='/'>
              <div className="Main-navLogout">
                로그아웃
              </div>
            </Link> */}
          </div>

          {/* Main section */}
          <div className='Main-container'>
            <div className='mainBgImg'>
              <img src="img/img_Union.png" alt="mainBgUnion" className="mainBgUnion" />
              <div className='main-info'>
                스크랩 해놓고 잊은 파일들, <br />
                이제는 찾기 쉽게 한 눈에 확인해보세요!
              </div>
              <img src="img/img_Star.png" alt="mainBgStar" className="mainBgStar" />
            </div>
            <div className='main-searchbar'>
              <div className='searchbarWrap'>
                  <div className='searchBtn' onClick={moveScrapSearch}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </div>
                  <input type='text' placeholder='파일 검색'/>
              </div>
                <button className='addScrapBtn' onClick={moveWriteScrap}>
                  스크랩 추가하기
                </button>
            </div>
            <div className='main-fileWrap'>
              <Link to="/news">
                <div className="fileBox-news">
                  <div className="boxHeader">시사/뉴스</div>
                  <img src="img/Ic_News.png" alt="Ic_News.png" className="fileIcon" />
                </div>
              </Link>
              <Link to="/food">
                <div className="fileBox-food">
                  <div className="boxHeader">푸드</div>
                  <img src="img/Ic_Fastfood.png" alt="" className="fileIcon" />
                </div>
              </Link>
              <Link to="/culture">
                <div className="fileBox-arts">
                  <div className="boxHeader">문화/예술</div>
                  <img src="img/Ic_Brush.png" alt="" className="fileIcon" />
                </div>
              </Link>
              <Link to="/economy">
                <div className="fileBox-finance">
                  <div className="boxHeader">경제/금융</div>
                  <img src="img/Ic_Finance.png" alt="" className="fileIcon" />
                </div>
              </Link>
              <Link to="/it">
                <div className="fileBox-tech">
                  <div className="boxHeader">It/기술</div>
                  <img src="img/Ic_Tech.png" alt="" className="fileIcon" />
                </div>
              </Link>
              <Link to="/health">
                <div className="fileBox-health">
                  <div className="boxHeader">건강/의학</div>
                  <img src="img/Ic_Health.png" alt="" className="fileIcon" />
                </div>
              </Link>
              <Link to="/business">
                <div className="fileBox-business">
                  <div className="boxHeader">비즈니스</div>
                  <img src="img/Ic_Business.png" alt="" className="fileIcon" />
                </div>
              </Link>
              <Link to="/etc">
                <div className="fileBox-etc">
                  <div className="boxHeader">기타</div>
                  <img src="img/Ic_Etc.png" alt="" className="fileIcon" />
                </div>
              </Link>
           </div>
            <div className="gotoShareWrap">
              다른 사람들의 스크랩도 궁금하다면?
              <div className="gotoSPBtn" onClick={moveShare}>
                공유 페이지로 이동
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  export default Main;