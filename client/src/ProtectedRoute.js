import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Loader from './anim/Loader';

const ProtectedRoute = ({children}) => {
  
    const { loading, isAuthenticatd } = useSelector((state) => state.userRed);

    if(loading ){
      return <Loader/>
    }
    if(!isAuthenticatd ){
 
 
      return <Navigate to='/login' replace ></Navigate>
   }

   //  if(loading === false){

   //     if(!isAuthenticatd ){
 
 
   //        return <Navigate to='/login' replace ></Navigate>
   //     }
   //  }
 
  return children
 }
 
  


export default ProtectedRoute