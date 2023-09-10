import ServiceSwiper from "./ServiceSwiper";
import style from '../css/text.module.css';

function Hobby(){
    const linkURL=['/','/','/','/','/','/'];
    const imgURL=[
        'img/hobby1.png',
        'img/hobby2.png',
        'img/hobby3.png',
        'img/hobby4.png',
        'img/hobby5.png',
        'img/hobby6.png'];
    const hobbyTitle = [
        '보컬레슨',
        '골프 레슨',
        '피아노/키보드 레슨',
        '미술 회화 레슨',
        '기타 레슨',
        '방송댄스 레슨'];

    return(
        <div>
            <p className={style.text}>취미의 재발견</p>
            <ServiceSwiper linkURL={linkURL} imgURL={imgURL} titleText={hobbyTitle}/>
        </div>
    );
}

export default Hobby;