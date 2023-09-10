import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import '../css/SignUpPro.css';


function SignUpPro(){
    return(
        <div className='inner signUpPro'>
            <div className='header'>
                <p>
                전문가로 활동하시나요?<br/>숨고에서 새로운 고객을<br/> 만나보세요
                </p>
                <button>
                    <Link to='/'>
                        고수가입
                    </Link>
                </button>
            </div>
            <Swiper
                modules={[Pagination, Navigation]}
                navigation
                pagination={{
                    clickable: true,
                }}
                centeredSlides = {true}
                touchRatio={0}
            >
                <SwiperSlide>
                    <img src="img/img-main-signup-pro-step-1.png" alt="" className='signUpImg'/>
                    <p className='desc'>고객의 요청서를 무료로 받으세요</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="img/img-main-signup-pro-step-2.png" alt="" className='signUpImg'/>
                    <p className='desc'>조건이 맞는 고객에게 견적을 보내세요</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="img/img-main-signup-pro-step-3.png" alt="" className='signUpImg'/>
                    <p className='desc'>채팅, 전화로 빠르게 상담하고 거래하세요</p>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default SignUpPro;