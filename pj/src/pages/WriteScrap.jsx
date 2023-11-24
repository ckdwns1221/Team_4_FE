import React/* , { useState } */ from 'react'
import { useNavigate } from 'react-router-dom';

import '../css/WriteScrap.css'
import Navbar from '../components/Navbar'


export default function WriteScrap() {
    const movePage= useNavigate();

    function moveMain() {
      movePage('/');
    }

    return (
        <div className='display-container'>
            <Navbar />
            <div className="wTitleWrap">
                스크랩 추가하기
            </div>
            <div className='WriteScrap-container'>
                <div className="wContentWrap">
                    <div className='wInputTitle'>
                        제목
                    </div>
                    <div className='wInputWrap'>
                        <input 
                            type='text'
                            className='wInput' 
                            placeholder='스크린 제목 입력해주세요.' />
                    </div>
                    <div className="wInputTitle" style={{ marginTop: "26px"}}>
                        파일 첨부
                    </div>
                    <div className="wInputWrap">
                        <input 
                            type="file" 
                            className='wInputFile'
                            accept=".jpg, .jpeg, .png, .gif, .ppt, .docs, .hwp, .pdf, .xlsx" 
                            placeholder='또는 파일을 여기로 드래그 해주세요.'
                            multiple />
                    </div>
                    <div className='wInputTitle' style={{ marginTop: "26px"}}>
                        링크 첨부
                    </div> 
                    <div className='wInputWrap'>
                        <input 
                            type='text'
                            className='wInput' 
                            placeholder='링크를 붙여 넣어주세요.' />
                    </div>
                    <div className='wInputTitle' style={{ marginTop: "26px"}}>
                        메모 작성
                    </div> 
                    <div className='wInputWrap'>
                        <input 
                            type='text'
                            className='wInput' 
                            placeholder='스크랩에 대해 설명해주세요.' />
                    </div>
                    <div className='wInputTitle' style={{ marginTop: "26px"}}>
                        카테고리
                    </div> 
                    <div className="categoryBtn">
                        <button className="cBtnNews" id='wBtn'>시사/뉴스</button>                        
                        <button className="cBtnFood" id='wBtn'>푸드</button>
                        <button className="cBtnArts" id='wBtn' >문화/예술</button>
                        <button className="cBtnFinance" id='wBtn'>경제/금융</button>
                        <button className="cBtnTech" id='wBtn'>IT/기술</button>
                        <button className="cBtnHealth" id='wBtn'>건강/의학</button>
                        <button className="cBtnBusiness" id='wBtn'>비즈니스</button>
                        <button className="cBtnEtc" id='wBtn'>기타</button>
                    </div>
                    <div className='wInputTitle' style={{ marginTop: "26px"}}>
                        공개 여부   
                    </div> 
                    <div className="releaseBtn">
                        <button className="rYesBtn" id='wBtn'>공개</button>
                        <button className="rNoBtn" id='wBtn'>나만 보기</button>
                    </div>
                </div>
                <button className='wBottomBtn'  onClick={moveMain}>
                    스크랩 등록
                </button>
            </div>
        </div>
    )
}