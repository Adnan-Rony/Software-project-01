


// import { AuthContext } from '../Auntication';

import { Link } from "react-router-dom";

const Login = () => {

   


    return (
        <div>
             <div className=''>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">


                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-[#171717] ">
                        <div className="card-body">
                            {/* <form onSubmit={handlelogin} > */}
                            <form>
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
                            <button   className='btn text-black  hover:bg-red-700 hover:text-white '>
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