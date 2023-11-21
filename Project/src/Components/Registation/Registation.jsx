import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';


const Registation = () => {

    const [registererror, setregistererror] = useState('');
    const [success, setsucess] = useState('');
    const [registerNameShow, setregisterNameShow] = useState('');
    

    const { CreateUser } = useContext(AuthContext)

    
    const handleregister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
     
    
    
        console.log(name, email, password);
    
        // setregistererror('')
        // setsucess('')
    
    
        // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/;
    
    
    
        if (!/(?=.{6,})/.test(password)) {
          toast.error("At least 6 characters in total")
          return;
        }
         if (!/(?=.*[a-z])/.test(password)) {
          toast.error("At least 1 lowercase letter")
          return;
        }
      if (!/(?=.*[A-Z])/.test(password)) {
          toast.error("At least 1 uppercase letter")
          return;
        }
         if (!/(?=.*[!@#\$%\^&\*])/.test(password)) {
          toast.error("At least 1 special character (!@#$%^&*)\n")
          return;
        }
      
        // if (!passwordRegex.test(password)) {
        //   toast.error("password must be at least 6 characters,1 Lowecase,1 Upeer Case,and special case")
        // }
        // else
        // {
        //     toast.success('Successfully ')
        // }
    
    
    
        CreateUser(email, password)
    
          .then(result => {
            console.log(result);
            // setsucess('user created successfully')
    
            toast.success('user created successfully')
    
           
    
    
            setregisterNameShow(result.displayName)
    
    
          })
          .catch(error => {
            console.error(error);
            // setregistererror(error.message)
            // toast.error(error.message);
          })
      }
    
  
 


    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">


                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-[#171717] ">
                        <div className="card-body">
                            {/* <form onSubmit={handlelogin} > */}
                            <form onSubmit={handleregister} >
                                <div className="form-control">
                                    <h1 className='text-3xl font-bold mb-5 text-red-700'>Register your account</h1>
                                    <label className="label">
                                        <span className="text-white ">Name</span>
                                    </label>
                                    <input type="text" name='name' required placeholder="Name" className="input input-bordered text-black" />
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
                                    <button className="btn btn-primary">Register</button>
                                </div>
                            </form>
                            <p className='text-white'>already account? please <Link to="/login">
                                <button className='btn btn-link text-red-700'>login</button>

                            </Link> </p>
                            <button  className='btn text-black  hover:bg-red-700 hover:text-white '>
                                Google 
                            </button>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default Registation;