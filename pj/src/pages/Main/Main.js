import React from 'react';
import Footer from '../../components/Footer';
import './Main.css'
/* font-awesome */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Main() {
    return (
      <div className='display-container'>
        <div className='mainWrap'>
          {/* Nab section */}
          <div className='Nav-container'>
            <div className='Main-navLogo'>
              슼카이브
            </div>
            <div className='Main-navLogin'>
              로그인
            </div>
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
                <button className='searchBtn'>
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
                <input type='text' placeholder='파일 검색'/>
              </div>
              <button className='addScrapBtn'>
                스크랩 추가하기
              </button>
            </div>
            <div className='main-fileWrap'>
              <div className="file-news"></div>
              <div className="file-food"></div>
              <div className="file-arts"></div>
              <div className="file-finance"></div>
              <div className="file-tech"></div>
              <div className="file-health"></div>
              <div className="file-business"></div>
              <div className="file-etc"></div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  export default Main;