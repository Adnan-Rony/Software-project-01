import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';


const Speakers = ({ sperkers }) => {
  const { id, SpeakerName, FacebookLink, Email, ConferencePlace, Topic, Date, Image } = sperkers
  return (
    <div >

      
      <Link to={`/speakersDetails/${id}`}>
       
          <div className='flex-row justify-center items-center  p-10 hover:border  '>
          <img className='w-[360px] h-[360px] rounded-full mx-auto' src={Image} alt="Speaker" />
          <h1 className='text-center text-white text-xl font-bold mt-5 '>{SpeakerName}</h1>
          </div>
         
      
      </Link>



    </div>
  );
};

export default Speakers;