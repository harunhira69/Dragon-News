import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase.config';
export const AuthContext = createContext()

const AuthProvider = ({children}) => {
   const [user,setUser] = useState(null)
   const [loading,setLoading] = useState(true)
   console.log(user)
    

    // create user
    const createUser =(email,password)=>{
      return  createUserWithEmailAndPassword(auth,email,password)
    }
   //  sign in user
   const Login =(email,password)=>{
      return signInWithEmailAndPassword(auth,email,password)
   }
   //  signout
   const Logout=()=>{
     return signOut(auth)
   }

   //  onauthstatechange

useEffect(()=>{
 const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
   setUser(currentUser)
   setLoading(false)
 });
 return ()=>{
   unsubscribe()
 }
},[])


 
    const Authdata = {
       createUser,
       user,
       setUser,
       Logout,
       Login,
       loading,
       setLoading
    }
    
    return (
     <AuthContext value={Authdata}>
        {children}
     </AuthContext>
    );
};

export default AuthProvider;