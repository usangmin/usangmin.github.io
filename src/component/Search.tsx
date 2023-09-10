import { useRef, useState } from "react";
import DropBox from "./SearchBarDropBox";

function Search(){
    const keywords = ['영어 과외','PT','보컬레슨','리모델링','시공','수리','인테리어','과외','골프 레슨','수도 설치'];

    const [serachBarFocus, setSearchBarFocus] = useState(false);

    const searchBarOn = function(){
        setSearchBarFocus(true);
    }

    const searchBarOff = function(){
        setSearchBarFocus(false);
    }

    const searchRef = useRef<HTMLInputElement>(null);

    return(
        <div className='search'
        // onFocus={searchBarOn} onBlur={searchBarOff}
        >
            <div className="inputSearch">
                <img src="img/search.svg" alt="검색" />
            </div>
            <input 
                ref={searchRef}
                type={'text'}
                placeholder={'어떤 서비스가 필요하세요?'}
                className='searchBar'
                onFocus={searchBarOn}
            />
            {/* <DropBox keywords={keywords} searchRef={searchRef}/> */}
            {serachBarFocus? <DropBox keywords={keywords} searchRef={searchRef} searchBarOff={searchBarOff}/>:null}
        </div>
    );
}

export default Search;