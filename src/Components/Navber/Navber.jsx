import React from 'react';
import { Link, NavLink } from "react-router-dom";


const Navber = () => {

  const navItems = <>

    <NavLink
      to="/"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "btn btn-ghost text-[#FF444A] text-xl " : ""
      }
    >
      Home
    </NavLink>



    <NavLink
      to="/blog"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "btn btn-ghost text-[#FF444A] text-xl" : ""
      }
    >
      Upcomming Event

    </NavLink>

    <NavLink
      to="/Sponser"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "btn btn-ghost text-[#FF444A] text-xl" : ""
      }
    >
      Sponser
    </NavLink>

    <NavLink
      to="/contactus"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "btn btn-ghost text-[#FF444A] text-xl" : ""
      }
    >
      Contact Us

    </NavLink>

    <NavLink
      to="/ticket"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "btn btn-ghost text-[#FF444A] text-xl " : ""
      }
    >

      Ticket
    </NavLink>



    {










    }



  </>



  return (
    <div>
      {/* <div className='shadow-lg p-4 text-white  bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700'>
            <div className='lg:flex flex-row lg:justify-between justify-center gap-4 lg:items-center mx-12'>
                <div>
                   <Link to="/">
                   <img className='w-30 h-20 rounded-full' src="https://i.ibb.co/XpqL1kr/64144173.jpg" alt="" />
                   </Link>
                </div>
                <div>
                    <ul className='flex gap-5 text-2xl'>
                    <NavLink 
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#FF444A] text-2xl " : "" 
                                }
                                >
                                Home
                                </NavLink>

                               

                                <NavLink
                                to="/blog"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#FF444A] text-2xl" : ""
                                }
                                >
                           Upcomming Event
                              
                                </NavLink>

                                <NavLink
                                to="/Sponser"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#FF444A] text-2xl" : ""
                                }
                                >
                               Sponser
                                </NavLink>

                                <NavLink
                                to="/contactus"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#FF444A] text-2xl" : ""
                                }
                                >
                            Contact Us
                              
                                </NavLink>

                                <NavLink
                                to="/ticket"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#FF444A] text-2xl " : ""
                                }
                                >
                            
                              Ticket
                                </NavLink>
                               

                               

                            
                    </ul>
                </div>

            </div>

                




        </div> */}




      <div className="navbar bg-[#171717] h-12  text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className=" menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {navItems}
            </ul>
          </div>
          <Link to="/" className=" normal-case  text-xl flex justify-center items-center">
            <img className='w-14 rounded-full' src="https://i.ibb.co/XpqL1kr/64144173.jpg" alt="" />
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1  text-xl gap-3">
            {navItems}
          </ul>
        </div>




        <div className="navbar-end">
          <div>

          </div>
          <button className="btn btn-outline btn-">Appointment</button>
        </div>
      </div>






    </div>
  );
};

export default Navber;