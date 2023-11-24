import React from 'react';
import '../css/Sharepage.css';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ListShareBox from '../components/ArticlesList/listbox/ListShareBox';

function SharePage() {
    return (
        <div className="display-container">
            <Navbar />
            <div className="sharePage-container">
                <ListShareBox />
            </div>
            <Footer />
        </div>
    );
}

export default SharePage;