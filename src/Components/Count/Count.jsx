import React from 'react';
import img from '../../assets/pexels-pixabay-416405.jpg'
import { FaBeer, FaBook, FaMicroblog, FaMicrophone, FaUser, FaWordpressSimple } from "react-icons/fa";
const Count = () => {
    return (
        <div className='my-20'>
            <div className='relative'>
                <img className='h-80 w-full object-cover opacity-20' src={img} alt="" />
                <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center '>
                    <div className='p-20 grid grid-cols-4 gap-5 text-white'>

                        <div className='flex justify-center items-center gap-5'>
                            
                        <FaUser className='text-5xl'></FaUser>
                           
                            <div>
                            <p className='font-2xl font-bold'>2000+</p>
                            <p>PARTICIPANTS</p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center gap-5'>
                            
                               <FaMicrophone className='text-5xl'></FaMicrophone> 
                           
                            <div>
                            <p className='font-2xl font-bold'>40+</p>
                            <p>Speakers</p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center gap-5'>
                            
                            <FaBook className='text-5xl'></FaBook>
                           
                            <div>
                            <p className='font-2xl font-bold'>30+</p>
                            <p>TOPICS</p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center gap-5'>
                            
                       
                            <FaBeer className='text-5xl'></FaBeer>
                            <div>
                            <p className='font-2xl font-bold'>40+</p>
                            <p>Countries</p>
                            </div>
                        </div>
                       
                        
                        
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Count;