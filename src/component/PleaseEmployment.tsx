import ServiceSwiper from "./ServiceSwiper";
import style from '../css/text.module.css';

function PleaseEmployment(){
    const linkURL=['/','/','/','/','/','/'];
    const imgURL=[
        'img/employ1.png',
        'img/employ2.jpg',
        'img/employ3.jpg',
        'img/employ4.jpg',
        'img/employ5.jpg',
        'img/employ6.jpg'];
    const employTitle = [
        '이력서/자소서 컨설팅',
        '면접 컨설팅',
        '취업 컨설팅',
        '스프치 컨설팅',
        '컴퓨터 활용 레슨',
        'TOEIC/speaking/writing 과외'];

    return(
        <div>
            <p className={style.text}>2022 취준을 부탁해</p>
            <ServiceSwiper linkURL={linkURL} imgURL={imgURL} titleText={employTitle}/>
        </div>
    );
}

export default PleaseEmployment;