// import React, { useEffect, useState } from 'react';
// import SpeakerSwipper from './SpeakerSwipper';

// const NewSpeakers = () => {
//     const [speakers, setSpeakers] = useState([]);
 
//     useEffect(() => {
//       fetch('sperkers.json')
//         .then((res) => res.json())
//         .then((data) => setSpeakers(data));
//     }, []);
//     return (
//         <div className='grid grid-cols-4 gap-4 space-y-4'>
//             {
//                 speakers.map((item)=><SpeakerSwipper key={item.Image} item={item}></SpeakerSwipper>)
//             }
//         </div>
//     );
// };

// export default NewSpeakers;

