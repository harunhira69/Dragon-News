import React, { createContext, useState } from 'react';
export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const[user,setUser] = useState({
        name:'harun',
        email:'harun@gmail.com'
    })
    const Authdata = {
        user,
        setUser
    }
    
    return (
     <AuthContext value={Authdata}>
        {children}
     </AuthContext>
    );
};

export default AuthProvider;