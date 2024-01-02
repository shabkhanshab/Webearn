import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
import { RxCross1 } from 'react-icons/rx'
import Loader from '../anim/Loader'
const ForgetPass = () => {

    const [email,setEmail] = useState("")
    const[loading,setLoading] = useState(false)
    const navigate = useNavigate()

    const handelClose = ()=>{
        navigate("/login")
    }
    
    const handelSubmit = async()=>{

        try{
            setLoading(true)
            const data = await axios.post("https://webearn-dsk8.vercel.app/api/v2/user/forget-email",{email})

            if(data){
                console.log(data)
                toast.success("Please check your email , ResetPass email send successfully!!",{
                    toastId:"success1"
                })
                navigate("/login")
            }

        }
        catch(err){
            setLoading(false)
            console.log(err)
            toast.error(err.response && err.response.data.message ? err.response.data.message : err.message)
    
        }
        finally{
            setLoading(false)
        }
    }
  return (
    <>
    {
        loading ? <Loader/> : 

  
   
    <div className='w-full min-h-screen  bg-[#003459]   flex 800px:justify-center items-center flex-col py-12 sm:px-6 lg:px-8'>
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="800px:mt-3 text-center mt-[40px] text-3xl font-extrabold text-[#ffffff] ">
          Please Enter your Email
        </h2>


        </div>

        <div className="mt-8 sm:mx-auto  w-[90%] rounded-md shadow-xl  sm:w-full sm:max-w-md">
        <div className="bg-white  shadow-xl sm:rounded-lg sm:px-10 800px:px-3 ">
            
               
        <div className="flex justify-end mb-2  pt-2  pr-2 800px:pr-0 ">
                  <RxCross1 className="cursor-pointer" 
                  onClick={handelClose}
                  color={'black'}
                   size={20}/>
                   </div>

        <div className='py-8 px-4' >
            <div>
            <input
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
            type='email'
            placeholder='Enter your registered Email...'
            className='px-2 py-2 placeholder-[#00000090] w-full  focus:outline-none border-[#0000009e]
             focus:ring-indigo-500 hover:border-purple-500 block appearance-none
              border-[2px] focus:border-indigo-500 '
            >

</input>
            </div>
            <div className=' flex justify-end items-center mt-5 '>
               <div
               className='px-4 py-3 800px:py-2 border-[2px] shadow-md bg-[#007ea7] rounded  '
               onClick={handelSubmit}
               >
                <span className='text-[16px] text-white font-[600] 800px:text-[19px] cursor-pointer '>

                Submit
                </span>

               </div>

            </div>
            
            
            </div>
        </div>
        </div>
        
    </div>
}
    </>
  )
}

export default ForgetPass