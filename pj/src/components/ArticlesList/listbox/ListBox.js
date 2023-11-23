import {React,useState} from "react";
import './ListBox.css';
import data from '../../../db.json';
import ArticleRaw from "./article-raw";
import ModalPage from "./modal";

const ListBox = () => {
    const dataList = data.notes ;
    const [isOpen, setIsOpen] = useState(false);
    const modalOpen = () => { setIsOpen(!isOpen); };
    const [index, setIndex] = useState();
    const cilckIndex = (c) => {setIndex(c);};
    console.log(dataList);
    return(
        <div className="list-container">
            {/* <Link to='/type-select/file'>
                <button className="type-box-1">
                    <p>파일</p>
                </button>
            </Link> */}
            {dataList.map((it,index) =>(
                <div className="list" key={index}>
                    <button onClick={()=>{modalOpen(); cilckIndex(index);}} className="list-btn">
                        <p>사진</p>
                    </button>
                    <span id="list-box-title">{it.title}</span>
                    <span id="list-box-date">{it.date}</span>
                </div>
            ))}
            {isOpen && dataList[index]&& (
                <ModalPage>
                    <ArticleRaw 
                        data = {dataList[index]}
                        onCancle={modalOpen}
                    />
                </ModalPage>
            )}
        </div>
    )
}
export default ListBox;