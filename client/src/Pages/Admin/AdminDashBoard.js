import React, { useEffect, useState } from 'react'
import { IoHandRightSharp, IoPerson, IoPersonSharp } from 'react-icons/io5'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { DataGrid } from "@mui/x-data-grid";
import axios from 'axios';
import { toast } from 'react-toastify';
import {AiOutlineDelete} from 'react-icons/ai'
const AdminDashBoard = () => {
    const [allUserClick,setAllUserClick] = useState(false)
    const [pmtReqClick,setPmtReqClick] = useState(false)
    const[active,setActive]=useState(0)
    // const {user} = useSelector((state)=> state.userRed )
    const [user,setUser] = useState([])

    const setHandelDelete = (async(params)=>{
        console.log(params);
        // const data = await axios.post()
    })
    
   
    useEffect(()=>{
        const myUsers = async()=>{
            try{
                const auth="MYADMINAUTH"
                const data = await axios.post("http://localhost:8000/api/v2/user/my-user-admin"
                )
                console.log(data);
                setUser(data.data.users)
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
    console.log("user",user);
    // console.log("users",user.users);
    const columns = [
        {field:"id",headerName:"Id", minWidth:30 , flex:0.5},
        {field:"name",headerName:"Name", minWidth:50 , flex:0.7},
        {field:"email",headerName:"EMail", minWidth:100 , flex:0.7},
        {field:"payment",headerName:"Payment", minWidth:30 , flex:0.5},
        {field:"balance",headerName:"Balance", minWidth:50 , flex:0.5},
        {field:"paymentDone",headerName:"payment Done",minWidth:50,flex:0.5,
    renderCell:(params)=>{
        return(
            <>
           <AiOutlineDelete size={20}
            onClink={(e)=>setHandelDelete(params.row.email)}>

            </AiOutlineDelete>
            </>
        )
    }}
    ]
    const row = []

    user && user.forEach((item,i)=>(
        row.push({
            id:i+1,
            name:item.name,
            email:item.email,
            payment:item.paymentMethod && (item.paymentMethod.payment && item.paymentMethod.payment ),
            balance:item.Balance
        })
    ))
    //  2nd time he argu with me like this, that's it this is the second time and ok
    //  i will not tolrate this again and u have to cut off from all this at today ok to work with these persons but never get give them
    //  the opportunity to take advantage  of you just be you and you will always be happy my bcha u r awsome and now can't beat you no one u rmy awsome
    //  child and you know na jindev is always with you then what's the issue 
    const pmtrow =[]

    user && user.forEach((item,i)=>(
       (item.raiseTicket === true) &&
            pmtrow.push({
                id:i+1,
            name:item.name,
            email:item.email,
            payment:item.paymentMethod && (item.paymentMethod.payment && item.paymentMethod.payment ),
            balance:item.Balance,
            

            })
    
      
    ))

   













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
            onClick={(e)=>setActive(0)}
            >
                <IoPerson size={25}
                color={active === 0 ? "red" :"#555"}
                 className='mr-3'/>
                <h2 className='text-[17px] font-[600]'>All users</h2>
            </div>

            <div className='flex justify-center cursor-pointer items-center'
            onClick={(e)=> setActive(1)}
            >
                <IoHandRightSharp size={25}
                color={active === 1 ? "red" :"#555"}
                className='mr-3'/>
                <h2 className='text-[17px] font-[600]'>payment Request</h2>
            </div>

        </div>

        {active === 0 &&
           
                <div className="bg-white hidden 800px:flex  mt-10 h-full ml-2
     w-full   flex' overflow-x-scroll overflow-y-scroll ">
<div className="pl-1 py-1 w-full ">
    {/* {console.log("0");} */}
      <DataGrid
        rows={row}
        columns={columns}
        disableRowSelectionOnClick
        autoHeight
        pagination={1}
      ></DataGrid>
    </div>
    </div>

            
            
        }

        {
           active === 1  && (
                <div className="bg-white hidden 800px:flex  mt-10 h-full ml-2
                w-full   flex' overflow-x-scroll overflow-y-scroll ">
           <div className="pl-1 py-1 w-full ">
            
                 <DataGrid
                   rows={pmtrow}
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