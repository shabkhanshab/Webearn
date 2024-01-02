import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios'


const ActivationAccount = () => {
   const{activation_token} = useParams()
   const[errorr,setError]= useState(false)
   
   useEffect(()=>{
    if(activation_token){
        const activationEmail = async()=>{
            try{
                
                const res = await axios.post(`https://webearn-dsk8.vercel.app/api/v2/user/activation`,{activation_token})
                console.log(res)
            }
            catch(err){
                console.log(err)
                setError(true)
            }
        }


        activationEmail()
    }
    else{
        console.log("wwwwong")
    }
   
    
   },[]
   )


  return (
   
    <div style={{ height:"100vh ", width:"100%",display:"flex",justifyContent:"center",alignItems:"center"  }}>
      
        {errorr ? <p>Your token has been Expired</p> : <p>Your account has been created successfully</p>
}
    </div>
 
  )
}

export default ActivationAccount