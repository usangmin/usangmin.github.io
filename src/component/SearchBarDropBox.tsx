import { useState } from "react";
import { Link } from "react-router-dom";

interface data{
    keywords:string[]
    searchRef:React.RefObject<HTMLInputElement>
    searchBarOff: ()=> void;
}

function DropBox(props:data){

    const [tapNav,setTapNav] = useState(true);
    const [searchLog,setSeatchLog] = useState<string[]>([]);

    const BlurSearchBar = function(){
        props.searchBarOff();
    }

    const tapNavT = function(){
        setTapNav(true);
        props.searchRef.current?.focus();
    }

    const tapNavF = function(){
        setTapNav(false);
        props.searchRef.current?.focus();
    }

    const clearLog = function(){
        setSeatchLog([]);
    }

    return(
        <div className='dropBox'>
            <div className="dropBoxBody">
                <ul className='tapNav'>
                    <li onClick={tapNavT} className={`${tapNav?'active':''}`}>인기 키워드</li>
                    <li onClick={tapNavF} className={`${tapNav?'':'active'}`}>최근 검색한 서비스</li>
                </ul>

                {tapNav? 
                    <ul className="keywords">
                    {props.keywords.map(
                        (keyword) => (
                        <li key={keyword}>
                            <Link to='/'>
                                {keyword}
                            </Link>
                        </li>
                    ))}
                    </ul> :
                    <ul className="keywords">
                    {searchLog.map(
                        (Log) => (
                        <li key={Log}>
                            <Link to='/'>
                                {Log}
                            </Link>
                        </li>
                    ))}
                    </ul>
                }
                


            </div>
            <div className='dropBoxFooter'>
                {tapNav? null : <div className="deleteAll" onClick={clearLog}>전체 삭제</div>}
                <div onClick={BlurSearchBar} className='closeDropBox'>닫기</div>
            </div>
        </div>
    );
}

export default DropBox;