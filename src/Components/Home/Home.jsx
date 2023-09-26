import React, { useState } from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Speakers from '../Speakers/Speakers';
import { useLoaderData } from 'react-router-dom';
import SchedulePlan from '../SchedulePlan/SchedulePlan';
import Schedule from '../Schedule/Schedule';
import Ticket from '../Ticket/Ticket';
import Contactus from '../Contactus/Contactus';
import Blog from '../Blog/Blog';

const Home = () => {
    const sperkers=useLoaderData()
    const [datalength,setdatalength]=useState(6)
    console.log(sperkers);
    return (
        <div>
            <Banner></Banner>
            <About></About>

            <div className="space-y-3 text-white mt-5">
              <h1 className="text-3xl font-bold text-center">Our Speakers</h1>
            <h1 className="text-5xl font-bold text-center">WHO’S SPEAKING</h1>
            </div>
           <div className='grid grid-cols-3 gap-5 container mx-auto mt-8 pb-20'>
            
           {
                sperkers.slice(0,datalength). map((sperker,index)=><Speakers key={index} sperkers={sperker}></Speakers>)
            }
           </div>
          <div className='flex justify-center items-center mb-10'>
          <div className={datalength===sperkers.length && "hidden"}>
           <button onClick={()=> setdatalength(sperkers.length)} className='btn btn-secondary'>See All Speakers</button>
           </div>
          </div>

           <div className='bg-[#151853] pt-16 pb-16'>
           <div className="space-y-5 pt-8 pb-8 text-white mt-">
            <h1 className="text-3xl text-center">OUR TIMETABLE</h1>
            <h1 className="text-5xl font-bold text-center">SCHEDULE PLAN</h1>

          </div>
          {/* <Schedule></Schedule> */}
          <div className='space-y-5'>
          {
                sperkers.slice(0,5). map((sperker,index)=><Schedule  key={index} sperkers={sperker}></Schedule>)
            }
          </div>
           </div>


        





          <Ticket></Ticket>
         
          <Contactus></Contactus>
          
          
            




        </div>
    );
};

export default Home;