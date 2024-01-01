import  express  from 'express';
import ErrorHandler from "./middleware/error.js"
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser'
import router from './routes/userRouter.js'
import cors from 'cors'

import connectDb from './connectDb/db.js'
import {errorHandel,notFound} from './middleware/errorHandelerMiddleware.js'
import dotenv from 'dotenv'
import cloudinary from 'cloudinary'
import User from './models/userModel.js';

const app = express();
process.on("uncaughtException",(err)=>{
    console.log(`Error: ${err.message}`)
    console.log('shutting down the server for handling uncaught exception')
})

if(process.env.NODE_ENV != "PRODUCTION"){
    dotenv.config({
        path:"config/.env"
    })
}
connectDb()
cloudinary.config({
    cloud_name : process.env.CLOUDINARY_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
})

app.use(cookieParser())
app.use(express.json({ limit: '50mb' }));
app.use(cors({origin:"https://webearn.vercel.app",credentials:true}))



app.use(bodyParser.urlencoded({extended:true,limit:"50mb"}))


app.post('/postback/conversion',async(req,res)=>{
    const data = req.body;
    console.log("postbackurl data",data);
    const subid = data.subid
    const payout = data.payout
    const offer_name = data.campaign_name
    const ip_address = data.ip_address
    const lead_id = data.lead_id
    const country_iso = data.country_iso // add this in user code of someone tell you to add all county
    const password = data.password
    var user_payout
   
    try{
        user_payout = (data.payout * process.env.CPA_PERCENTAGE) / 100;
    }

    catch(err){
        console.log(err);
    }

  

    
    if(password){
        if(password === process.env.CPA_UNIQUE_PASS)
    
        {
            try{
                const user =  await User.findById(subid)
                // console.log("user",user);
                if(user){
                    console.log("cpa",user.cpa_details);
                    // 
                    user.cpa_details.push({
                        offer_name,
                        payout,
                        ip_address,
                        lead_id,
                        user_payout

                    })
                    await user.save()
                    
                }
                else{
                    console.log("user nit dount");
                }
            }
            catch(err){
                console.log("err",err);
            }
           




        }
    }




})



if(process.env.NODE_ENV !== 'PRODUCTION'){
    dotenv.config({
        path:"config/.env"
    })
}

app.use('/api/v2/user',router)

// app.use(errorHandel)
// app.use(notFound)
app.use(ErrorHandler)

export default app