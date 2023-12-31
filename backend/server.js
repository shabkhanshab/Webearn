import app from './app.js'
import dotenv from 'dotenv'
import connectdb from './connectDb/db.js'


// process.on("uncaughtException", (err) => {
//     console.log(`Error: ${err.message}`);
//     console.log(`shutting down the server for handling uncaught exception`);
//   })

// if (process.env.NODE_ENV !== "PRODUCTION") {
//     require("dotenv").config({
//       path: "config/.env",
//     });
//   }


const server = app.listen(process.env.PORT || 8000,()=>{
    console.log(`server is running on port http://localhost:${process.env.PORT}`)
})

process.on("unhandledRejection",(err)=>{
    console.log(err)
    console.log(`server is shutdown with an error ${err.message}`)
    console.log('server is shut down due to error')
   
    server.close(()=>{
        process.exit(1);
    })
})


