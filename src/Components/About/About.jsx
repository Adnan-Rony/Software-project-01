import React from 'react';
import img from '../../assets/205970_175.jpg'


const About = () => {


  return (


    // <div>
    //   <div className=" bg-[#171717] ">


    //     <div className="container mx-auto">

    //       <div className="flex lg:flex-row flex-col gap-10 justify-between text-white py-16 ">


    //         <div>

    //           <img src={img} alt="" className="rounded-md" />


    //         </div>


    //         <div className="space-y-3">

    //           <h1 className="text-4xl font-bold">About Conference</h1>
    //           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis quam malesuada <br /> scelerisque ultrices gravida lobortis ac. Et vitae, et aliquam sed. </p>


    //           <button className="btn  btn-ghost bg-[#171717]"> INTERESTED -</button>
    //           <div className="flex gap-3 items-center">

    //             <div className="space-y-4">

    //               <p className="font-bold">COUNT EVERY SECOND <br /> UNTIL THE EVENT</p>
    //             </div>


    //             {/* <div className="flex ">
    //               <div className="border h-[100px] w-[100px] p-5 m-4">
    //                 <span><p className="text-center font-bold text-2xl">00</p> <p>Months</p></span>

    //               </div>
    //               <div className="border h-[100px] w-[100px] p-5 m-4">
    //                 <span><p className="text-center font-bold text-2xl">00</p> <p className="text-center">Days</p></span>

    //               </div>
    //               <div className="border h-[100px] w-[100px] p-5 m-4">
    //                 <span><p className="text-center font-bold text-2xl">00</p> <p className="text-center">Hours</p></span>

    //               </div>

    //             </div> */}
    //             <div>
    //               <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
    //                 <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    //                   <span className="countdown font-mono text-5xl">
    //                     <span style={{ "--value": 15 }}></span>
    //                   </span>
    //                   days
    //                 </div>
    //                 <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    //                   <span className="countdown font-mono text-5xl">
    //                     <span style={{ "--value": 10 }}></span>
    //                   </span>
    //                   hours
    //                 </div>
    //                 <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    //                   <span className="countdown font-mono text-5xl">
    //                     <span style={{ "--value": 24 }}></span>
    //                   </span>
    //                   min
    //                 </div>
    //                 <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    //                   <span className="countdown font-mono text-5xl">
    //                     <span style={{ "--value": 52 }}></span>
    //                   </span>
    //                   sec
    //                 </div>
    //               </div>
    //             </div>


    //           </div>




    //         </div>


    //       </div>



    //     </div>

    //   </div>

    // </div>
    <div>
      <div className="hero min-h-screen text-white bg-[#171717]  ">
        <div className="hero-content flex-col lg:flex-row">
          <div className='lg:w-1/2 relative'>
            <img src={img} className="w-3/4 rounded-lg shadow-2xl" />
            <img src={img} className="w-1/2 absolute right-5 top-1/2 rounded-lg border-8 border-white shadow-2xl" />
          </div>
          <div className='lg:w-1/2 space-y-5 p-4'>
            <h3 className='text-3xl text-orange-500 font-bold'>About Us</h3>
            <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>


            <div className='flex gap-10 justify-center items-center py-20'>
              <div>
              <p className="font-bold">COUNT EVERY SECOND <br /> UNTIL THE EVENT</p>
              </div>

              <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                  <span className="countdown font-mono text-5xl">
                    <span style={{ "--value": 15 }}></span>
                  </span>
                  days
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                  <span className="countdown font-mono text-5xl">
                    <span style={{ "--value": 10 }}></span>
                  </span>
                  hours
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                  <span className="countdown font-mono text-5xl">
                    <span style={{ "--value": 24 }}></span>
                  </span>
                  min
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                  <span className="countdown font-mono text-5xl">
                    <span style={{ "--value": 57 }}></span>
                  </span>
                  sec
                </div>
              </div>
            </div>


            <button className="btn bg-red-700 text-white border-none">Get More Info</button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default About;