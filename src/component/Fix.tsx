import ServiceSwiper from "./ServiceSwiper";
import style from '../css/text.module.css';

function Fix(){
    const linkURL=['/','/','/','/','/','/'];
    const imgURL=[
        'img/fix1.jpg',
        'img/fix2.jpg',
        'img/fix3.jpg',
        'img/fix4.jpg',
        'img/fix5.jpg',
        'img/fix6.png'];
    const fixTitle = [
        '전기 배선 설치 및 수리',
        '블라인드/커튼 제작/설치/수리',
        '문 설치 및 수리',
        '벽걸이TV 설치 및 철거',
        '휴대폰/태블릿/스마트기기 수리',
        '에어컨 설치 및 수리'];

    return(
        <div>
            <p className={style.text}>무엇이든 고치는 고수들</p>
            <ServiceSwiper linkURL={linkURL} imgURL={imgURL} titleText={fixTitle}/>
        </div>
    );
}

export default Fix;