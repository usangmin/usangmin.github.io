import { Link } from "react-router-dom";

function HeadNav(){
    return(
        <div className='headNav'>
            <ul className='navList'>
                <li>
                    <Link to='/'>
                        고수찾기
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        마켓
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        로그인
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        회원가입
                    </Link>
                </li>
            </ul>
            <button className="signIn">
                <Link to='/'>
                    고수가입
                </Link>
            </button>
        </div>
    );
}

export default HeadNav;