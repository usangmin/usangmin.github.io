import { Link } from 'react-router-dom';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../css/ServiceSwiper.css';

interface serviceData{
    linkURL:string[],
    imgURL:string[],
    tagText?:string[],
    titleText?:string[],
    offerText?:string[]
    tagStyle?: React.CSSProperties,
    titleStyle?: React.CSSProperties,
    offerStyle?: React.CSSProperties,
}

function ServiceSwiper(props:serviceData){

    return(
        <div className='service'>
            <Swiper
                navigation
                modules={[Navigation]}
                slidesPerView={4}
                slidesPerGroup={2}
                spaceBetween={15}
                touchRatio={0}
                className = 'serviceSwiper'
                speed={500}
            >
                {props.linkURL.map((linkURL,index)=>(
                    <SwiperSlide key={index}>
                        <Link to={props.linkURL[index]}>
                            <img src={props.imgURL[index]} alt="slideimg" className='serviceImg'/>

                            {props.tagText? 
                                <p className='serviceTag' style={props.tagStyle}>
                                    {props.tagText[index].length < 30 ? 
                                        props.tagText[index] :
                                        props.tagText[index].substring(0,30) + "..."}
                                </p>:
                                null }

                            {props.titleText? 
                                <p className='serviceTitle' style = {props.titleStyle}>
                                    {props.titleText[index].length < 30 ? 
                                        props.titleText[index] :
                                        props.titleText[index].substring(0,30) + "..."}
                                </p>:
                                null }

                            {props.offerText? 
                                <p className='serviceOffer' style={props.offerStyle}>
                                    {props.offerText[index].length < 30 ? 
                                        props.offerText[index] :
                                        props.offerText[index].substring(0,30) + "..."}
                                </p>:
                                null }
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default ServiceSwiper;