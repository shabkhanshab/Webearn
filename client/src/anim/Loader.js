import React from 'react'
import Lottie from 'lottie-react'
import Animation from './starting.json'


// add loader here 

const Loader = () => {
    // const options ={
    //     loop:false,
    //     autoplay:true,
    //     animationData:Animation,
    //     renderSettings:{
    //         SVGAnimatedPreserveAspectRatio:'xMidYMid slice'
    //     }
    // }
  return (
    
<>
<div style={{  display:"flex" , justifyContent:'center' 
    ,alignItems:"center"}}>
        <div style={{ width:"40%",height:"40%", 
        display:"flex" , justifyContent:'center' 
        ,alignItems:"center"}}>
        <Lottie  
        
        animationData={Animation}
        loop={true}
        width={300} height={300}
        
        ></Lottie>
         <h5 className="text-center mb-14 text-[25px] text-[#000000a1]">
        Your order is successful 😍
      </h5>
        </div>
       
      
    </div>
    <h5  style={{textAlign:"center" , marginBottom:"14px" , fontSize:"25px" ,color:"#000000a1"}}
        
        >
             Loading...
 
         </h5>
         
</>
   
  )
}

export default Loader