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
import Explore from '../Explore-Categories/Explore';
import Count from '../Count/Count';
import Extra from '../Extra/Extra';


const Home = () => {





  const sperkers = useLoaderData()
  const [datalength, setdatalength] = useState(6)
  console.log(sperkers);




  return (


    <div>
      <Banner></Banner>
      <About></About>

      <div className="space-y-3 text-white my-15">
        <h1 className="text-3xl font-bold text-center pt-10">Our Speakers</h1>
        <h1 className="text-5xl font-bold text-center">WHO’S SPEAKING</h1>
      </div>
      <div className='grid lg:grid-cols-3 gap-5 container mx-auto py-20 '>

        {
          sperkers.slice(0, datalength).map((sperker, index) => <Speakers key={index} sperkers={sperker}></Speakers>)
        }
      </div>


      <div className='flex justify-center items-center mb-10'>
        <div className={datalength === sperkers.length && "hidden"}>

          <button onClick={() => setdatalength(sperkers.length)} className='btn btn-ghost bg-red-700 text-white'>See All Speakers</button>

        </div>
      </div>

      <div>
        <Count></Count>
      </div>





      

      <Explore></Explore>


      {/* shedule */}
      <div className='bg-[#171717] pt-16 pb-16'>
        <div className="space-y-5 pt-8 pb-8 text-white mt-">
          <h1 className="text-3xl text-center">OUR TIMETABLE</h1>
          <h1 className="text-5xl font-bold text-center">SCHEDULE PLAN</h1>

        </div>
        {/* <Schedule></Schedule> */}
        <div className='space-y-5'>
          {
            sperkers.slice(0, 5).map((sperker, index) => <Schedule key={index} sperkers={sperker}></Schedule>)
          }
        </div>
      </div>



              <Extra></Extra>


      <Contactus></Contactus>









    </div>
  );
};

export default Home;