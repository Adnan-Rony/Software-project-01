import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';

const Explore = () => {


    return (
        <div className='container mx-auto my-20'>
           
            <h1 className='text-5xl font-semibold text-center my-10'>Explore <span className='text-red-700'>Categories</span></h1>

            <Swiper
                slidesPerView={3}
                spaceBetween={4}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
               


                <SwiperSlide>  <img
                        src="https://i.ibb.co/58y9Skr/prg-lichttechnik-0051-600x269px.jpg"
                        alt=""
                        className="w-full h-96 object-cover rounded-xl"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-70"></div>
                    <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white text-3xl font-semibold">
                    TECHNOLOGY  <br />EVENT
                    </p>

                </SwiperSlide>
                <SwiperSlide> <img
                        src="https://i.ibb.co/BzwH5JR/sports-istock.jpg"
                        alt=""
                        className="w-full h-96 object-cover rounded-xl"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-70"></div>
                    <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white text-3xl font-semibold">
                    SPORTS  <br />EVENT</p>


                </SwiperSlide>
                <SwiperSlide>  <div className="relative">
                    <img
                        src="https://i.ibb.co/kD7V22P/art-basel-miami.jpg"
                        alt=""
                        className="w-full h-96 object-cover rounded-xl"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-70"></div>
                    <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white text-3xl font-semibold">
                    ART  <br />EVENT</p>
                </div>

                </SwiperSlide>
                <SwiperSlide>
                <img
                        src="https://i.ibb.co/NNsKKm1/Double-Image-Incentive-600x438.jpg"
                        alt=""
                        className="w-full h-96 object-cover rounded-xl"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-70"></div>
                    <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white text-3xl font-semibold">
                        TRAVEL <br /> EVENT
                    </p>



                </SwiperSlide>
                <SwiperSlide>  <div className="relative">
                    <img
                        src="https://i.ibb.co/HXMBpk2/top-global-business-events.jpg"
                        alt=""
                        className="w-full h-96 object-cover rounded-xl"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-70"></div>
                    <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white text-3xl font-semibold">
                    BUSINESS  <br />EVENT</p>
                </div>

                </SwiperSlide>
                <SwiperSlide>  <div className="relative">
                    <img
                        src="https://i.ibb.co/wpHMPrw/i-Stock-1416653793-1.jpg"
                        alt=""
                        className="w-full h-96 object-cover rounded-xl"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-70"></div>
                    <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white text-3xl font-semibold">
                    EDUCATION  <br />EVENT</p>
                </div>

                </SwiperSlide>

            </Swiper>





        </div>

    );
};

export default Explore;