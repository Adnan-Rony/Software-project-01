
import React, { useState } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';


const Extra = () => {
    const [review, setreview] = useState([])

    useState(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setreview(data))
    }, [])

    return (
        <div className='my-20 '>
            <div className='text-center  my-10'>
                <p className='text-5xl font-bold text-white'> What Our Attendees Are Saying</p>
            </div>
            <div className='my-10 w-1/2 mx-auto'>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper text-white">

                    {
                        review.map((review, index) => <SwiperSlide key={index}>
                            <div className='m-24 flex flex-col items-center space-y-4'>
                            

                                <p>{review.details}</p>
                                <h2 className='text-2xl text-bold'>{review.name}</h2>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Extra;