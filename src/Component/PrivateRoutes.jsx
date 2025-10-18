import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router';
import Loading from '../Pages/Loading';

const PrivateRoutes = ({children}) => {
    const {user,loading} = use(AuthContext)
    if(loading){
        return <Loading></Loading>
    }
    if(user&& user?.email){
        return children;
    }
  return <Navigate to='/auth/login'></Navigate>
   
};

export default PrivateRoutes;