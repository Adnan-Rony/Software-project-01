import React from 'react';

const Contactus = () => {
    return (
        // <div>
        //     <div className='bg-[#151853]  pt-10 pb-10 '>
        //     <div className="container mx-auto">
        //     <div className="space-y-3">
        //       <h1  className=" text-center text-3xl text-[#df429c]">HAVE QUESTION?</h1>
        //       <p className="text-center text-5xl font-bold text-white">CONTACT US</p>

        //     </div>
        //     <div className="flex justify-between gap-4 mt-8 items-center">
        //       <div className="space-y-3">
        //         <div>
        //           <p className="text-white">Address:</p>
        //           <p className="text-white text-2xl font-semibold">184 Main Collins Street</p>

        //         </div>
        //         <div>
        //           <p className="text-white">Phone:</p>
        //           <p className="text-white text-2xl font-semibold">01747430447</p>

        //         </div>
        //         <div>
        //           <p className="text-white">Email:</p>
        //           <p className="text-white text-2xl font-semibold">abc@gmail.com</p>

        //         </div>
        //         <div>
        //           {/* <p className="text-white">Website:</p>
        //           <p className="text-white text-2xl font-semibold">www.ddottopara.com</p> */}

        //         </div>

        //       </div>



        //       <div className="bg-[#21245c] p-5 rounded-xl">
        //         <div className="">
               
        //          <div className="space-y-5">
        //           <input type="text" placeholder="Your Name" className="input input-bordered input-info w-full max-w-xs text-white bg-[#21245c]" /> 
        //           <br/>
        //           <input type="text" placeholder="Last Name" className="input input-bordered input-info w-full max-w-xs text-white bg-[#21245c]" /> <br/>

                
               
        //           <input type="email" placeholder="E-mail" className="input input-bordered text-white input-info w-full max-w-xs  bg-[#21245c]" />
        //           <input type="text" placeholder="Your Number" className="input input-bordered input-info w-full text-white max-w-xs bg-[#21245c]" />
        //          </div>

               
        //       <div> <br/>
        //         <textarea className="textarea textarea-primary text-white w-full bg-[#21245c]" placeholder="Your message"></textarea>
        //       </div>
        //       <div className="flex justify-center mt-3">
        //         <button className="btn btn btn-secondary rounded-3xl">SEND MESSAGE -</button>
        //       </div>

        //         </div>


        //       </div>

        //     </div>
        //   </div>

        //     </div>
        // </div>
        <div>
          <div className='bg-[#171717]'>
             <div className=' lg:flex  lg:p-20 p-10 container mx-auto rounded-xl '>

                <div className=' bg-red-700  p-10 lg:h-[530px] lg:w-[660px]'>
                    <h1 className='text-4xl font-semibold text-white'>Get in Touch With Us</h1>
                    <div className="space-y-3">
                <div>
                  <p className="text-white">Address:</p>
                  <p className="text-white text-2xl font-semibold">184 Main Collins Street</p>

                </div>
                <div>
                  <p className="text-white">Phone:</p>
                  <p className="text-white text-2xl font-semibold">01747430447</p>

                </div>
                <div>
                  <p className="text-white">Email:</p>
                  <p className="text-white text-2xl font-semibold">abc@gmail.com</p>

                </div>
                <div>
                 

                </div>

              </div>

                </div>





                <div className=' w-full p-10 bg-black '>
                    <h1 className='text-white text-center lg:text-5xl text-3xl font-semibold'>Contact <span className='text-red-700'>US</span></h1>
                    <div className='grid  lg:grid-cols-2 grid-cols-1 gap-4 mt-14'>
                   <div>
                   <input type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
                   </div>

                   <div>
                   <input type="email" placeholder="your email" className="input input-bordered w-full max-w-xs" />
                   </div>

                    <div>
                    <input type="text" placeholder="Country" className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div>
                    <input type="text" placeholder="phone number" className="input input-bordered w-full max-w-xs" />
                    </div>

                   <div>
                   <textarea className='rounded-xl w-full  ' name="" placeholder='Your message' id="" cols="10" rows="5"></textarea>
                   </div>
                    
                    


                    </div>
                    <div className='flex justify-center mt-10'>
                    <button className='btn bg-red-700 text-white border-none hover:bg-blue-600 '>SUBMIT</button>
                    </div>

                </div>
             </div>
        </div>
        </div>
    );
};

export default Contactus;