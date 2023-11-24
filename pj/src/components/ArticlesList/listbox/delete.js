import React  from "react";
import './delete.css';

function DeleteRaw ({data, onCancle}) {
    return (
        <>
            <div id="memo-what-for">
                <span>메모 삭제</span>
            </div>
            <div id="memo-del">메모를 삭제 하시겠습니까? ({data.title})</div>
            <div id="memo-button">
                <button id="memo-no-button" onClick={onCancle}>아니요</button>
                <button id="memo-yes-button" onClick={onCancle}>삭제할래요</button>
            </div>
        </>
    )

}

export default DeleteRaw;