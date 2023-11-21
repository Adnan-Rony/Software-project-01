import React from 'react';
import image1 from '../../assets/alexandre-pellaes-6vAjp0pscX0-unsplash.jpg'
import image2 from '../../assets/headway-F2KRf_QfCqw-unsplash.jpg'
import image3 from '../../assets/teemu-paananen-bzdhc5b3Bxs-unsplash.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const Banner = () => {
    return (
        <div className=''>





            {/* <div className="carousel w-full h-[600px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={image1} className="w-full rounded-xl" />
                    <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 pl-12 w-1/2'>
                            <h2 className='lg:text-6xl font-bold'>Bringing together brilliant minds to share ideas and shape the future</h2>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className="btn btn-primary mr-5">Details</button>
                                <Link to={`ticket`}>
                                <button className="btn btn-outline btn-ghost bg-red-700 text-white border-none">BUY TICKET</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle mr-5 hover:bg-red-700 hover:text-white">❮</a>
                        <a href="#slide2" className="btn btn-circle  hover:bg-red-700 hover:text-white">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={image2} className="w-full rounded-xl" />
                    <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 pl-12 w-1/2'>
                            <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className="btn btn-primary mr-5">Details</button>
                                <Link to={`ticket`}>
                                <button className="btn btn-outline btn-ghost bg-red-700 text-white border-none">BUY TICKET</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle mr-5  hover:bg-red-700 hover:text-white">❮</a>
                        <a href="#slide3" className="btn btn-circle  hover:bg-red-700 hover:text-white">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={image3} className="w-full rounded-xl" />
                    <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 pl-12 w-1/2'>
                            <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className="btn btn-primary mr-5">Details</button>
                                <Link to={`ticket`}>
                                <button className="btn btn-outline btn-ghost bg-red-700 text-white border-none">BUY TICKET</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide2" className="btn btn-circle mr-5  hover:bg-red-700 hover:text-white">❮</a>
                        <a href="#slide4" className="btn btn-circle  hover:bg-red-700 hover:text-white">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={image1} className="w-full rounded-xl" />
                    <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 pl-12 w-1/2'>
                            <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className="btn btn-primary mr-5">Details</button>
                                <Link to={`ticket`}>
                                <button className="btn btn-outline btn-ghost bg-red-700 text-white border-none">BUY TICKET</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide3" className="btn btn-circle mr-5  hover:bg-red-700 hover:text-white">❮</a>
                        <a href="#slide1" className="btn btn-circle  hover:bg-red-700 hover:text-white">❯</a>
                    </div>
                </div>
            </div> */}

            <div className=''>
                <Carousel className='text-center' >
                    <div>
                        <img src={image1} />

                    </div>
                    <div>
                        <img src={image2} />

                    </div>
                    <div>
                        <img src={image3} />

                    </div>
                    <div>
                        <img src={image1} />

                    </div>
                    <div>
                        <img src={image2} />

                    </div>
                    <div>
                        <img src={image3} />

                    </div>
                </Carousel>
            </div>

        </div>
    );
};

export default Banner;