import './bar.css';
import { Link,useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function LBar({type}) {
    const movePage= useNavigate(); 

    function moveScrapSearch() {
        movePage('/');
      }
    let typed ;
    if (type == 'file')
        typed = '파일';
    else if(type == 'link')
        typed = '링크';
    else if(type=='memo')
        typed = '메모';
    return (
      <header>
        <div className='hl-set2'>
            <div className='hl-searchbarWrap'>
                <div className='hl-searchBtn' onClick={moveScrapSearch}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
                <input type='text' placeholder='파일 검색'/>
            </div>
            <img src='/images/Img_Ring.png' alt='이미지1' id='ring' />
            <img src='/images/Img_Light.png' alt='이미지2' id='light' />
        </div>
        <div className='hl-set1'>
            <Link to='/'>
                <img id='tllogo' src='/img/Logo.png' alt='로고'/>
            </Link>
            <div id='tltext'>
                <p id='tltitle'>시사/뉴스</p>
                <p id='tlinfo'>&gt; {typed}</p>
            </div>
        </div>
      </header>
    );
}
    
export default LBar;