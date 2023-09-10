import ServiceSwiper from "./ServiceSwiper";
import style from '../css/text.module.css';

function Cleaning(){
    const linkURL=['/','/','/','/','/','/'];
    const imgURL=[
        'img/clean1.png',
        'img/clean2.jpg',
        'img/clean3.png',
        'img/clean4.png',
        'img/clean5.png',
        'img/clean6.png'];
    const cleaningTitle = [
        '입사/이주 청소 업체',
        '출장 세차',
        '정리수납 컨설팅',
        '세탁기 청소',
        '곰팡이 제거',
        '침대/매트릭스 청소'];

    return(
        <div>
            <p className={style.text}>쓱싹쓱싹 청소하는날</p>
            <ServiceSwiper linkURL={linkURL} imgURL={imgURL} titleText={cleaningTitle}/>
        </div>
    );
}

export default Cleaning;