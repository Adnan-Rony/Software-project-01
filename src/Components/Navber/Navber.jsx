import React, { useContext } from 'react';
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from '../../AuthProvider/AuthProvider';


const Navber = () => {

  const { user, logout, } = useContext(AuthContext)

  const handleesignOut = () => {
    logout()

  }

  const navItems = <>

    <NavLink
      to="/"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "btn btn-sm text-[#FF444A]  " : ""
      }
    >
      Home
    </NavLink>



    <NavLink
      to="/blog"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "btn btn-sm text-[#FF444A] " : ""
      }
    >
      Upcomming Event

    </NavLink>

    <NavLink
      to="/Sponser"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "btn btn-sm text-[#FF444A] " : ""
      }
    >
      Sponser
    </NavLink>

    <NavLink
      to="/login"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "btn btn-sm text-[#FF444A] " : ""
      }
    >
      Contact Us

    </NavLink>

    <NavLink
      to="/ticket"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "btn btn-sm text-[#FF444A]  " : ""
      }
    >

      Ticket
    </NavLink>



    {










    }



  </>



  return (
    <div>





      <div className="navbar bg-[#171717] h-12 text-xl text-white fixed z-10 bg-opacity-30 ">
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




        <div className="navbar-end gap-3">
          <div>
            {
              user &&
              <img className='lg:w-14 w-9 rounded-full' src={user.photoURL} alt="" />
            }

          </div>

          {
            user ?
              <button onClick={handleesignOut} className='lg:btn btn-sm btn'>SIGN OUT</button>
              :
              <Link to="/login">
                <button className='lg:btn btn-sm btn'>LOGIN</button>
              </Link>
          }

        </div>
      </div>






    </div>
  );
};

export default Navber;