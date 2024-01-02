import React, { useState } from 'react'
import { AiOutlineGift } from 'react-icons/ai'
import { FiPackage, FiShoppingBag } from 'react-icons/fi'
import { MdOutlineLocalOffer } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { FaWallet} from 'react-icons/fa'
import { IoMdMenu} from 'react-icons/io'

const DashBoardHeader = ({active , setActive}) => {

    const {user} = useSelector((state)=>state.userRed)
    const [pay,setPay] = useState(0)

  return (
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

                    
                   
                        <FaWallet color='#555' size={28} className='cursor-pointer mx-4'>

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
                            
                            
                            user.user  ? <img 
                            className='rounded-full w-[45px] h-[45px] object-cover ml-8'
                            src={`${user.user.avatar.url}`}>
                            </img> :
                            <div
                            className='rounded-full  border-[2px]  flex items-center justify-center
                            border-[#5947cf]
                            bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                            w-[45px] h-[45px] object-cover ml-8 '
                            >
                                <span className="text-white font-Roboto text-3xl font-[600]  shadow-sm ">
                                {user.user && user.user.name}
                    </span>

                                </div>

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
           
















            <div className='flex'>
            <FaWallet color='#555' size={28} className='cursor-pointer mx-4'>

</FaWallet>
{console.log("object")}

{user.user ? 
(user.user.cpa_details &&
     user.user.cpa_details.reduce((acc,currentValue)=>{
        
        return acc + Number(currentValue.user_payout)
     },0) +"$"
     
     )


 : "0$"}
            </div>
           
</div>

</>




  )
}

export default DashBoardHeader