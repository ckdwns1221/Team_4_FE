import {React,useState,useEffect} from "react";
import './searchbox.css';
import ArticleRaw from "../../ArticlesList/listbox/article-raw";
import ModalPage from "../../ArticlesList/listbox/modal";
import Pagination from "../../pagination";
import data from '../../../db.json';

const SearchBox = ({searchkey}) => {
    // 필터
    const dataList = data.notes;
    const [searched, setSearched] = useState([]);
    // 모달
    const [isOpen, setIsOpen] = useState(false);
    const modalOpen = () => { setIsOpen(!isOpen); };
    const [index, setIndex] = useState();
    const cilckIndex = (c) => {setIndex(c);};
    //페이징
    const [posts, setPosts] = useState([]);
    const [limit, setLimit] = useState(12);
    const [page, setPage] = useState(1);

    useEffect(() => {
        // 검색어가 변경될 때마다 검색 결과 업데이트
        const newSearched = dataList.filter((item) =>
            item.title.toLowerCase().includes(searchkey.toLowerCase())
        );
        setSearched(newSearched);
    }, [searchkey, dataList]);

    useEffect(() => {
        // 검색 결과가 변경될 때마다 페이지를 1로 리셋
        setPage(1);
    }, [searched]);

    useEffect(() => {
        // 비동기 작업 (예: API 호출) 후 posts 설정
        setPosts(searched);
    }, [searched]);

    const offset = (page - 1) * limit;
    // const [postsNum, setPostNum] = useState(true);
    // if( posts.length == 0)
    //     setPostNum(!postsNum);

    return(
        <div className="list-container">
            <div className="posts-list">
                {posts.slice(offset, offset + limit).map((it,index) =>(
                    <div className="list" key={index}>
                        <button onClick={()=>{modalOpen(); cilckIndex(index);}} className="list-btn">
                            <p>사진</p>
                        </button>
                        <span id="list-box-title">{it.title}</span>
                        <span id="list-box-date">{it.date}</span>
                    </div>
                ))}
                {isOpen && posts[index]&& (
                    <ModalPage>
                        <ArticleRaw 
                            data = {posts[index]}
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
export default SearchBox;