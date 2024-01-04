import React, { useEffect, useState } from 'react'
import { IoHandRightSharp, IoPerson, IoPersonSharp } from 'react-icons/io5'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { DataGrid } from "@mui/x-data-grid";
import axios from 'axios';
import { toast } from 'react-toastify';

const AdminDashBoard = () => {
    const [allUserClick,setAllUserClick] = useState(false)
    const [pmtReqClick,setPmtReqClick] = useState(false)
    // const {user} = useSelector((state)=> state.userRed )
    const [user,setUser] = useState([])
    
    console.log(user);

    const columns = [
        {field:"id",headerName:"Id", minWidth:30 , flex:0.5},
        {field:"name",headerName:"Name", minWidth:50 , flex:0.7},
        {field:"email",headerName:"EMail", minWidth:100 , flex:0.7},
        {field:"payment",headerName:"Payment", minWidth:30 , flex:0.5},
        {field:"balance",headerName:"Balance", minWidth:50 , flex:0.5},
    ]
    const row = []

    user.user && user.user.map((item,i)=>(
        row.push({
            id:i+1,
            name:item.name,
            email:item.email,
            payment:item.paymentMethod && (item.paymentMethod.payment && item.paymentMethod.payment ),
            balance:item.Balance
        })
    ))

    useEffect(()=>{
        const myUsers = async()=>{
            try{
                const data = await axios.post("https://webearn-dsk8.vercel.app/api/v2/user/my-user-admin",
                "MYADMINAUTH")
                setUser(data.user)
            }
            catch(err){
                toast.error(
                    err.response && err.response.data.message
                    ? err.response.data.message
                    : err.message
                    ,{
                        toastId:"Success1"
                    }
                  )
            }
         
        }
        myUsers()
    },[])













  return (
    <div>
         <div className=' hidden w-full sticky h-[80px] bg-[white] shadow top-0 left-0
     z-30 800px:flex items-center justify-between px-4'>
         <div>
            <Link to='/dashboard'>
                <div className='rounded object-cover  w-[72px] h-[70px] ml-5'>
                <img className=' rounded-full '
                
                
                src={require('../../anim/webEarn.jpeg')}
                >
                </img>
                </div>
                
            </Link>
            </div>

            <div className='flex justify-center items-center cursor-pointer'
            onClick={(e)=>setAllUserClick(!allUserClick)}
            >
                <IoPerson size={25} className='mr-3'/>
                <h2 className='text-[17px] font-[600]'>All users</h2>
            </div>

            <div className='flex justify-center cursor-pointer items-center'
            onClick={(e)=> setPmtReqClick(!pmtReqClick)}
            >
                <IoHandRightSharp size={25} className='mr-3'/>
                <h2 className='text-[17px] font-[600]'>payment Request</h2>
            </div>

        </div>

        {
           allUserClick && (
                <div className="bg-white hidden 800px:flex  mt-10 h-full ml-2
     w-full   flex' overflow-x-scroll overflow-y-scroll ">
<div className="pl-1 py-1 w-full ">
      <DataGrid
        rows={row}
        columns={columns}
        disableRowSelectionOnClick
        autoHeight
        pagination={1}
      ></DataGrid>
    </div>
    </div>

            
           ) 
        }

    </div>
  )
}

export default AdminDashBoard