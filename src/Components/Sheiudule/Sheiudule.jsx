// import React, { useEffect, useState } from 'react';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
// const Sheiudule = () => {

//     const [Sheiudule, setSheiudule] = useState([])
//     useEffect(() => {
//         fetch('new.json')
//             .then(res => res.json())
//             .then(data => setSheiudule(data))
//     }, [])

//     return (


//         <div className='container mx-auto py-20'>
//             <div className='my-5 text-white'>
//                 <p className='text-5xl font-bold text-center'>Event Schedules</p>
//                 <p className=' font-semibold text-center mt-5'>Do not miss it and be sure to attend</p>
//             </div>
//             <Tabs className='flex flex-col items-center my-10'>
//                 <TabList className='btn rounded-2xl '>
//                     <Tab className="btn border-none rounded-2xl " >Day 01</Tab>
//                     <Tab className="btn border-none rounded-2xl ">Day 02</Tab>
//                     <Tab className="btn border-none rounded-2xl ">Day 03</Tab>
//                     <Tab className="btn border-none rounded-2xl ">Day 04</Tab>

//                 </TabList>

//                 <TabPanel>
//                     <div className='flex justify-evenly gap-4'>
//                         <p></p>
//                         <img src={Sheiudule.Image} alt="" />
//                         <div className='flex gap-2'>
//                             <p>{Sheiudule.SpeakerName}</p>
//                             <p>ceo</p>
//                         </div>

                       
//                                 <p>topic</p>
                               
                       
//                     </div>
//                 </TabPanel>





//                 <TabPanel>
//                     <h2>Any content 2</h2>
//                 </TabPanel>
//                 <TabPanel>
//                     <h2>Any content 2</h2>
//                 </TabPanel>
//                 <TabPanel>
//                     <h2>Any content 2</h2>
//                 </TabPanel>
//             </Tabs>
//         </div>
//     );
// };

// export default Sheiudule;