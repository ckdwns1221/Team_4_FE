import { useParams,useLocation } from 'react-router-dom';
import './SearchPage.css';
import SHeader from '../../components/SearchPage/SearchHeader';
import Footer from '../../components/Footer';
import SearchBox from '../../components/SearchPage/searchbox/searchbox';

function SearchPage() {
    const location = useLocation();
    const searchkey= location.state.search ;
    return (
        <>
            <div className='display-container'>
                <div className='mainWrap'>
                    <SHeader searchkey={searchkey}/>
                    <main className='sp-main'>
                        <SearchBox searchkey={searchkey}/>
                    </main>
                </div>
                <Footer/>
            </div>
        </>
        
        
    );
  }
  
  export default SearchPage;