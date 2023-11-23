import './bar.css';

function LBar({type}) {
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
            <div id='searchbar'>
                검색창
            </div>
            <img src='/images/Img_Ring.png' alt='이미지1' id='ring' />
            <img src='/images/Img_Light.png' alt='이미지2' id='light' />
        </div>
        <div className='hl-set1'>
            <p id='tllogo'><img src='img/Logo.png' alt='로고'/></p>
            <div id='tltext'>
                <p id='tltitle'><strong>시사/뉴스</strong></p>
                <p id='tlinfo'>&gt; {typed}</p>
            </div>
        </div>
      </header>
    );
}
    
export default LBar;