import { Link } from 'react-router-dom';

import Search from "./Search";
import HeadNav from "./HeadNav";
import '../css/Head.css';

function Head(){

    return(
        <header>
            <div className='inner head'>
                <div className='leftsection' style={{display:'flex'}}>
                    <Link to={'/'} className='link'>
                        <img src="img/logo.svg" alt="로고" className='logoimg'/>
                    </Link>
                <Search />
                </div>
                <div className='rightsection'>
                    <HeadNav />
                </div>
            </div>
        </header>
    );
}

export default Head;
