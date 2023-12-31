import React, { useEffect } from "react";

import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Form, Link } from "react-router-dom";
import styles from "../Style/style.js";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Lottie from "lottie-react";
import AnimationLogin from '../anim/Animation - Login.json'


const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate()
  const {isAuthenticatd } = useSelector((state)=>state.userRed)


  useEffect(()=>{
    if(isAuthenticatd){
      navigate("/dashboard")
    }

  },[isAuthenticatd])


  const handelSubmit =async(e)=>{
    e.preventDefault()
    // , {withCredentials:true} 
    try{
      const user = await axios.post("https://webearn-dsk8.vercel.app/api/v2/user/login-user",
      {email,pass} 
      ,{withCredentials:true})
      
      if(user){
        // console.log(user)
        // console.log(user.data.message)
        toast.success("login Successfull")
        setEmail("")
        setPass("")
        navigate("/dashboard")
        window.location.reload(true); 
      }
     
      
    }
    catch(err){
      // console.log(err)
      toast.error(err.response && err.response.data.message ? err.response.data.message : err.message)
    }
  }


  const handelForgetPass = async(e)=>{
    try{
      const forget = await axios.post("https://webearn-dsk8.vercel.app/api/v2/user/forget-email",)
    }
    catch(err){
      toast.error(err.response && err.response.data.message ? err.response.data.message : err.message)

    }
  }


  return (
    <div className="h-screen 800px:min-h-screen  bg-[#003459] flex flex-col 800px:justify-center py-12 sm:px-6 lg:px-8">
    <div className="flex 800px:justify-between  w-full justify-center">

    
    <div className="hidden 800px:flex 800px:ml-5  ">
        <Lottie
        autoplay
        className=" w-[500px] h-[500px]"
        animationData={AnimationLogin}>
        

        </Lottie>

    </div>

    <div className="800px:mr-20 w-full mx-2">

    
  <div className="sm:mx-auto mt-[50px] 800px:mt-0 sm:w-full sm:max-w-md 800px:mr-20">
    <h2 className="mt-3 text-center text-3xl font-extrabold text-white ">
      Login to your account
    </h2>
  </div>

  <div className="mt-8 sm:mx-auto  sm:w-full sm:max-w-md  800px:mr-20">
    <div className="bg-[#ffffff]  py-8 px-4 shadow-xl sm:rounded-lg sm:px-10">
      <form className="space-y-7" onSubmit={handelSubmit}>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-900"
          >
            Enter your email
          </label>
          <div className="mt-1 ">
            <input
              required
              type="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              className="appearance-none   block w-full px-3 py-2 border border-gray-300 rounded-sm
               placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            ></input>
          </div>
        </div>

        <div>
          <label
            htmlFor="password"
            className="text-gray-900 text-sm font-medium  block"
          >
            Password
          </label>

          <div className="mt-1 relative">
            <input
              required
              placeholder="Enter your password"
              type={visible ? "text" : "password"}
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              className="px-3 py-2 appearance-none block border  border-gray-300 rounded-sm w-full placeholder-gray-400 
                 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm "
            ></input>
            {visible ? (
              <AiOutlineEye
                size={25}
                className="absolute right-2 top-2"
                onClick={() => setVisible(false)}
              ></AiOutlineEye>
            ) : (
              <AiOutlineEyeInvisible
                size={25}
                className="absolute right-2 top-2"
                onClick={() => setVisible(true)}
              ></AiOutlineEyeInvisible>
            )}
          </div>
        </div>
        <div className={`${styles.normalFlex} justify-between`}>
          <div className={`${styles.normalFlex}`}>
            <input
              type="checkbox"
              name="remember-me"
              id="remember-me"
              className="h-4 w-4 text-blue-600  focus:ring-blue-500 border-gray-300 rounded-sm"
            ></input>
            <label
              htmlFor="remeber-me"
              className="ml-2  block text-gray-900 text-sm"
            >
              {" "}
              Remember me
            </label>
          </div>
          <div className=" text-md 800px:text-md ">
            <Link
              className=" text-[#00a8e8] underline font-medium hover:text-[#00a8e8]"
              to='/forget-pass'
            >
              {" "}
              forgot password?
            </Link>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="group text relative border border-transparent w-full h-[40px] flex justify-center py-2 px-4
              text-md  font-[600] rounded-md  text-white bg-[#007ea7] hover:bg-[#007da7e2] "
          >
            Login
          </button>
        </div>
        <div className={`${styles.normalFlex} w-full `}>
        <h4 className="text-gray-900">Not have an account?</h4> 
        <Link to='/signup' className=" underline text-[#00a8e8] pl-2 font-[600] text-[17px] "> Sign up</Link>

      </div>
      </form>
      
    </div>
  </div>
  </div>
  </div>
</div>
  );
};

export default Login;
