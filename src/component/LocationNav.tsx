import { Link } from "react-router-dom";
import '../css/LocationNav.css';

function LocationNav(){
    const locations = ['서울','세종','강원','인천','경기','충북','충남','경북','대전','대구','전북','경남','울산','광주','부산','전남','제주'];
    const locationURL=['/','/','/','/','/','/','/','/','/','/','/','/','/','/','/','/','/'];
    
    return(
        <div className="inner locationGroup">
            <div className="locationHeader">
                <p>전국 숨은고수</p>
                <p>믿을 수 있는 전문가를 <br />숨고 단 한곳에서 찾으세요</p>
            </div>
            <ul className="locationList">
                {locations.map((location,index)=>(
                    <li key={location}>
                        <Link to={locationURL[index]}>
                            {location}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default LocationNav;