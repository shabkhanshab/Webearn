import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineArrowRight, AiOutlineCamera, AiOutlineDelete, AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "../Style/style";
import { Link } from "react-router-dom";
// import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid";
import { MdOutlineTrackChanges } from "react-icons/md";
import { RxAvatar, RxCross1 } from "react-icons/rx";
import {toast} from 'react-toastify'
import {IoPerson} from 'react-icons/io5'

import $ from 'jquery'
import FaqScreen from "./FaqScreen";
import Loader from "../anim/Loader";



const DashBoardMain = ({ active ,setActive}) => {
  const { user } = useSelector((state) => state.userRed);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [phoneNum, setPhoneNum] = useState();
  const [zipCode, setZipCode] = useState();
  const [avatar, setAvatar] = useState(null);
  const[click,setClick]=useState(true);
  const[trace,setTrace]=useState(1)
  const [paymentTrace,setPaymentTrace] = useState(4)

  useEffect(() => {
    if (user.user) {
      setName(user.user.name);
      // setAvatar(user.user.avatar.url);
      setEmail(user.user.email);
    }
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const sendEmail =()=>{
    toast.info(`we have send the request for reset password to ${email}`)
  }

  return (
    <div className="w-full">
      {/* profile */}
      {active === 2 && (
        <>
          <div className="flex justify-center mt-10 w-full ">
            <div className="relative">
              {
                user.user ?
                <img
                  alt=""
                  className="w-[150px] mt-5 h-[150px] rounded-full
                   object-cover border-[4px] border-[#5947cf]  "
                  src={`${user.user.avatar &&  user.user.avatar.url }`}
                ></img>:
                 <div
                 className="w-[120px] mt-8 h-[120px] 
                 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                   rounded-full object-cover border-[4px]  flex items-center justify-center
                 border-[#5947cf]  "

                >
                  <span className="text-white font-Roboto text-8xl font-[600]  shadow-sm ">
                    {user.user && user.user.name.charAt(0).toUpperCase()}
                    </span>

              </div>
              }

              <div
                className="rounded-full absolute  w-[30px] bottom-[5px] right-[5px] bg-[#E3E9EE] flex items-center
                     justify-center cursor-pointer h-[30px] border-t border-[white] border-[2px]"
              >
                <AiOutlineCamera color="#5947cf" size={22}></AiOutlineCamera>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="w-full px-5">
            <form onSubmit={submitHandler} aria-required={true}>
              <div className="w-full 800px:flex 800px:pb-10 block ">
                <div className="800px:w-[50%] w-full">
                  <label className="block pb-2"> Full Name</label>
                  <input
                    type="text"
                    autoCorrect="false"
                    required
                    contentEditable="false"
                    className={`${styles.input} !w-[95%] text-[#000000c1] border-[2px] border-indigo-500`}
                    value={name && name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="800px:w-[50%] w-full">
                  <label className="block pb-2"> Email</label>
                  <input
                    type="email"
                    required
                    contentEditable="false"
                    className={`${styles.input} !w-[95%] text-[#000000c1] border-[2px] border-indigo-500`}
                    value={email && email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>


              {/* <div className="w-full 800px:flex 800px:pb-3 block">
                <div className="800px:w-[50%] w-full">
                  <label className="block pb-2"> Phone Number</label>
                  <input
                    type="number"
                    required
                    className={`${styles.input} !w-[95%] text-[#000000c1]`}
                    value={phoneNum}
                    onChange={(e) => setPhoneNum(e.target.value)}
                  />
                </div> */}

                {/* <div className="800px:w-[50%] w-full">
                  <label className="block pb-2"> Zip Code</label>
                  <input
                    type="number"
                    required
                    className={`${styles.input} text-[#000000c1] !w-[95%]`}
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                  />
                </div> */}

              {/* </div> */}





              

              {/* <div className="w-full 800px:flex 800px:pb-3 block ">
                <div className="800px:w-[50%] w-full">
                  <label className="block pb-2">Address</label>
                  <input
                    type="text"
                    required
                    className={`${styles.input} text-[#000000c1] !w-[95%]`}
                    value={address1}
                    onChange={(e) => setAddress1(e.target.value)}
                  />
                </div>

                <div className="800px:w-[50%] w-full">
                  <label className="block pb-2"> Near Area , LandMark</label>
                  <input
                    type="text"
                    required
                    className={`${styles.input} text-[#000000c1] !w-[95%]`}
                    value={address2}
                    onChange={(e) => setAddress2(e.target.value)}
                  />
                </div>
              </div> */}

              {/* <div className="flex justify-center items-center">
                <button
                  type="submit"
                  className="w-[250px] h-[40px] border 
              border-[#3a24db] text-[#3a24db] rounded-[3px] mt-8 mb-5 cursor-pointer shadow-sm"
                >
                  Update
                </button>
              </div> */}
            </form>
          </div>
        </>
      )}

      {/* order */}
      {active === 1 && (
        <div >
          <AllOffers />
        </div>
      )}
      {/* refund */}
      {active === 3 && (

         <div >
          <OrderComplete />
        </div>
      )}

      {/* track order */}

      {/* {active === 5 && (
        <>
         <div>
          {console.log(trace)}
          <TrackOrder />
        </div>
        </>
       
      )} */}

      {/* payment methods */}

      {
      active === 4 &&  <div >
      
      <PaymentMethod  setActive={setActive} trace={trace}
      />
    </div>
      }

      {/* {active===7 && <div ><Address/></div>} */}
      {active === 5 && <div>
       
        {
          
         <Password name={name} user={user} trace={trace} setActive = {setActive}/>
        }
        
        </div>}
        {
          active === 6 && <FaqScreen/>
        }
        
     
    </div>
  );
};

const AllOffers = () => {
    // const [offersm, setOffers] = useState([]);
    // const [offname, setOffName] = useState([]);
    const [combinedOffers, setCombinedOffers] = useState([]);
    const {user} = useSelector((state)=>state.userRed)
    console.log(user,"user");
  
    useEffect(() => {
      $.getJSON(`https://cpalead.com/dashboard/reports/campaign_json.php?id=2831541&format=JSONP&country=IN&subid=${user._id}&password=jaibajrangbalig&callback=?`,
      
                  function(data)
                  {
                      var offers = '';
            // var offArray =[]
            // var nameArray=[]
            var combinedArray =[]
                      $.each(data.offers, function(o, offer)
                      {
  
                          offers += '<a href="'+offer.link+'" class="list-group-item">'+offer.title+'</a>';
                    combinedArray.push(
                        { link: offer.link,
                             title: offer.title,
                             amount: offer.amount,
                             rank:offer.rank,
                             description:offer.description,
                             mobileBol:offer.mobile_app_type,
                             category_name:offer.category_name



                             }
                        ); 
                        console.log("offer",offer);
            //   after complete remove these
                        // nameArray.push(offer.title)
                        // offArray.push(offer.link)
             
             
                      });
            // console.log("offaAr",offArray);
           
            // setOffers(offArray)
            // setOffName(nameArray)
            setCombinedOffers(combinedArray)
            // const off = offers.split(",")
            // console.log(typeof offersm);
  
            // console.log("offer",offersm);
           
                      $(".offer-list").html(offers);
                      $(".progress").hide();
  
            
                  });
    }, []);

  const columns = [
    { field: "rank", headerName: "Rank", minWidth: 50, flex: 0.7 },

    {
      field: "offerName",
      headerName: "Offer Name",
      minWidth: 150,
      flex: 0.7,
     renderCell: (params) => {
        return (
          <>
            {/* {console.log(params,"params")} */}
            {combinedOffers.map((i,e)=>(
        // <div className='py-5 border-[2px] my-5 border-indigo-500 w-[50%]'>
            <Link to={i.link} key={e}>
            {i.title}

          </Link>
        //   </div>
        
        ))}
          </>
        );
      },
    },
    
    {
      field: "device",
      headerName: "Device",
      
      minWidth: 130,
      flex: 0.7,
    },

    {
      field: "description",
      headerName: "Description",
    //   type: "number",
      minWidth: 130,
      flex: 0.8,
      
    },


    {
        field: "payout",
        headerName: "Payout",
      //   type: "number",
        minWidth: 130,
        flex: 0.8,
      },
//     {
//       field: " ",
//       flex: 1,
//       minWidth: 150,
//       headerName: "",
//       type: "number",
//       sortable: false,
//       renderCell: (params) => {
//         return (
//           <>
//             {/* {console.log(params,"params")} */}
//             <Link to={`/user/order/${params.id}`}>
//               <Button>
//                 <AiOutlineArrowRight size={20} />
//               </Button>
//             </Link>
//           </>
//         );
//       },
//     },
  ];

  const row = [];
  {console.log("combinedOffers",combinedOffers);}
 
  combinedOffers &&
    combinedOffers.forEach((item,i) => {
      row.push({
        id:i+1,
        rank: item.rank,
        // offerName:item.title,
        payout:  item.amount +"$",
        mobile: item.mobileBol,
        description: item.description,
      });
    });
//     const comb=[{rank:"1",
//   description:"loremloremhlo lorencbuwdbjak",
//   title:"surveyyy",
//   amount:"10.20$"
// },
// {rank:"1",
//   description:"loremloremlo lorencbuwdbjakloremloremhlo lorencbuwdbjak",
//   title:"surveyyy",
//   amount:"10.20$"
// }]

  return (
    <>
    
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

    <div className="800px:hidden w-full   overflow-y-auto flex-1
     flex-col shadow-xl justify-center items-center">
   
      {
       
        (combinedOffers.length !==0)
         ? 
         combinedOffers.map((item,i)=>(
        

          <div className="w-full px-3 py-2  my-5 shadow-lg bg-[#ffc0cbec] " key={i}>
           {console.log("object")}
            <div className="flex w-full flex-col space-y-2">
              <div className="flex justify-between ">
              <h2>{item.rank}</h2>
              <h3>{((item.amount * 40)/100).toFixed(2)}$</h3>
                </div>
                <div className="flex items-center">
                  <h1 className="text-blue-500 font-[600] text-[17px]">
                 { 
      
                  <Link to={item.link}>
                  {item.title}

                </Link>
            
        
        }
                    
                    </h1>
                  </div>
                  <div className="flex  py-2 ">
                  <h3 className="mr-2">{item.mobileBol}</h3>
                  <h3>({item.category_name})</h3>
</div>
                  <p >
                    {item.description}
                  </p>
              
              </div>
            </div>
      
         ))

        :

        <div className="flex justify-center items-center">
       
          <h1 className="text-[18px] font-[600]  font-Roboto">
            Sorry no offers </h1>
          </div>
      }
      

    </div>
    </>
  );
};

const OrderComplete = () => {
//   const orders = [
//     {
//       _id: " 25584558811",
//       orderItems: [
//         {
//           name: "Iphone 14 pro max",
//         },
//       ],
//       totalPrice: 120,
//       orderStatus: "Processing",
//     },
//   ];

const {user} = useSelector((state)=>state.userRed)
 const columns = [
    { field: "id", headerName: "Id", minWidth: 50, flex: 0.7 },

    {
      field: "offerName",
      headerName: "Offer Name",
      minWidth: 150,
      flex: 0.7,
    //  renderCell: (params) => {
    //     return (
    //       <>
    //         {/* {console.log(params,"params")} */}
    //         {/* {combinedOffers.map((i,e)=>(
    //     <div className='py-5 border-[2px] my-5 border-indigo-500 w-[50%]'>
    //         <Link to={i.link} key={e}>
    //         {i.title}

    //       </Link>


    //       </div>
        
    //     ))} */}
    //       </>
    //     );
    //   },
    },
    
    {
      field: "device",
      headerName: "Device",
      
      minWidth: 130,
      flex: 0.7,
    },

    // {
    //   field: "description",
    //   headerName: "Description",
    // //   type: "number",
    //   minWidth: 130,
    //   flex: 0.8,
      
    // },


    {
        field: "payout",
        headerName: "Payout",
      //   type: "number",
        minWidth: 130,
        flex: 0.8,
      },
//     {
//       field: " ",
//       flex: 1,
//       minWidth: 150,
//       headerName: "",
//       type: "number",
//       sortable: false,
//       renderCell: (params) => {
//         return (
//           <>
//             {/* {console.log(params,"params")} */}
//             <Link to={`/user/order/${params.id}`}>
//               <Button>
//                 <AiOutlineArrowRight size={20} />
//               </Button>
//             </Link>
//           </>
//         );
//       },
//     },
  ];




  const row = [];
  user.user &&
    user.user.cpa_details.forEach((item,i) => {
      row.push({
        id: i,
        offerName: item.offer_name,
        payout: item.payout + '$',
        
      });
    });




  return (
    <>
   
    <div className="  bg-white flex  mt-10 h-full ml-2
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
   
    </>

  );
};









// const TrackOrder = () => {
//   const orders = [
//     {
//       _id: " 25584558811",
//       orderItems: [
//         {
//           name: "Iphone 14 pro max",
//         },
//       ],
//       totalPrice: 120,
//       orderStatus: "Processing",
//     },
//   ];

//   const column = [
//     { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

  
//     {
//       field: "status",
//       headerName: "Status",
//       minWidth: 130,
//       flex: 0.7,
//       cellClassName: (params) => {
//       return  params.api.getCellValue(params.id, "status") === "Delivered"
//           ? "greenColor"
//           : "redColor";
//       },
//     },
//     {
//       field: "itemsQty",
//       headerName: "Items Qty",
//       type: "number",
//       minWidth: 130,
//       flex: 0.7,
//     },
//     {
//       field: "total",
//       headerName: "Total",
//       type: "number",
//       minWidth: 130,
//       flex: 0.8,
//     },
//     {
//       field: "",
//       headerName: "",
//       minWidth: 130,
//       flex: 1,
//       type: "number",
//       sortable: false,
//       renderCell: (params) => {
//         return (
//           <>
//             <Link to={`/user/order/${params.id}`}>
//               <Button>
//                 <MdOutlineTrackChanges size={20} />
//               </Button>
//             </Link>
//           </>
//         );
//       },
//     },
//   ];

//   const row=[]

//   orders && orders.forEach((items)=>{
//     row.push({
//       id:items._id,
//       itemsQty:items.orderItems.length,
//       total:"₹" + items.totalPrice,
//       status: items.orderStatus
//     })
//   })

//   return(
//     <div>
//       <DataGrid
//       rows={row}
//       columns={column}
//       disableRowSelectionOnClick
//       autoHeight
//       pagination="false">

//       </DataGrid>

//     </div>
//   )
// }};


const PaymentMethod =({setActive,trace})=>{
    const {user} = useSelector((state)=>state.userRed)
    const [handelDltClick, setHandelDltClick] = useState(false)
    const [showPass,setShowPass]= useState(false)
    const [password,setPassword] = useState("")
    const [addnewClick,setAddNewClick] = useState(false)
    const [upi,setUpi] = useState("")
    const [showUpi,setShowUpi] = useState(false)
   const [showReqButton, setShowReqButton] = useState(false)
   const[moneyPopup,setMoneyPopup] = useState(false)
   const [reqpass,setReqPass] = useState("")
   const [load,setLoad] = useState(false)
   const [reqShowPass,setReqShowPass] = useState(false)
   const moneyTransferReq = async()=>{
    try{ 
      setLoad(true)
      const id = user && user._id
      const data = await axios.post("https://webearn-dsk8.vercel.app/api/v2/user/raise-ticket",
      {reqpass,id},{withCredentials:true})
      setActive(trace)
      window.location.reload()
      toast.success(data.data.message,{toastId:"Success1"})
    }

    catch(err){
      setLoad(false)
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
      setLoad(false)
    }
  

   }
   const DeleteButtonHandel = async ()=>{
    try{
        const id = user.user._id
        const data = await axios.post('https://webearn-dsk8.vercel.app/api/v2/user/payment-method-delete'
        ,{id,password}, {withCredentials:true})
        console.log(data);
        
        setActive(trace)
        window.location.reload()
        toast.success(data.data.message,{toastId:"Success1"})
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

   const handelClose = (e)=>{
    setActive(trace)
   }
   const AddUpi = async()=>{
    try{
        const id = user.user._id
        const data = await axios.post("https://webearn-dsk8.vercel.app/api/v2/user/add-pay-upi"
        ,{upi,id},{withCredentials:true}
        )

        if(data){
            // console.log(data);
           
            setActive(trace)
            window.location.reload()
            toast.success(data.data.message,{toastId:"Success1"})
        }
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

  return(
    load ? <Loader/> : 
    <div className="w-full px-5">

        
            <div className="flex justify-between items-center w-full">
            <h1 className="font-[600] text-[25px] pb-2 text-[#000000ba]">Payment Methods</h1>
            {
                user.user && 

            (user.user.paymentMethod.payment ==='' ) ? 
            <div className={`${styles.button} !rounded-md`}
            onClick={()=>setAddNewClick(true)}
            >
              <span className="text-[#fff]">Add New</span>
              </div> : null
        
        }
      </div>

      <br></br>


      <div className="w-full bg-white 800px:h-[70px] rounded-[4px]  800px:flex items-center px-3 shadow justify-between pr-10">
        <div className="800px:flex items-start pt-2">
          <img className="w-[60px] h-[40px] "
          src={require('../anim/upi.webp')}
          ></img>
          {/* <h5 className="800px:pl-8 font-[600] pt-2 800px:pt-0">Name</h5> */}

        </div>

        <div className="800px:pl-8 flex items-start">
            
            <h5 className=" font-[600] 800px:text-[17px] text-[13px] ">{
            user.user && user.user.name}</h5>
            {/* <h6 className="800px:hidden  "> Mohalli 5/63258 gd road ola city bhutan</h6> */}
  
          </div>
        <div className="800px:pl-8 800px:flex 800px:items-start">
          <h6> { user.user &&
          user.user.paymentMethod ?
       ( (user.user.paymentMethod.payment === ""  ) ?  
       "Add Payment Method " : user.user.paymentMethod.payment)
       
       : ""}</h6>
         

        </div>
        <div className="800px:pl-8 800px:flex 800px:items-start">
            {/* {console.log("myuser",user.user,"paymentuser",user.user.payment)} */}
        <h5 className="800px:pl-6">{
            user.user ?

       ( 
        user.user.paymentMethod.payment !== "" ?
         user.user.paymentMethod.paymentAdd.slice(0,10) :
          "" )
          :""

        }</h5>
            
          </div>
        <div className="min-w-[10%] flex items-end 800px:items-center 800px:justify-between justify-end 800px:pl-8 pb-1  ">
          
          {
            user.user &&
            user.user.paymentMethod.payment !== "" && 
          
          <AiOutlineDelete size={20} className="cursor-pointer"
          onClick={(e)=>setHandelDltClick(true)}
          ></AiOutlineDelete>
}
        </div>
      </div>




      {handelDltClick && (
         
           
            <div className="top-0 left-0 w-full  h-screen bg-[#0000004b]  py-5 px-2
             fixed z-30  800px:flex justify-center items-center ">
                {console.log("ehy")}
           
              <div className="800px:w-[30%]  w-full bg-white shadow-lg rounded-[10px] ">
        
                <div className="flex justify-end pt-3 pr-3">
                  <RxCross1 className="cursor-pointer" 
                  onClick={handelClose}
                   size={20}/>
        </div>
        <div className="flex  flex-col item-start justify-start w-full px-5 py-5">
        
          <h2 className="font-[500] text-blue-500 text-[15px] pb-2"></h2>
          <h1 className="font-[600] text-[22px] pb-2">
           Attention!!  Delete payment Method 
          </h1>
          <h4> Please be careful while deleting the payment Method.   </h4>
         <div className="relative  mt-5">
            <label
            htmlFor="password"
            
            >
                Enter your password
                </label>

          <input className="w-full px-2 py-2 border relative border-[#000000b3] hover:border-indigo-500 
           hover:border-[2px] block  placeholder:placeholder-[#0000004c]"
           placeholder="Enter your password"
           required
           type={showPass ? "text" : 'password'}
           value={password}
           onChange={(e)=>setPassword(e.target.value)}
           >
          </input>

          {
            showPass ?
            <AiOutlineEye
                size={25}
                className="absolute right-2 cursor-pointer top-8"
                onClick={() => setShowPass(false)}
              ></AiOutlineEye>
            :
            <AiOutlineEyeInvisible
            size={25}
            className="absolute right-2 cursor-pointer top-8"
            onClick={() => setShowPass(true)}
          ></AiOutlineEyeInvisible>
          }
          </div>

         
            <div className="w-full flex justify-end item-end mt-5 mb-2">
                <button className='px-4 py-2 bg-black border text-white font-[600]
                text-[15px] hover:border-[2px] rounded-[3px] shadow-md'
                onClick={DeleteButtonHandel}
                >
                    Delete

                </button>


            </div>
        
        </div>
                 
        
        
              
        
            </div>
            </div>
            
          
      )}





{addnewClick && (
         
           
         <div className="top-0 left-0 w-full  h-screen bg-[#0000004b]  py-5 px-2
          fixed z-30  800px:flex justify-center items-center ">
             {console.log("ehy")}
        
           <div className="800px:w-[30%]  w-full bg-white shadow-lg rounded-[10px] ">
     
             <div className="flex justify-end pt-3 pr-3">
               <RxCross1 className="cursor-pointer" 
               onClick={handelClose}
                size={20}/>
     </div>
     <div className="flex  flex-col item-start justify-start w-full px-5 py-5">
     
       <h2 className="font-[500] text-blue-500 text-[15px] pb-2"></h2>
       <h1 className="font-[600] text-[22px] pb-2">
        Add payment Method 
       </h1>
       <h4> Please be careful while adding the payment Method.   </h4>
      <div className="relative  mt-5">
         <label
         htmlFor="password"
         className="font-[600]"
         
         >
             UPI ID
             </label>

       <input className="w-full px-2 py-2 border relative border-[#000000b3] hover:border-indigo-500 
        hover:border-[2px] block  placeholder:placeholder-[#0000004c]"
        placeholder="Enter your UPI id "
        required
        type={showUpi ? "text" : 'password'}
        value={upi}
        onChange={(e)=>setUpi(e.target.value)}
        >
       </input>

       {
         showUpi ?
         <AiOutlineEye
             size={25}
             className="absolute right-2 cursor-pointer top-8"
             onClick={() => setShowUpi(false)}
           ></AiOutlineEye>
         :
         <AiOutlineEyeInvisible
         size={25}
         className="absolute right-2 cursor-pointer top-8"
         onClick={() => setShowUpi(true)}
       ></AiOutlineEyeInvisible>
       }
       </div>

      
         <div className="w-full flex justify-end item-end mt-5 mb-2">
             <button className='px-4 py-2 bg-black border text-white font-[600]
             text-[15px] hover:border-[2px] rounded-[3px] shadow-md'
             onClick={AddUpi}
             >
                 Add

             </button>


         </div>
     
     </div>
              
     
     
           
     
         </div>
         </div>
         
       
   )}


   {
    user.user && 
      (user.user.Balance >= 5 ?

        <>
         <div className="flex w-full mt-5 justify-center items-center">
   <div className={`${styles.button} !rounded-md px-2 py-3 cursor-pointer`}
   onClick={moneyTransferReq}
   >
         <span className="text-white font-[600] ">
          Send request
          </span>
         </div>

   </div>

        </>
        : ""
        
        )
    
   }

   {
    moneyPopup && 
    <div className="top-0 left-0 w-full  h-screen bg-[#0000004b]  py-5 px-2
    fixed z-30  800px:flex justify-center items-center ">
       {console.log("ehy")}
  
     <div className="800px:w-[30%]  w-full bg-white shadow-lg rounded-[10px] ">

       <div className="flex justify-end pt-3 pr-3">
         <RxCross1 className="cursor-pointer" 
         onClick={handelClose}
          size={20}/>
</div>
<div className="flex  flex-col item-start justify-start w-full px-5 py-5">

 <h2 className="font-[500] text-blue-500 text-[15px] pb-2"></h2>
 <h1 className="font-[600] text-[22px] pb-2">
  Send Money transfer Request!!
 </h1>
 <h4> Click the button and raise the ticket.   </h4>
<div className="relative  mt-5">
   <label
   htmlFor="password"
   
   >
       Enter your password
       </label>

 <input className="w-full px-2 py-2 border relative border-[#000000b3] hover:border-indigo-500 
  hover:border-[2px] block  placeholder:placeholder-[#0000004c]"
  placeholder="Enter your password"
  required
  type={reqShowPass ? "text" : 'password'}
  value={reqpass}
  onChange={(e)=>setReqPass(e.target.value)}
  >
 </input>

 {
   showPass ?
   <AiOutlineEye
       size={25}
       className="absolute right-2 cursor-pointer top-8"
       onClick={() => reqShowPass(false)}
     ></AiOutlineEye>
   :
   <AiOutlineEyeInvisible
   size={25}
   className="absolute right-2 cursor-pointer top-8"
   onClick={() => reqShowPass(true)}
 ></AiOutlineEyeInvisible>
 }
 </div>


   <div className="w-full flex justify-end item-end mt-5 mb-2">
       <button className='px-4 py-2 bg-black border text-white font-[600]
       text-[15px] hover:border-[2px] rounded-[3px] shadow-md'
       onClick={moneyTransferReq}
       >
           Send request

       </button>


   </div>

</div>
        


     

   </div>
   </div>
   }

 





    </div>
  )
}









// const Address =()=>{
 
//     return(
//       <div className="w-full px-5">
//         <div className="flex justify-between items-center w-full">
//           <h1 className="font-[600] text-[25px] pb-2 text-[#000000ba]">Address</h1>
//           <div className={`${styles.button} !rounded-md`}>
//             <span className="text-[#fff]">Add New</span>
//             </div>
//         </div>
//         <br>
//         </br>
//         <div className="w-full bg-white 800px:h-[70px] rounded-[4px] 800px:flex 800px:items-center px-3 shadow justify-between pr-10">
//           <div className="800px:pl-8 flex items-start">
            
//             <h5 className="800px:pl-8 font-[600] 800px:text-[17px] text-[13px] ">Default Address</h5>
//             {/* <h6 className="800px:hidden  "> Mohalli 5/63258 gd road ola city bhutan</h6> */}
  
//           </div>
//           <div className=" 800px:pl-8 800px:flex 800px:items-start">
//             <h6>Mohalli 5/63258 gd road ola city bhutan</h6>
            
//           </div>
//           <div className="800px:pl-8 flex items-start">
//             <h6>(+91) 748826812255</h6>
            
//           </div>
//           <div className="min-w-[10%] flex  items-end justify-end 800px:items-center 800px:justify-between pl-8 pb-1">
//             <AiOutlineDelete size={20} className="cursor-pointer"></AiOutlineDelete>
//           </div>
//         </div>
  
//       </div>
//     )
//   }

const Password =({name,trace,setActive,user})=>{

  

  const [password,setPassword] = useState("")
  const[passClick,setPassClick] = useState(false)
  const [newPassword,setNewPassword] = useState("")
  const[newpassClick,setNewPassClick] = useState(false)
  const [confirmPassword,setConfirmPassword]= useState("")
  const[confirmpassClick,setConfirmPassClick] = useState(false)
  const id = user.user && user.user._id
  const [loadsend,setLoadSend] = useState(false)
 
  const sendEmail =async()=>{

    console.log("firs",id)
    console.log("sec",user)
    if(newPassword.length <5 || newPassword.length >16){
      toast.error("password length must be between 5 to 16 character")
      return
    }
    if(newPassword !== confirmPassword){
      toast.error("new password and confirm password must be same ")
      return
    }

    try{
      setLoadSend(true)
      const {data} = 
      await axios.post("https://webearn-dsk8.vercel.app/api/v2/user/reset-pass",
      {password,newPassword,id},
      {
        withCredentials: true,
      })
      toast.success(data.message)
    }
    catch(err){
      setLoadSend(false)
      toast.error(err.response && err.response.data.message ? err.response.data.message : err.message)

    }
    finally{
      setLoadSend(false)
    }
   
  }

  const forgetEmail= async()=>{
    try{
      setLoadSend(true)
      const {data} = 
      await axios.post("https://webearn-dsk8.vercel.app/api/v2/user/forget-email",
      {id},
      {
        withCredentials: true,
      })
      toast.success(data.message)
    
    }
    catch(err){
      setLoadSend(false)
      toast.error(err.response && err.response.data.message ? err.response.data.message : err.message)

    }
    finally{
      setLoadSend(false)
    }
  }

  return(
    loadsend ? <Loader/> : 
   <>
  
    <div className="top-0 left-0 w-full  h-screen bg-[#0000004b]  py-5 px-2
     fixed z-30  800px:flex justify-center items-center ">
   
      <div className="800px:w-[30%]  w-full bg-white shadow-lg rounded-[10px] ">

        <div className="flex justify-end pt-3 pr-3">
          <RxCross1 className="cursor-pointer" onClick={()=>setActive(trace)}
           size={20}/>
</div>
<div className="flex  flex-col item-start justify-start w-full px-5 py-5">
 
  <h1 className="font-[600] text-[22px] pb-2">
    Change password
  </h1>
  <h4>Your password must me atleast 5 charcater and atmost 16 charcater and 
    for secure password please include the combination of number,letters, special charcater #%!</h4>

</div>
           <div className="w-full  py-3 px-3">
            <div className="relative">
            <input type={passClick?"text":"password"} placeholder="Enter Old Password"
            required onChange={(e)=>setPassword(e.target.value)}
            
             className="rounded-[8px] my-3 py-2 hover:border-[2px]
              p-2 hover:border-blue-600 border w-full placeholder:text-[#0000007e] border-[#0000005a]
              ">
                
            </input>
            {
              passClick ? 
               <AiOutlineEye onClick={(e)=>setPassClick(false)} className="top-5 right-2 absolute " size={25}/> 
               :

              <AiOutlineEyeInvisible onClick={(e)=>setPassClick(true)} size={25} className="top-5 right-2 absolute">

              </AiOutlineEyeInvisible>
            }
            

            </div>
           <div className="relative">
           <input type={newpassClick ? "text" : "password"} placeholder="Enter New Password"
            required  onChange={(e)=>setNewPassword(e.target.value)} minLength={5} maxLength={16}
             className="rounded-[8px] my-3 py-2 hover:border-[2px]
              p-2 hover:border-blue-600 border w-full placeholder:text-[#0000007e] border-[#0000005a]
              ">

            </input>
            {
              newpassClick ? 
               <AiOutlineEye onClick={(e)=>setNewPassClick(false)} className="top-5 right-2 absolute " size={25}/> 
               :

              <AiOutlineEyeInvisible onClick={(e)=>setNewPassClick(true)} size={25} className="top-5 right-2 absolute">

              </AiOutlineEyeInvisible>
            }
           </div>

          <div className="relative">
          <input type={confirmpassClick ? "text":"password"} placeholder="Enter Confirm Password"
            required   onChange={(e)=>setConfirmPassword(e.target.value)} minLength={5} maxLength={16}
             className="rounded-[8px] my-3 py-2 hover:border-[2px]
              p-2 hover:border-blue-600 border w-full placeholder:text-[#0000007e] border-[#0000005a]
              ">

            </input>
            {
              confirmpassClick ? 
               <AiOutlineEye onClick={(e)=>setConfirmPassClick(false)} className="top-5 right-2 absolute " size={25}/> 
               :

              <AiOutlineEyeInvisible onClick={(e)=>setConfirmPassClick(true)} size={25} className="top-5 right-2 absolute">

              </AiOutlineEyeInvisible>
            }
          </div>

           

            <div className="w-full py-3  flex item-start">
              <h4 className="font-[550] cursor-pointer
               text-blue-800 hover:underline-offset-1 hover:underline "
              onClick={forgetEmail}
              >
                
                Forget your password ?
              
                </h4>
              </div>

              <div className="flex justify-center items-center rounded-lg mt-5 
              h-[40px] py-2 bg-blue-600 px-5" onClick={sendEmail}
              >
                <div className="text-white font-[550] cursor-pointer "> Change Password

                </div>

              </div>

           </div>


      

    </div>
    </div>
    </>
    
  )


  }

//   const Logout =()=>{

//     return(
// <></>
//     )
//   }

export default DashBoardMain;
