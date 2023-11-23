import React from "react";
import './modal.css';
const ModalPage = (props) => {
    return (
        <div className="modal_" > 
            <div className="modal-card">{props.children}</div>
        </div> 
        
    );
}

export default ModalPage;