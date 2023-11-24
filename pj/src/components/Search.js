import './Search.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Search() {     
    const movePage = useNavigate();
    const [search, setSearch] = useState("");
    const onChange = (e) => {
        setSearch(e.target.value)
    }

    function moveScrapSearch() {
        movePage('/search', {state:{search:search}});
    }  
    return (
        
        <div className='h-searchbarWrap'>
            <div className='h-searchBtn' onClick={moveScrapSearch}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
            <input type='text' placeholder='파일 검색' value={search} onChange={onChange}/>
        </div>
    );
}
    
export default Search;


