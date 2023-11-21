import React from 'react';
import Swal from 'sweetalert2'
const Ticket = () => {
  const handleticket = () => {
    Swal.fire(
      'Good job!',
      'You clicked the button!',
      'success'
    )
  }

  return (
    <div className='container mx-auto p-24 pb-20'>
      <div className="text-center text-white space-y-4">
        <h1 className="text-2xl">CHOOSE A TICKET</h1>
        <h1 className="text-5xl font-extrabold ">TICKET PRICING</h1>

      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 mx-auto my-10">

        <div className="border  rounded-xl bg-[#171717] text-white w-[330px] h-[552px]">
          <div className="flex justify-center">
            <h1 className="text-center bg-red-700 w-1/2 rounded-xl p-3 text-white font-bold">1 DAY PASS</h1>
          </div>
          <img className="mx-auto mt-4" src="./images/p1.png.webp" alt="" />
          <h1 className="text-center font-bold text-4xl">500 Tk</h1>
          <div className="flex justify-center mt-5">
            <button onClick={handleticket} className="w-3/4 mx-auto btn   hover:bg-gray-500">GET TICKETS -</button>
          </div>
          <div className="space-y-3 mt-4">

            <p className="text-center"><i className="fa-solid fa-check"></i> One Day Conference Ticket</p>
            <p className="text-center"> <i className="fa-solid fa-check"></i> Coffee-break</p>
            <p className="text-center"> <i className="fa-solid fa-check"></i>  Lunch and Networking</p>
            <p className="text-center"><i className="fa-solid fa-check"></i>  Keynote talk</p>
            <p className="text-center"> <i className="fa-solid fa-check"></i>  Talk to the Editors Session</p>
          </div>



        </div>

        <div className="border  rounded-xl bg-[#171717] text-white w-[330px] h-[552px]">
          <div className="flex justify-center">
            <h1 className="text-center bg-red-700 w-1/2 rounded-xl p-3 text-white font-bold">FULL PASS</h1>
          </div>
          <img className="mx-auto mt-4" src="./images/p2.png.webp" alt="" />
          <h1 className="text-center font-bold text-4xl">1000 Tk</h1>
          <div className="flex justify-center mt-5">
            <button onClick={handleticket} className="w-3/4 mx-auto btn btn  hover:bg-gray-500">GET TICKETS -</button>
          </div>
          <div className="space-y-3 mt-4">

            <p className="text-center"><i className="fa-solid fa-check"></i> One Day Conference Ticket</p>
            <p className="text-center"> <i className="fa-solid fa-check"></i> Coffee-break</p>
            <p className="text-center"> <i className="fa-solid fa-check"></i>  Lunch and Networking</p>
            <p className="text-center"><i className="fa-solid fa-check"></i>  Keynote talk</p>
            <p className="text-center"> <i className="fa-solid fa-check"></i>  Talk to the Editors Session</p>
          </div>



        </div>

        <div className="border  rounded-xl bg-[#171717] text-white w-[330px] h-[552px]">
          <div className="flex justify-center">
            <h1 className="text-center bg-red-700 w-1/2 rounded-xl p-3 text-white font-bold">GROUP PASS</h1>
          </div>
          <img className="mx-auto mt-4" src="./images/p3.png.webp" alt="" />
          <h1 className="text-center font-bold text-4xl">1500 Tk</h1>
          <div className="flex justify-center mt-5">
            <button onClick={handleticket} className="w-3/4 mx-auto btn   hover:bg-gray-500">GET TICKETS </button>
          </div>
          <div className="space-y-3 mt-4">

            <p className="text-center"><i className="fa-solid fa-check"></i> One Day Conference Ticket</p>
            <p className="text-center"> <i className="fa-solid fa-check"></i> Coffee-break</p>
            <p className="text-center"> <i className="fa-solid fa-check"></i>  Lunch and Networking</p>
            <p className="text-center"><i className="fa-solid fa-check"></i>  Keynote talk</p>
            <p className="text-center"> <i className="fa-solid fa-check"></i>  Talk to the Editors Session</p>
          </div>



        </div>
      </div>
    </div>
  );
};

export default Ticket;