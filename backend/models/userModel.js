import mongoose from "mongoose";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
// import sendToken from '../'

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter Your name"],  
  },
  email: {
    
    type: String,
    required: [true, "Please enter your email"],
  },
  password: {//source c
    type: String,
    required: [true, "Please enter your password "],
    minLength: [4, "Password length must be 4 to 16"],
    maxLength: [16, "Password length must be 4 to 16"],
    select: false,
  },
  // addresses:[
  //   {
  //     state: {
  //       type: String,
       
  //     },
  //     city:{
  //       type: String,
      
  //     },
  //     address1:{
  //       type: String,

  //     },
  //     address2:{
  //       type: String,
      
  //     },
  //     zipCode:{
  //       type: Number,
       
  //     },
  //     addressType:{
  //       type: String,
  //     },
  //   }
  // ],
  role:{
    type:String,
    default:"user"
  },

  avatar:{
    public_id:{
      type:String,
      // required:true
    },
    url:{
      type:String,
      // required:true
    }
   
  },


  cpa_details:[
    {
      subid:{
        type:String
      },
      payout:{
        type:String
      },
      offer_name:{
        type:String
      },
      ip_address:{
        type:String
      },
      lead_id:{
        type:String
      },
      country_iso:{
        type:String
      },
    }
  ],
  phoneNumber:{
    type:String,

  },
  paymentMethod:{
    payment:{
      type:String
    },
    paymentAdd:{
      type:Date,
      default:Date.now()
    }
  
  }
  
    

    
  

  
  ,
  createdAt:{
    type:Date,
    default:Date.now()
  },
  resetPasswordToke:String,
  resetPasswordTime:Date
});

// hash password before save
userSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        next()
    }
    this.password = await bcrypt.hash(this.password,10)
} )

userSchema.methods.comparePassword = async function(pass){
    return await bcrypt.compare(pass,this.password)
}

userSchema.methods.getJwtToken = async function(){
    return jwt.sign({id:this._id},process.env.JWT_SECRET_KEY,{expiresIn:process.env.JWT_EXPIRE})
}

const User = mongoose.model("User",userSchema)
export default User



