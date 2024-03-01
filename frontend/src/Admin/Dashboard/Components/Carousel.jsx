import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import slider1 from '/src/assets/images/back.jpg';
import slider2 from '/src/assets/images/back1.jpg';
import slider3 from '/src/assets/images/back3.jpg';
import slider4 from '/src/assets/images/back3.jpg';
import slider5 from '/src/assets/images/back4.jpg';

function Carousel() {
    const slideStyles = {
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '',
        minHeight: '600px',
        width:'100%'

    };
    return (
        <>
            <div className="swiper-container">
                <Swiper style={{height:600,width:'100%'}}
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                        spaceBetween={50}
                        slidesPerView={1}
                        autoplay={{delay: 4000}}
                        navigation
                        pagination={{clickable: true}}
                        scrollbar={{draggable: true}}
                >
                    <SwiperSlide style={{...slideStyles, backgroundImage: `url(${slider1})`, height: '100%'}}>
                        <div className="hero min-h-screen flex items-center justify-center">
                            {/*<div className="text-white text-center">*/}
                            {/*    <h1 className="text-6xl font-bold"><span className="text-[#82b041]">Abroad Dreams</span> is Where Your Journey Begins</h1>*/}
                            {/*    <p className="py-6 text-xl">Start your journey in the world of abroad studies. Browse and Discover with Ease.</p>*/}
                            {/*</div>*/}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide style={{...slideStyles, backgroundImage: `url(${slider2})`, height: '100%'}}>
                        <div className="hero min-h-screen flex items-center justify-center">
                            {/*<div className="text-white text-center">*/}
                            {/*    <h1 className="text-6xl font-bold"><span className="text-[#82b041]">Abroad Dreams</span> is Your Passport to a World of Education</h1>*/}
                            {/*    <p className="py-6 text-xl">Your One-Stop Solution for Managing Profiles Online.</p>*/}
                            {/*</div>*/}
                            <button className={"btn-style"}>
                                View More
                            </button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide style={{...slideStyles, backgroundImage: `url(${slider3})`, height: '100%'}}>
                        <div className="hero min-h-screen flex items-center justify-center">
                            <div className="text-white text-center">
                                <h1 className="text-6xl font-bold"><span className="text-[#82b041]"></span> </h1>
                                <p className="py-6 text-xl"></p>
                            </div>
                        </div>
                    </SwiperSlide>  <SwiperSlide style={{...slideStyles, backgroundImage: `url(${slider4})`, height: '100%'}}>
                    <div className="hero min-h-screen flex items-center justify-center">
                        {/*<div className="text-white text-center">*/}
                        {/*    <h1 className="text-6xl font-bold"><span className="text-[#82b041]">Abroad Dreams</span> is Your Key to the Career Aim of Tomorrow</h1>*/}
                        {/*    <p className="py-6 text-xl">Experience Modern Application Management.</p>*/}
                        {/*</div>*/}
                    </div>
                </SwiperSlide>  <SwiperSlide style={{...slideStyles, backgroundImage: `url(${slider5})`, height: '100%'}}>
                    <div className="hero min-h-screen flex items-center justify-center">
                        {/*<div className="text-white text-center">*/}
                        {/*    <h1 className="text-6xl font-bold"><span className="text-[#82b041]">Abroad Dreams</span> is Your Key to the Career Aim of Tomorrow</h1>*/}
                        {/*    <p className="py-6 text-xl">Experience Modern Application Management.</p>*/}
                        {/*</div>*/}
                    </div>
                </SwiperSlide>
                </Swiper>
            </div>
        </>

    );
}

export default Carousel;
