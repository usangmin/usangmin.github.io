import { Link } from "react-router-dom";
import '../css/Minibanner.css'


function Minibanner(){

    return(
        <div className="inner Minibanner">
            <Link to='/'>
                <p>VOD</p>
                <p>숨고 클래스</p>
                <img src="img/vod-img.svg" alt="vod이미지" />
            </Link>
            <Link to='/'>
                <p>서비스상품</p>
                <p>바로구매</p>
                <img src="img/buy-img.svg" alt="바로구매이미지" />
            </Link>
        </div>
    );
}

export default Minibanner;