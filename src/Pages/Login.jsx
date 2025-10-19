import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';


const Login = () => {
  const {Login} = use(AuthContext)
  const [error,setError] = useState("");

  const location = useLocation()
  const navigate = useNavigate()
  // console.log(location)
  const handleLogin =(e)=>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    Login(email,password)
    .then(()=>
    {
      // console.log(res.user)
      navigate(`${location.state?location.state:'/'}`)
      alert('Login success')
    })
    .catch(e=>{
      const error = e.code;
   
      setError(error)
    })

    
  }

    return (
        <div className='flex justify-center min-h-screen items-center'>
          
            <div className="card py-5 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleLogin} className="card-body">
        <h2 className='font-semibold text-2xl'>Login your account</h2>
        <fieldset className="fieldset">
          {/* email */}
          <label className="label">Email</label>
          <input type="email"
           className="input"
           required
           name='email'
            placeholder="Email" />
            {/* password */}
          <label className="label">Password</label>
          <input type="password"
           className="input" 
           name='password'
           required
           placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          {
            error && <p className='text-xs text-error'>{error}</p>
          }
        
          <button type='submit' className="btn btn-neutral mt-4">Login</button>
            <p className='font-semibold text-center'>Dont’t Have An Account ?
            <Link className='text-secondary' to='/auth/register'>
            Register</Link></p>
        </fieldset>
      </form>
      </div>
      </div>
 

    );
};

export default Login;