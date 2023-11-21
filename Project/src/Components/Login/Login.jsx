


// import { AuthContext } from '../Auntication';

import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from 'react-hot-toast';
const Login = () => {
    const {signIn,user,googleLogin}=useContext(AuthContext)
    const location =useLocation()
    const navigate=useNavigate()

    const handlelogin=event=>{


        event.preventDefault();
    
        const email=event.target.email.value;
        const password=event.target.password.value
        console.log(email,password);
    
    
        signIn(email,password)
    
    
    
        .then(result =>{
          console.log(result);
          //navigate after login
          navigate(location ?.state ? location.state :'/')
          toast.success('Login successfully')
          
        })
        .catch(error =>{
          console.error(error);
          // setregistererror(error.message)
          toast.error(error.message);
          
        })
        }

        const handlegoogle=()=>{

            googleLogin()
           .then(res=>{
            console.log(res);
           })
           .catch(error=>{
            console.log(error);
           })
      
        };
   


    return (
        <div>
             <div className=''>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">


                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-[#171717] ">
                        <div className="card-body">
                            {/* <form onSubmit={handlelogin} > */}
                            <form onSubmit={handlelogin}>
                                <div className="form-control">
                                    <h1 className='text-3xl font-bold mb-5 text-red-700'>Login your account</h1>
                                    <label className="label">
                                        <span className="text-white ">Email</span>
                                    </label>
                                    <input type="email" name='email' required placeholder="email" className="input input-bordered text-black" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className=" text-white">Password</span>
                                    </label>
                                    <input type="password" required name='password' placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover text-white">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </form>
                            <p className='text-white'>New here? please <Link to="/registation">
                                <button className='btn btn-link text-red-700'>Register</button>

                            </Link> </p>

                            
                           
                           <button onClick={handlegoogle}  className='btn w-full text-black  hover:bg-red-700 hover:text-white '>
                                Google 
                            </button>
                           
                            
                        </div>
                    </div>



                </div>
            </div>

        </div>
            
        </div>
    );
};

export default Login;