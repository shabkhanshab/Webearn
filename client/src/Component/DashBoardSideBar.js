import React, { useState } from 'react'
import { RxCross1, RxDashboard, RxPerson } from 'react-icons/rx'
import {HiOutlineShoppingBag,HiOutlineReceiptRefund} from 'react-icons/hi'
import { AiOutlineCreditCard, AiOutlineLogin, AiOutlineMessage } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import {MdOutlineLocalOffer, MdOutlineTrackChanges} from 'react-icons/md'
import {TbAddressBook} from 'react-icons/tb'
import { MdPassword } from "react-icons/md"
import { toast } from 'react-toastify'
import axios from 'axios'


const DashBoardSideBar = ({active,setActive}) => {
    const navigate = useNavigate()
    const [clickLogout,setClickLogOut] = useState(false)

    const logoutHandler =async()=>{
        console.log("call")
        try{
           const {data} =  await axios.get('http://localhost:8000/api/v2/user/log-out',{withCredentials:true})
          console.log("data",data)
           toast.success(data.message)
           window.location.reload(true)
           navigate("/")
           
        }
        catch(err){
            toast.error(err.response && err.response.data.message ? err.response.data.message : err.message)

        }
    }

  return (
    <>
  
    <div className='w-full h-[87.5vh] bg-white shadow-sm
     overflow-y-scroll sticky top-0 left-0 z-10 pt-8 p-4 
    
    
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
        

        <div className='flex items-center cursor-pointer w-full '
        onClick={()=>setActive(6) || setClickLogOut(true) } >

            <AiOutlineLogin size={30} color={active == 6 ? "red" : ""}/>
            <span className={` hidden 800px:flex pl-3 ${active === 6 ? "text-[red]" :""}`}> Log Out</span>


        </div>


        
    </div>

{clickLogout && (
           
  <div className="top-0 left-0 w-full  h-screen bg-[#0000004b]  py-5 px-2 shadow-xl
   fixed z-30  800px:flex justify-center items-center ">
      
 
    <div className="800px:w-[25%]  w-full bg-white shadow-lg rounded-[10px] ">

      <div className="flex justify-end pt-3 pr-3">
        <RxCross1 className="cursor-pointer" 
        onClick={()=>setActive(1) || setClickLogOut(false)}
         size={20}/>
</div>
<div className="flex  flex-col items-center justify-center w-full  py-5">

<h2 className="font-[500] text-blue-500 text-[15px] pb-2"></h2>
<h1 className="font-[600]  text-[22px] pb-2">
 Attention!!  LogOut
</h1>
<h4> Are you sure you want to logout.   </h4>



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