import React, { use, useState } from 'react';
import { Link, Links } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';


const Register = () => {
    const {createUser,setUser} = use(AuthContext)
    const [nameError,setNameError] = useState("")
    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        if(name.length<5){
            return setNameError('Name should be at least 5 word')
        }else{
            setNameError("")
        }
        const photoUrl = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        createUser(email,password)
        .then(res=>{
            setUser(res.user)
        })
        .catch(e=>{
          console.log(e.message)
        })

    }
    return (
        <div className='flex justify-center min-h-screen items-center'>
         
            <div className="card py-5 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleRegister} className="card-body">
                    <h2 className='font-semibold text-2xl'>Register your account</h2>
                    <fieldset className="fieldset">
                        {/* name */}
                        <label className="label">Name</label>
                        <input type="text"
                            name='name'
                            className="input"
                            required
                            placeholder="Name" />
                            {
                                nameError&&<p className='text-xs text-error'>{nameError}</p>
                            }
                            
                        {/* photo url */}
        
                        <label className="label">Photo URL</label>
                        <input type="text"
                            name='photo'
                            className="input"
                            required
                            placeholder="Photo url" />
                        {/* email */}
                        <label className="label">Email</label>
                        <input type="email"
                            name='email'
                            required
                            className="input"
                            placeholder="Email" />
                        {/* password */}
                        <label className="label">Password</label>
                        <input type="password"
                            required
                            className="input"
                            name='password'
                            placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>

                        <button type='submit' className="btn btn-neutral mt-4">Register</button>
                        <p className='font-semibold text-center'>
                            Already Have An Account ?
                            <Link className='text-secondary' to='/auth/login'>
                                Login

                            </Link>
                        </p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;