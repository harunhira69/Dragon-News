import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import users from '../assets/user.png'
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
    const {user,Logout} = use(AuthContext)
    const handleLogout=()=>{
        Logout().then(()=>{
            alert('logout success')
        }).catch(e=>{
          console.log(  e.message)
        })

    }
    return (
     <div className='flex justify-between items-center'>
   <div>{user&& <h3>{user.email}</h3>}</div>
<div className='nav flex gap-5 text-accent'>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/about'>About</NavLink>
    <NavLink to='/carrer'>Carrer</NavLink>
</div>
<div className='login flex items-center gap-5 '>
    <img src={users} alt="" />
    {
        user?<button onClick={handleLogout} className='btn btn-primary px-10'>Logout</button>:<Link to='/auth/login' 
        className='btn btn-primary px-10'>Login</Link>
    }
</div>

     </div>
    );
};

export default Navbar;