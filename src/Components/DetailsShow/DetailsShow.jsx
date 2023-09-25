import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
const DetailsShow = ({show}) => {
    const {id,SpeakerName,FacebookLink,Profession, Email, ConferencePlace,Topic, Country,Date,Image}=show || {}
    return (
        <div className='h-screen items-center flex justify-center'>
            
            {/* <div classNameName="card flex-row w-96 justify-center  bg-base-100 shadow-xl">

<div>
<figure><img classNameName='w-96' src={Image} alt="Shoes" /></figure>
</div>

<div classNameName="card-body">
  <h2 classNameName="card-title">
   {SpeakerName}
   
  </h2>
  <p>{ConferencePlace}</p>
  <div classNameName="card-actions justify-end">
    <div classNameName="badge badge-outline">Fashion</div> 
    <div classNameName="badge badge-outline">Products</div>
  </div>
</div>
</div> */}

<div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
    <img
      src={Image}
      alt="image"
      className="h-full w-full object-cover"
    />
  </div>
  <div className="p-6">
    <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
     Name: {SpeakerName}
    </h6>

    {/* <h4 className="mb-2 flex items-center gap-3 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg> 
      {ConferencePlace}
    </h4> */}

        {/* <div className='flex items-center gap-3 text-2xl'>
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"/></svg>
        <h1 className='text-2xl font-bold'>{Date}</h1>
        </div> */}










    <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
      Like so many organizations these days, Autodesk is a company in
      transition. It was until recently a traditional boxed software company
      selling licenses. Yet its own business model disruption is only part of
      the story
    </p>
    <h1 className='text-2xl font-semibold'> Profession: {Profession}</h1>

    <h1 className='text-2xl font-semibold'> Country: {Country}</h1>
    <div className="flex justify-center gap-7 p-6 pt-2 text-3xl">
  
  <a className='hover:bg-blue-400 p-4 rounded-xl' href={`${Email}`}>
  <FontAwesomeIcon icon={faEnvelope} />
  </a>
 <a className='hover:bg-blue-400 p-4 rounded-xl' href={`${FacebookLink}`}>
 <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>
 </a>
    
  </div>
  </div>
</div>






            </div>
        
    );
};

export default DetailsShow;