import './ArticlesList.css';
import LBar from '../../components/ArticlesList/bar/bar';
import ListBox from '../../components/ArticlesList/listbox/ListBox';
import Footer from '../../components/Footer';
import { useParams } from 'react-router-dom';


function ArticlesList() {
    let { type } = useParams();
    return (
        <div className="display-container">
            <div className='mainWrap'>
                <LBar type={type}/>
                    <main>
                        <ListBox/>
                    </main>
            </div>
            <Footer/>
        </div>
    );
  }
  
  export default ArticlesList;