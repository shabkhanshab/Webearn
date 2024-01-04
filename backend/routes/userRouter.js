

import  express  from "express";
import { accountActivation, addUpiPayment, allUserAdmin, createUser, deletePaymentMethod, forgetEmail, getUser, 
    loginUser, logout, raiseTicket, resetPass, resetpassactivation, 
    throughemailresetpass, 
    unRaiseTicket} from "../controller/user.js";
import isAuthenticate from "../middleware/isAuthenticate.js";




const router = express.Router()




router.post("/create-user",createUser)
router.post("/activation",accountActivation)
router.post("/login-user",loginUser)
router.get("/get-user",isAuthenticate,getUser)
router.post("/reset-pass",isAuthenticate,resetPass)
router.post('/reset-pass-activation',resetpassactivation)

router.post('/through-email-reset-pass',throughemailresetpass)
router.post("/forget-email",forgetEmail)
router.get('/log-out',isAuthenticate,logout)
router.post('/payment-method-delete',isAuthenticate,deletePaymentMethod)
router.post('/add-pay-upi',isAuthenticate,addUpiPayment)
router.post('/raise-ticket',isAuthenticate,raiseTicket)
router.post('/unraise-ticket',isAuthenticate,unRaiseTicket)
router.post('/my-user-admin',allUserAdmin)

export default router