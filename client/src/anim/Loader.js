import React from 'react'
import Lottie from 'lottie-react'
import Animation from './Animation - Loader.json'


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
    
<div>
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
         
        </div>
       
      
    </div>

    <div>

   

    <h5  style={{textAlign:"center" , marginBottom:"14px" , fontSize:"25px" ,color:"white"}}
        
        >
             Loading...
 
         </h5>
         </div>
</div>
   
  )
}

export default Loader