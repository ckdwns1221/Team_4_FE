import React from "react";
import styled from "styled-components";
import './modal.css';

const Modalcard = styled.div`
    background-color: white;
    border-radius: 0.5rem;
    position: static;

    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;;

    margin: 15% auto; 

    .modal-header {
            display: flex;
            justify-content: space-between;
    }

    .modal-footer {
        display: flex;
        justify-content: flex-end;
}
`;
const ModalPage = (props) => {
    return (
        <div className="modal_" > 
            <Modalcard width={props.width} height={props.height}>{props.children}</Modalcard>
        </div> 
    );
}

export default ModalPage;