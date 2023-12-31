import mongoose from "mongoose";


const db = async()=>{
    try{
        const data=  await mongoose.connect(process.env.DB_URL,{
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