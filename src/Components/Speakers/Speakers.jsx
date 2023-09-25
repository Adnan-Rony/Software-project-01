import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Speker from '../Speker/Speker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Speakers = ({sperkers}) => {
    const {id,SpeakerName,FacebookLink,Email, ConferencePlace,Topic,Date,Image}=sperkers
    return (
        <div >
            
           <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
    <img className='w-full' src={Image} />
  </div>
  <div className="p-6 text-center">
    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
     {SpeakerName}
    </h4>
    
  </div>
  


  <Link to={`/speakersDetails/${id}`}>
  <button className='btn w-full   bg-black text-white hover:bg-blue-500'>Details</button>
  </Link>



</div>
        
        </div>
    );
};

export default Speakers;