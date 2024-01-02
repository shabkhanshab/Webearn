import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import DashBoardHeader from '../Component/DashBoardHeader';
import DashBoardSideBar from '../Component/DashBoardSideBar';
import DashBoardMain from './DashBoardMain';
import styles from '../Style/style';
import DashBoardDash from '../Component/SubComp/DashBoardDash';

const Dashboard = () => {
   const {user} = useSelector((state)=>state.userRed)
//    console.log("user.cpa_details",user.cpa_details);
//    console.log("us",user);
//    console.log("user.cpa_details",user.user.cpa_details);
const [active,setActive] = useState(1)

  return (

    <div >
        <DashBoardHeader active={active} setActive={setActive}/>

        <div className={`w-full flex   `}>
            <div className='w-[18%]  800px:w-[20%]  '>

                <DashBoardSideBar active={active} setActive={setActive}/>
            </div>
            <div className='w-[80%] h-full mt-5 ml-3  mr-3 800px:bg-white 800px:w-[75%]'>
            <DashBoardMain active={active} setActive={setActive}/>
            
            </div>

           
         

                

           


        </div>
        
  



          {/*!!!!! important don't delete!!!!!!!!!!!! */}
            {/* {user.user.cpa_details.map((i,index)=>(
                <h1>
                    {i.offer_name}
                </h1>
            ))} */}








        </div>

  )
}

export default Dashboard