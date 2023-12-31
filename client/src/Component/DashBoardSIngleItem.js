import React from 'react'
import { Link } from 'react-router-dom'

const DashBoardSIngleItem = ({active,activeValue,iconName, link,name}) => {
  return (
    <div className='w-full flex items-center p-4'>
   
        {iconName }
   
   
   
   
    {/* <iconName size={30} color={active ===activeValue ?"crimson":"#555"}></iconName> */}
    <h5 className={` pl-3 800px:pl-2 text-[15px] 800px:text-[18px] font-[500] 800px:font-[400] 
    ${active ===activeValue ?"text-[crimson]":"text-[#555]"}`}> {name}</h5>

  
   
</div>
  )
}

export default DashBoardSIngleItem