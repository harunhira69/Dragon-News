import React, { use } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../Provider/AuthProvider';
import { auth } from '../../Firebase/firebase.config';

const SocialLogin = () => {
    const {signIn} = use(AuthContext)
    const { githubSignIn} = use(AuthContext)
    const handleSignIn=()=>{
        signIn()
        .then(res=>{
            console.log(res.user)
        }).catch(e=>{
            console.log(e.message)
        })
    }
    const handleGithubSignIn = () => {
    githubSignIn()
      .then((res) => {
        console.log("✅ GitHub User:", res.user);
      })
      .catch((e) => {
        console.error("❌ GitHub Error:", e.message);
      });
  };

    return (
        <div>
            <h3 className='font-bold mb-5'>Login With</h3>
            <div className='space-y-5'>
                <button onClick={handleSignIn} className='btn btn-outline btn-secondary'>
                  <FcGoogle size={24} />  Login With Google</button>
                <button
                onClick={handleGithubSignIn}
                 className='btn btn-outline btn-primary'> 
                 <FaGithub size={24} />  Login With Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;