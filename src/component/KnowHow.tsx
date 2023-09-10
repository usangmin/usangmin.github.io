import { Link } from "react-router-dom";
import ServiceSwiper from "./ServiceSwiper";
import style from '../css/KnowHow.module.css';


function KnowHow(){

    const linkURL=['/','/','/','/','/','/','/','/'];
    const imgURL=[
        'img/knowHow_study.png',
        'img/knowHow_artTherapy.png',
        'img/knowHow_vocalLesson.png',
        'img/knowHow_carInsurance.png',
        'img/knowHow_floorConstruction.jpeg',
        'img/knowHow_sewerCleaning.jpeg',
        'img/knowHow_weddingPhotography.png',
        'img/knowHow_domesticTravel.jpg'];
    const tagText=[
        '자기주도학습 코칭',
        '미술치료',
        '보컬 레슨',
        '자동차 보험',
        '에폭시 바닥 시공',
        '하구수 청소',
        '웨딩 스냅 촬영',
        '국내 여행'];
    const titleText=[
        '자기주도학습, 쉽게 시작하는 방법',
        '아이의 마을을 여는 미술 치료',
        '좋은 발성은 돈을 불러온다',
        '자동차 보험 가입 전 알아둘 사항',
        '옥상 방수, 우레탄과 무기질 뭐가 좋을까?',
        '하수구, 변기 막힘 원인과 예방 방법',
        '제주 웨딩스냅, 이것만큼은 알아두세요!',
        '패러글라이딩에 대하 알아보자!'];
    const offerText=[
        '1st 과외',
        '김현성',
        '김규리',
        '임순배 손해사정사',
        'gg그링환경-외벽.옥상방수.에폭시 전문',
        '배관전문설비1위업체 이진수',
        '재나스냅',
        '차우성'];


    return(
        <div className="knowHow">
            <div className="inner">
                <p className={style.knowhow}>고수의 노하우</p>
                <Link to='/' className={style.link}>
                    <p>고수의 노하우 홈 가기 {">"}</p>
                </Link>
            </div>
            <ServiceSwiper linkURL={linkURL} imgURL={imgURL} tagText={tagText} titleText={titleText} offerText={offerText}/>
        </div>
    );
}

export default KnowHow;