import { useState } from "react";
import { Link } from "react-router-dom";
import GetData from "../getDataSrc/GetData";
import MainServiceListButton from "./MainServiceListButton";
import ServiceSwiper from "./ServiceSwiper";
import '../css/MainServiceList.css';


function MainServiceList(){

    const [activeButtonIndex,setActiveButtonIndex] = useState(0);
    const buttonTitles = [
        '나를위한고퀄사진',
        '감성스냅촬영',
        '나도가수다',
        '나의심리상태'];
    const [linkURL,imgURL,titleText,offerText] = GetData(buttonTitles[activeButtonIndex]);
    const offerStyle = {
        fontSize : '16px',
        fontWeight: '700'
    } as React.CSSProperties

    return(
        <div className="mainService">
            <p>지금 바로 원하는 서비스를 받아보세요!</p>
            <div>
                {buttonTitles.map((buttonTitle,index)=>(
                    <MainServiceListButton 
                        key={buttonTitle}
                        title={buttonTitle} 
                        buttonIndex={index}
                        activeButtonIndex={activeButtonIndex}
                        active={activeButtonIndex===index? true : false}
                        setActiveButtonIndex={setActiveButtonIndex}/>
                ))}
                <Link to='/'>
                    상품 더보기 {'>'}
                </Link>
            </div>
            <ServiceSwiper 
                linkURL={linkURL} 
                imgURL={imgURL}
                titleText={titleText}
                offerText={offerText}
                offerStyle={offerStyle}
            />
        </div>
    );
}

export default MainServiceList;