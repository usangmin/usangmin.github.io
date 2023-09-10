import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../css/Swiper.css';

function SwiperContainer(){
    const imgs = [
        'img/banner-1.png',
        'img/banner-2.png',
        'img/banner-3.png',
        'img/banner-4.png',
        'img/banner-5.png',
        'img/banner-6.png',
        'img/banner-7.png'];

    return(
        <Swiper
            pagination={{
            type: "fraction",
            }}
            navigation={true}
            modules={[Pagination, Navigation, Autoplay]}
            autoplay ={{
                delay:3000,
            }}
            loop = {true}
            className = 'bannerswiper'
            touchRatio={0}
        >
            {imgs.map((img,index) =>(
                <SwiperSlide key={index}>
                    <Link to='/'>
                        <img src={img} alt='슬라이드' style={{width:'970px'}}/>
                    </Link>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default SwiperContainer;