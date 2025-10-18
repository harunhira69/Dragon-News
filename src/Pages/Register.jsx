import React from 'react';
import { Link, Links } from 'react-router';

const Register = () => {
    return (
              <div className='flex justify-center min-h-screen items-center'>
            <div className="card py-5 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h2 className='font-semibold text-2xl'>Register your account</h2>
        <fieldset className="fieldset">
            {/* name */}
             <label className="label">Name</label>
          <input type="text"
           className="input"
            placeholder="Name" />
            {/* photo url */}
                <label className="label">Photo URL</label>
          <input type="text"
           className="input"
            placeholder="Photo url" />
            {/* email */}
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          {/* password */}
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
        
          <button className="btn btn-neutral mt-4">Register</button>
            <p className='font-semibold text-center'>
                Already Have An Account ? 
                <Link className='text-secondary' to='/auth/login'>
                Login
                
                </Link>
            </p>
        </fieldset>
      </div>
    </div>
  </div>
    );
};

export default Register;