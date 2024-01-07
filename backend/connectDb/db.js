import mongoose from "mongoose";

// process.env.DB_URL
const db = async()=>{
    try{
        const data=  await mongoose.connect(
            
           'mongodb+srv://khanshab9343:m06VxDW7RuicwB4n@cluster0.wdrdfho.mongodb.net/pune'
            ,
            
            {
            // useNewUrlParser:true,
            // useUnifiedTopology:true
        })
        console.log(`mongoDb connected with sever:${data.connection.host}`)
    
        
    }
    catch(err){
        console.log(`Errr:${err.message}`)
        process.exit(1)
    }
 
}
export default db