import React from 'react';

const Header = () => {
    return (
        <section>
            <div className="intro">
                <p>서비스에 대한 간단한 설명</p>
            </div>
            <div className="actions">
                <input type="text" placeholder="검색" />
                <input type="submit" value="검색"></input>
                <button>글쓰기</button>
            </div>
        </section>
    );
};

export default Header;