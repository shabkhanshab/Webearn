import React, { useState } from 'react'
import { AiOutlineGift } from 'react-icons/ai'
import { FiPackage, FiShoppingBag } from 'react-icons/fi'
import { MdOutlineLocalOffer } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { FaWallet} from 'react-icons/fa'
import { IoMdMenu} from 'react-icons/io'
import { IoHandRightSharp, IoPerson } from "react-icons/io5";
import Loader from '../anim/Loader'
import axios from 'axios'
import { toast } from 'react-toastify'
import { RxCross1 } from 'react-icons/rx'

const DashBoardHeader = ({active , setActive}) => {

    const {user} = useSelector((state)=>state.userRed)
    const [pay,setPay] = useState(0)
    const [loading,setLoading] = useState(false)
    const [raiseClick,setRaiseClick] = useState(false)
    
    const handelUnraiseTicket =async()=>{
        try{
            const id = user.user && user.user._id
            setLoading(true)
            const data = await axios.post("https://webearn-dsk8.vercel.app/api/v2/user/unraise-ticket",
            {id},{withCredentials:true})
            
            window.location.reload()
            toast.success(data.data.message,{toastId:"Success1"})
        }
        catch(err){
            setLoading(false)
            toast.error(
              err.response && err.response.data.message
              ? err.response.data.message
              : err.message
              ,{
                  toastId:"Success1"
              }
            )
          }
          finally{
            setLoading(false)
          }
    }

    const handelRaiseCLose =()=>{
        setRaiseClick(false)
    }

  return (
    <>
    {loading ? 
    <div className="top-0 left-0 w-full  h-screen bg-[#0000004b]  py-5 px-2
    fixed z-30  800px:flex justify-center items-center ">
       <Loader/>
  
    </div>
    : 
    <>
    <div className=' hidden w-full sticky h-[80px] bg-[white] shadow top-0 left-0
     z-30 800px:flex items-center justify-between px-4'>

        <div>
            <Link to='/dashboard'>
                <div className='rounded object-cover  w-[72px] h-[70px] ml-5'>
                <img className=' rounded-full '
                
                
                src={require('../anim/webEarn.jpeg')}
                >
                </img>
                </div>
                
            </Link>
            </div>
            <div>
            {

            user.user 
            &&
             <h2 className='text-[18px] font-[600] overflow-hidden'>
                {user.user.name}
            </h2>

              }
            </div>

            <div className='flex items-center'>
                <div className='flex items-center mr-4'>
                    {/* <Link to='/dashboard/coupons' className='800px:block hidden'>
                        <AiOutlineGift color='#555' size={30} className='cursor-pointer mx-5'>

                        </AiOutlineGift>
                    </Link>

                    <Link to='/dashboard-events' className='800px:block hidden'>
                        <MdOutlineLocalOffer color='#555' size={30} className='cursor-pointer mx-5'>

                        </MdOutlineLocalOffer>
                    </Link>

                    <Link to='/dashboard-prducts' className='800px:block hidden'>
                        <FiShoppingBag color='#555' size={30} className='cursor-pointer mx-5'>

                        </FiShoppingBag>
                    </Link>

                    <Link to='/dashboard-orders' className='800px:block hidden'>
                        <FiPackage color='#555' size={30} className='cursor-pointer mx-5'>

                        </FiPackage>
                    </Link> */}

                    {
                        user.user && (user.user.raiseTicket === true && 
                            <div 
                            onClick={(e)=>setRaiseClick(!raiseClick)}>
                                 <IoHandRightSharp  color='yellow' className='cursor-pointer'
                        size={25}/>
                                </div>
                            
                       
                        
                        )
                    }

                    
                   
                        <FaWallet color="#555" size={28} className='cursor-pointer mx-4'>

                        </FaWallet>
                        {console.log("object")}
                       
                        {user.user ? 
                        (user.user.cpa_details &&
                             user.user.cpa_details.reduce((acc,currentValue)=>{
                                
                                return acc + Number(currentValue.user_payout)
                             },0) +"$"
                             
                             )


                         : ""}

                  

                    



                   
                    {console.log("user",user.user)}
                        {
                            
                            
                            user.user  ? 
                            
                               ( user.user.avatar ?
                                <img 
                            className='rounded-full w-[45px] h-[45px] object-cover ml-8'
                            src={`${user.user.avatar && user.user.avatar.url}`}>
                            </img>
                             :
                            <div
                            className='rounded-full  border-[2px]  flex items-center justify-center
                            border-[#5947cf]
                            bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                            w-[45px] h-[45px] object-cover ml-8 '
                            >
                                <span className="text-white font-Roboto text-3xl font-[600]  shadow-sm ">
                                {user.user && user.user.name.charAt(0).toUpperCase()}
                    </span>

                                </div>
                                
                                )
                            
                            : <IoPerson
                            className='rounded-full w-[45px] h-[45px] object-cover ml-8'

                            />
                            

                        }
                

                </div>

            </div>

    </div>



<div className='800px:hidden w-screen sticky h-[80px] bg-white shadow top-0 left-0
     z-30 flex items-center justify-between px-4 '>

        {/* <div>
            <IoMdMenu size={20}>

            </IoMdMenu>
        </div> */}

<div>
            <Link to='/dashboard'>
                <div className='rounded object-cover shadow w-[72px] h-[70px] ml-2'>
                <img className=' rounded-full '
                
                alt=''
                src={require('../anim/webEarn.jpeg')}
                >
                </img>
                </div>
                
            </Link>
            </div>
            


<div>
{

user.user 
&&
 <h2 className='text-[18px] font-[600] overflow-hidden'>
    {user.user.name}
</h2>

  }
    </div>
           














    {
                        user.user && (user.user.raiseTicket === true && 
                            <div onClick={(e)=>setRaiseClick(!raiseClick)}>
                                 <IoHandRightSharp  color='#555' className='cursor-pointer'
                        size={25}/>
                                </div>
                            
                       
                        
                        )
                    }


            <div className='flex'>
            <FaWallet color='#555' size={28} className='cursor-pointer mx-4'>

</FaWallet>
{console.log("object")}
{/* cahnge this to Balance field for show amount in wallet */}
{user.user ? 
(user.user.cpa_details &&
     user.user.cpa_details.reduce((acc,currentValue)=>{
        
        return acc + Number(currentValue.user_payout)
     },0) +"$"
     
     )


 : "0$"}
            </div>
           
</div>


{
    raiseClick && <>
<div className=' w-full z-50 h-screen py-5
 px-2 top-0 left-0 bg-[#0000004a] fixed
800px:flex justify-center items-center '>
        <div className='w-full 800px:w-[30%] bg-white shadow-lg rounded-[10px]'>
            <div className=' w-full flex justify-end  pt-3 pr-3'
            
            >
                <RxCross1 className='cursor-pointer'
                onClick={handelRaiseCLose}
                 size={20}/>

            </div>
            <div className='w-full px-3 py-2'>
                <h2 className='font-[600] text-[18px]'>Attention!!</h2>
                <h3>Are you sure!! Your want to unraise the payment transfer request ticket </h3>
            </div>
            <div className='w-full flex justify-end items-end mb-3 mr-3'>

                <button className='px-2 py-2 bg-black  shadow-lg rounded-sm flex items-center justify-center
                 hover:border-[1px] hover:border-black'
                 onClick={handelUnraiseTicket}>
                    <span className='text-[16px] font-[600] text-white'>Unraise Ticket</span>

                </button>
            </div>

        </div>

    </div>
    </>
}





</>
}
</>




  )
}

export default DashBoardHeader