import React, { useState } from 'react'
import { RxCross1, RxDashboard, RxPerson } from 'react-icons/rx'
import {HiOutlineShoppingBag,HiOutlineReceiptRefund} from 'react-icons/hi'
import { AiOutlineCreditCard, AiOutlineLogin, AiOutlineMessage } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { FaQuestion } from "react-icons/fa6";

import {MdOutlineLocalOffer, MdOutlineTrackChanges} from 'react-icons/md'
import {TbAddressBook} from 'react-icons/tb'
import { MdPassword } from "react-icons/md"
import { toast } from 'react-toastify'
import axios from 'axios'
import Loader from '../anim/Loader'


const DashBoardSideBar = ({active,setActive}) => {
    const navigate = useNavigate()
    const [clickLogout,setClickLogOut] = useState(false)
    const [loading,setLoading] = useState(false)

    const logoutHandler =async()=>{
        console.log("call")
        try{
            setLoading(true)
           const {data} =  await axios.get('https://webearn-dsk8.vercel.app/api/v2/user/log-out',{withCredentials:true})
          console.log("data",data)
           toast.success(data.message)
           window.location.reload(true)
           navigate("/")
           
        }
        catch(err){
            setLoading(false)
            toast.error(err.response && err.response.data.message ? err.response.data.message : err.message)

        }
        finally{
            setLoading(false)
        }

    }

  return (
    <>
    {/* <div className='w-full h-[87.5vh] bg-white shadow-sm overflow-y-scroll sticky top-0 left-0 z-10'>
       */}
  
    <div className='800px:w-full h-screen 800px:h-[87.5vh] bg-[white] shadow-sm 
     overflow-y-scroll mt-[80px] 800px:mt-0 fixed 800px:sticky top-0 left-0 z-10 p-4 pt-4
    
    
    '>
      
        <div className='flex items-center cursor-pointer w-full mb-8'
        onClick={()=>setActive(1)}>
          

            <RxDashboard size={30} color={active === 1 ? "red" : ""} className=''/>
            <h5 className={` hidden 800px:flex pl-3 800px:pl-2 text-[15px] 800px:text-[18px] font-[500] 800px:font-[400]
            ${active === 1 ? "text-[crimson]":"text-[#555]"}
            `}>
            
            Dashboard
            </h5>
            

        </div>

        <div className='flex items-center cursor-pointer w-full mb-8'
        onClick={()=>setActive(2)}>

            <RxPerson size={30} color={active === 2 ? "red" : ""}/>
            <h5 className={` hidden 800px:flex pl-3 800px:pl-2 text-[15px] 800px:text-[18px] font-[500] 800px:font-[400]
            ${active === 2 ? "text-[crimson]":"text-[#555]"}
            `}>
            
            Profile
            </h5>

        </div>

        <div className='flex items-center cursor-pointer w-full mb-8'
        onClick={()=>setActive(3)}>

            <MdOutlineLocalOffer size={30} color={active === 3 ? "red" : ""}/>
            <h5 className={`hidden 800px:flex pl-3 800px:pl-2 text-[15px] 800px:text-[18px] font-[500] 800px:font-[400]
            ${active === 3 ? "text-[crimson]":"text-[#555]"}
            `}>
            
            Offer Complete
            </h5>

        </div>


{/* message */}
        {/* <div className='flex items-center cursor-pointer w-full mb-8'
        onClick={()=>setActive(4) || navigate("/inbox") }>

            <AiOutlineMessage size={20} color={active === 4 ? "red" : ""}/>
            <span className={`pl-3 ${active === 4 ? "text-[red]" :""}`}> Inbox</span>


        </div> */}







        {/* <div className='flex items-center cursor-pointer w-full mb-8'
        onClick={()=>setActive(5)}>

            <MdOutlineTrackChanges size={20} color={active == 5 ? "red" : ""}/>
            <span className={`pl-3 ${active === 5 ? "text-[red]" :""}`}> Track Order</span>


        </div> */}


        <div className='flex items-center cursor-pointer w-full mb-8'
        onClick={()=>setActive(4)}>

            <AiOutlineCreditCard size={30} color={active == 4 ? "red" : ""}/>
            <h5 className={` hidden 800px:flex pl-3 800px:pl-2 text-[15px] 800px:text-[18px] font-[500] 800px:font-[400]
            ${active === 4 ? "text-[crimson]":"text-[#555]"}
            `}>
            
            Payment Methods
            </h5>

        </div>

        {/* <div className='flex items-center cursor-pointer w-full mb-8'
        onClick={()=>setActive(7)}>

            <TbAddressBook size={20} color={active == 7 ? "red" : ""}/>
            <span className={`pl-3 ${active === 7 ? "text-[red]" :""}`}> Address</span>


        </div> */}

        <div className='flex items-center cursor-pointer w-full mb-8'
        onClick={()=>setActive(5)}>

            <MdPassword size={30} color={active == 5 ? "red" : ""}/>
            <h5 className={` hidden 800px:flex pl-3 800px:pl-2 text-[15px] 800px:text-[18px] font-[500] 800px:font-[400]
            ${active === 5 ? "text-[crimson]":"text-[#555]"}
            `}>
            
            Password
            </h5>

        </div>

        <div className='flex items-center cursor-pointer w-full mb-8'
        onClick={()=>setActive(6)}>

            <FaQuestion size={28} color={active == 6 ? "red" : ""}/>
            <h5 className={` hidden 800px:flex pl-3 800px:pl-2 text-[15px] 800px:text-[18px] font-[500] 800px:font-[400]
            ${active === 6 ? "text-[crimson]":"text-[#555]"}
            `}>
            
            Faq
            </h5>

        </div>
        

        <div className='flex items-center cursor-pointer w-full '
        onClick={()=>setActive(7) || setClickLogOut(true) } >

            <AiOutlineLogin size={30} color={active == 7 ? "red" : ""}/>
            <span className={` hidden 800px:flex pl-3 ${active === 7 ? "text-[red]" :"text-[#555]"}`}> Log Out</span>


        </div>


        
    </div>

{clickLogout && (
    
        loading ? 
        <Loader/> 
        :
        <div className="top-0 left-0 w-full  h-screen bg-[#0000004b]  py-5 px-2 shadow-xl
   fixed z-30  800px:flex justify-center items-center ">
      
 
    <div className="800px:w-[25%]  w-full bg-white shadow-lg rounded-[10px] ">

      <div className="flex justify-end pt-3 pr-3">
        <RxCross1 className="cursor-pointer" 
        onClick={()=>setActive(1) || setClickLogOut(false)}
         size={20}/>
</div>
<div className="flex  flex-col items-center justify-center w-full  py-5 ">

<h1 className="font-[600]  text-[22px] pb-2">
 Attention!!  LogOut
</h1>
<h4 className='800px:px-3 '> Are you sure you want to logout.   </h4>



  <div className="w-full flex justify-center items-center mt-5 mb-2">
  <button className='px-4 py-2 mr-5 bg-black border text-white font-[600]
      text-[15px] hover:border-[2px] rounded-[3px] shadow-md'
      onClick={logoutHandler}
      >
          Logout

      </button>
      <button className='px-4 py-2 bg-black border text-white font-[600]
      text-[15px] hover:border-[2px] rounded-[3px] shadow-md'
      onClick={()=>setActive(1) || setClickLogOut(false) }
      >
          Cancel

      </button>



  </div>

</div>
       


    

  </div>
  </div>
    
           
  
  

)}

  
  </>
  )
}

export default DashBoardSideBar