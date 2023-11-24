import {React,useState,useEffect} from "react";
import './ListBox.css';
import data from '../../../db.json';
import ArticleRaw from "./article-raw";
import ModalPage from "./modal";
import Pagination from "../../pagination";
import heart from '../../../images/Ic_Heart.png';
import heart_filled from '../../../images/Ic_Heart_Filled.png';

const ListBox = ({category}) => {
    // 모달
    const dataList = data.notes ;
    const [isOpen, setIsOpen] = useState(false);
    const modalOpen = () => { setIsOpen(!isOpen); };
    const [index, setIndex] = useState();
    const cilckIndex = (c) => {setIndex(c);};
    //페이징
    const [posts, setPosts] = useState([]);
    const [limit, setLimit] = useState(12);
    const [page, setPage] = useState(1);

    useEffect(() => {
        // 비동기 작업 (예: API 호출) 후 posts 설정
        setPosts(dataList);
    }, []); 
    console.log(posts); 

    const offset = (page - 1) * limit;

    return(
        <div className="list-container">
            <div className="posts-list">
                {posts.slice(offset, offset + limit).map((it,index) =>(
                    <div className="list" key={index} onClick={()=>{modalOpen(); cilckIndex(index);}}>
                        <button className="list-btn">
                            <p>사진</p>
                        </button>
                        <div id="title_heart">
                            <span id="list-box-title">{it.title}</span>
                            <img id="heart" src={it.like?heart:heart_filled} alt="찜"/>
                        </div>
                        <span id="list-box-date">{it.date}</span>
                    </div>
                ))}
                {isOpen && dataList[index]&& (
                    <ModalPage width={550} height={380}>
                        <ArticleRaw 
                            data = {dataList[index]}
                            onCancle={modalOpen}
                        />
                    </ModalPage>
                )}

            </div>

            <Pagination
                    total={posts.length}
                    limit={limit}
                    page={page}
                    setPage={setPage}
            />
        </div>
        
    )
}
export default ListBox;