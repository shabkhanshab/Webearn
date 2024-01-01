import React, { useEffect } from 'react'
// import staringAnim from './anim/starting.json'
import Lottie from 'lottie-react'
import LoadingAnim from '../anim/Animation - Loader.json'
import startingAnim from '../anim/starting.json'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Home = () => {
  const navigate = useNavigate()

  const {isAuthenticatd } = useSelector((state)=>state.userRed)


  useEffect(()=>{
    if(isAuthenticatd){
      navigate("/dashboard")
    }

  },[isAuthenticatd])










  const handelSignup = ()=>{
    navigate("/signup")
  }

  const handelLogin = () =>{
    navigate("/login")
  }
  return (
    <div className='bg-[#003459]  w-full '>

      <div className='flex w-full '>

      <div  className=' w-full bg-[#0000004a]'>
        <div className=''>
        <Lottie
        autoplay
        
        className='  800px:h-[290px] w-full '
        animationData={LoadingAnim}>

        </Lottie>

        <div className=''>
          <div className='flex justify-center items-center'>
          <h1 className='text-white p-5 animate-pulse
          font-[600] text-[25px]'>
            Welcome
          </h1>
          </div>
        
          <div className='flex  justify-center items-center'>
          
            
            <span className='text-[white] text-[18px]'>
            <h3 className='font-[600] text-center '>Here you can earn money without any investment </h3>
            <div className='ml-2 mt-3 800px:mt-0 '>
            <li> 
              100% genuine platform
              </li>
              <li>
                100% money transfer guarantee
              </li>
              <li>
                No need to buy anything
              </li>
              <li> just complete the task and earn money</li>
              <li>
              Easy money transfer
            </li>
            </div>
             
            </span>
           
          </div>

          <div className=' mb-5 800px:mb-0  flex mt-10 justify-center items-center'>
            <button className='bg-[#fffffff4] px-8 py-2 animate-bounce cursor-pointer
             rounded-md mr-5' onClick={handelSignup}>
              <span className='text-[18px] text-[#00171f] font-[600] '>
              SignUp
              </span>
            </button>

            <button className='bg-[#fffffff4] animate-bounce cursor-pointer 
             
             px-8 py-2 
             rounded-md mr-5'
             onClick={handelLogin}
             >
            <span className='text-[18px] text-[#00171f] font-[600] '>
              Login
              </span>
            </button>



          </div>
        </div>
        </div>

      
          
        </div>

      <div className=' hidden 800px:flex justify-end w-full  bg-[#0000004a] '>
     
     <div className=''>
     <Lottie
     loop={true}
     // autoplay={true}
     animationData={startingAnim}
    //  rendererSettings={
    //    SVGPreserveAspectRatio='xMidYMid slice'
    //  }
    //  width={800}
    //  height={1000}
   
     className=" w-full h-screen"
     >

     </Lottie>

     </div>
   



   </div>

  
      </div>
     

    
        

    </div>
  )
}

export default Home