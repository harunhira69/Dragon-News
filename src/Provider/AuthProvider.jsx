import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase.config';
import { GoogleAuthProvider } from 'firebase/auth';
import { GithubAuthProvider } from 'firebase/auth';
export const AuthContext = createContext()

const AuthProvider = ({children}) => {
   const [user,setUser] = useState(null)
   const [loading,setLoading] = useState(true)
  //  console.log(user)

 const provider = new GoogleAuthProvider();
 const githubProvider = new GithubAuthProvider();



//  githubSign in
const githubSignIn=()=>{
  return signInWithPopup(auth,githubProvider);
}

   
    
  // sign in google
  const signIn= ()=>{
   
    setLoading(true)
   return  signInWithPopup(auth, provider)


   
  }
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
  //  update profile
  const updateUser = (updatedDate)=>{
    return updateProfile(auth.currentUser,updatedDate)

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
       setLoading,
       updateUser,
       signIn,
       githubSignIn
    }
    
    return (
     <AuthContext value={Authdata}>
        {children}
     </AuthContext>
    );
};

export default AuthProvider;