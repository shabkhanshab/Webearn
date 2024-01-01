import React, { useState, useEffect } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "../Style/style";
import { Link } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Lottie from "lottie-react";
import AnimationLogin from '../anim/Animation - Login.json'
import Loader from "../anim/Loader";
// import { response } from "express";

// import express from "express";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [confirmPass, setComfirmPass] = useState("");
  const [show, setShow] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate();

  const { isAuthenticatd } = useSelector((state) => state.userRed);

  useEffect(() => {
    if (isAuthenticatd) {
      navigate("/");
    }
  }, []);

  const setProfileAvatar = (e) => {
    const selected = e.target.files[0]
    const maxSizeInBytes = 1024 * 1024
    if(selected){
      if(selected.size > maxSizeInBytes ){
        alert("Image size to large! please upload less than 1 mb file")
      }
    }
    else{
      const render = new FileReader();
      render.readAsDataURL(e.target.files[0]);
      render.onload = () => {
        if (render.readyState === 2) {
          setAvatar(render.result);
        }
      };
    }
  
  };
console.log("avatar",avatar);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const dat = await axios.post(
        "https://webearn-dsk8.vercel.app/api/v2/user/create-user",
        { name, email,  password, avatar }
      );
      setLoading(true)
      
      if(dat){
        setLoading(false)
        toast.success(dat.data.message);
        navigate("/login");
        setName("");
        setEmail("");
        setPass("");
        setComfirmPass("");
        setAvatar();
      }
     
    } catch (err) {
      setLoading(false)
      toast.error(
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message
      );
      // console.log(err.response.data.message)
    }
  };

  return (
    <>
   
    {
      loading ? <Loader/> :
    <>
  

    <div className="bg-[#003459] py-12 min-h-screen sm:px-6 lg:px-8 flex justify-center flex-col">

    <div className="flex justify-center  ">
    
    
    <div className="hidden 800px:flex 800px:ml-5   ">
                <Lottie
                autoplay
                className=" w-[500px] h-[500px]"
                animationData={AnimationLogin}>
                
    
                </Lottie>
    
            </div>
    
    
    
          <div className="sm:mx-auto w-full sm:w-full sm:max-w-md">
            <h2 className="mt-2 text-center font-extrabold text-white text-3xl">
           
              Create Account
            </h2>
    
            <div className="mt-8 w-[full] mx-2 sm:mx-auto sm:w-full sm:max-w-md ">
              <div className="bg-white py-8 px-4 shadow sm:rounder-lg sm:px-10">
    
    
    
    
                
                <form className="space-y-6" onSubmit={submitHandler}>
                  <div>
                    <label
                      htmlFor="Name"
                      className="block text-sm text-gray-700 font-medium"
                    >
                      Name
                    </label>
                    <input
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      name="Name"
                      placeholder="Enter your name"
                      className="text-sm block font-medium appearance-none border border-gray-300 w-full placeholder-gray-400
                      focus:ring-blue-500 focus:border-blue-500 rounded-sm focus:outline-none px-3 py-2 sm:text-sm
                      "
                    ></input>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="text-gray-700 font-medium text-sm block"
                    >
                      Email
                    </label>
                    <input
                      required
                      autoComplete="on"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your Email"
                      type="email"
                      className="py-2 px-3 w-full block appearance-none border text-sm border-gray-300 placeholder-gray-400
                    focus:ring-blue-500 focus:border-blue-500 focus:outline-none rounded-sm sm:text-sm font-medium"
                    ></input>
                  </div>
    
                  <div className="relative">
                    <label
                      htmlFor="password"
                      className="block text-gray-700 font-medium text-sm"
                    >
                  
                      Password
                    </label>
                    <input
                      required
                      type={show ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPass(e.target.value)}
                      placeholder="Enter your Password"
                      className="py-2 px-3 w-full appearance-none border border-gray-300 placeholder-gray-400 
                  block focus:border-blue-500 focus:outline-none focus:ring-blue-500 rounded-sm sm:text-sm font-medium"
                    ></input>
    
    
                     {show ? (
                      <AiOutlineEye
                        size={25}
                        onClick={() => setShow(false)}
                        className="absolute right-2 top-7"
                      ></AiOutlineEye>
                    ) : (
                      <AiOutlineEyeInvisible
                        size={25}
                        onClick={() => setShow(true)}
                        className="absolute right-2 top-7"
                      ></AiOutlineEyeInvisible>
                    )}
                  </div>
    
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-color-700 text-sm font-medium"
                    >
                      Confirm Password
                    </label>
                    <input
                      value={confirmPass}
                      required
                      onChange={(e) => setComfirmPass(e.target.value)}
                      placeholder="Enter Confirm Password"
                      type="password"
                      className="py-2  px-3 appearance-none border border-gray-300 placeholder-gray-400 w-full block
                    focus:ring-blue-500 focus:outline-none rounded-sm sm:text-sm font-medium focus:border-blue-500 "
                    ></input>
                  </div>
                  <div>
                    <label
                      htmlFor="avatar"
                      className="block text-sm font-medium text-gray-700"
                    ></label>
                    
                   <div className="mt-2 flex items-center">
                   <span className="inline-block h-8 w-8 rounded-full overflow-hidden">
                        {avatar ? (
                          <img
                          src={avatar}
                            alt="avatar"
                            className="h-full w-full object-cover rounded-full"
                          >
                          </img>
                        ) : (
                          <RxAvatar className="h-8 w-8 "></RxAvatar>
                        )}
                      </span>
                      <label
                        htmlFor="file-input"
                        className="ml-5 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm backdrop:font-medium text-gray-700 bg-white hover:backdrop:bg-gray-50"
                      >
                        <span>Upload a Image</span>
                        <input type="file" name="avatar"
                         id="file-input" 
                         accept=".jpg,.jpeg,.png" 
                        onChange={setProfileAvatar}
                        className="sr-only"
                        >
                          
                        </input>
                      </label>
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="py-2 px-4 rounded-md group relative flex justify-center border border-transparent
                       text-md font-[600] w-full h-[40px]  text-white bg-[#007ea7] hover:bg-[#007da7e2]"
                    >
                      Submit
                    </button>
                  </div>
    
                  <div className={`${styles.normalFlex} w-full`}>
                    <h4>Have an account? </h4>
                    <Link to="/login" className="text-[#00a8e8] underline pl-2">
                      {" "}
                      Login{" "}
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        </div>
        </>
                        }
                         </>
  );
};

export default SignUp;
