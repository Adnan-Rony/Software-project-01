import React from 'react';
import img from '../../assets/205970_175.jpg'
const About = () => {
    return (
        <div>
            <div className=" bg-[#151853] ">
          <div className="container mx-auto">
            <div className="flex lg:flex-row flex-col justify-around text-white pt-16 pb-16">
                <div>
             
                    <img src={img} alt="" className="rounded-md"/>
                   
    
                </div>
                <div className="space-y-3">
                    <h1 className="text-4xl font-bold">About Conference</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis quam malesuada <br/> scelerisque ultrices gravida lobortis ac. Et vitae, et aliquam sed. </p>
                  

                        <button className="btn btn btn-secondary "> INTERESTED -</button>
                        <div className="flex gap-3 items-center">
                          <div className="space-y-4">
                            <p className="text-[#bd48bc]">CONFERENCE DATE</p>
                            <p className="font-bold">COUNT EVERY SECOND <br/> UNTIL THE EVENT</p>
                          </div>
                          <div className="flex ">
                            <div className="border h-[100px] w-[100px] p-5 m-4">
                              <span><p className="text-center font-bold text-2xl">00</p> <p>Months</p></span>

                            </div>
                            <div className="border h-[100px] w-[100px] p-5 m-4">
                              <span><p className="text-center font-bold text-2xl">00</p> <p className="text-center">Days</p></span>

                            </div>
                            <div className="border h-[100px] w-[100px] p-5 m-4">
                              <span><p className="text-center font-bold text-2xl">00</p> <p className="text-center">Hours</p></span>

                            </div>

                          </div>
                        </div>




                    </div>
                </div>
            </div>
    
          </div>
        </div>
       
    );
};

export default About;