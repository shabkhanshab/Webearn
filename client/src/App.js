import './App.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ActivationAccount from './Pages/ActivationAccount';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import ResetPassActivation from './Pages/ResetPassActivation';
import My from './My';
import Home from './Pages/Home';
import ForgetPass from './Pages/ForgetPass';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userAction } from './redux/actions/userAction';
import Dashboard from './Pages/Dashboard';
import ProtectedRoute from './ProtectedRoute';

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
  dispatch(userAction())
  },[dispatch])
  return (
    <Router>
    <Routes>
      {/*  you have to remove this my file  */}
      
      {/* <Route path='/my' element={<My/>}></Route> */}

      <Route path='/' element={
    
<Home/>
   
      
      
      }></Route>
      
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route
        path="/activation/:activation_token"
        element={<ActivationAccount />}
      ></Route>


      <Route

              path="/resetactivation/:resetactivation_token"
              element={<ResetPassActivation />}
            ></Route>


            <Route
              path="/forget-pass"
              element={
               
<ForgetPass />
             
              
              }
            ></Route>

<Route
              path="/dashboard"
              element={
                <ProtectedRoute>
<Dashboard />
           </ProtectedRoute>
              
              }
            ></Route>



            </Routes>

            
            
           


           



<ToastContainer
  position="bottom-center"
  autoClose={5000}
  hideProgressBar={false}
  newestOnTop
  closeOnClick
  rtl={false}
  pauseOnFocusLoss={false}
  draggable
  pauseOnHover
  theme="dark"
/>
</Router>
  );
}

export default App;
