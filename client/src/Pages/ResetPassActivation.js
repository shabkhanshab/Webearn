import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ResetPassword from '../Component/ResetPassword'

const ResetPassActivation = () => {

    const {resetactivation_token} =useParams()
    const [err,setError] = useState(false)
    
   
    useEffect(()=>{
        const calling = async() =>{
            try{
                const {data} = await axios.post("http://localhost:8000/api/v2/user/reset-pass-activation",{resetactivation_token})
               
                setError(false)
            }
            catch(err){
             
                setError(true)
            }
        }
        calling()
       
    },[])
  return (
    <div className='text-[18px] items-center bod-[600]'>
        {
            err ? "Activation time has been expired"  :
            <>
            {console.log("resetactivation_token",resetactivation_token)}
                        <ResetPassword resetactivation_token={resetactivation_token}/>

            </>
        }

    </div>
  )
}

export default ResetPassActivation