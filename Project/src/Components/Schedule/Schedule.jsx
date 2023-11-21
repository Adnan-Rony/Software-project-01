import React from 'react';
import { Link } from 'react-router-dom';

const Schedule = ({sperkers}) => {
    const {id,SpeakerName,FacebookLink,Email, ConferencePlace,Topic,Date,Image}=sperkers





    return (
        <div >
            <div className="border container mx-auto rounded-xl p-6 flex gap-3 text-white justify-around">
             
             <div className=" flex gap-4">
               <div>
                 <img  className='w-[70px] rounded-full' src={Image} alt=""/>
               </div>
               <div>
                 <h1 className="text-xl font-semibold">{Topic}</h1>
               <p> by {SpeakerName}</p>
               </div>
             </div>
             <div>
               <i className="fa-solid fa-clock"></i> 
               <span>{Date}</span> <br/>
               <i className="fa-solid fa-map"></i>
               <span>{ConferencePlace}</span>
             </div>
             <div>
               <Link to={`/SchedulePlan/${id}`}>
               <button className="btn hover:bg-blue-500 bg-black text-white">VIEW MORE</button>
               </Link>
             </div>


           </div>
        </div>
    );
};

export default Schedule;