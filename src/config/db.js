import mongoose from "mongoose"
import dotenv from 'dotenv'
dotenv.config()


const connectDB = async()=>{
    await mongoose.connect(process.env.MONGO_URI)
    .then((res)=>{
        console.log("mongodb connected");
    }).catch((err)=>{
        console.log("error while connecting mongodb" , err)
    })

}

export default connectDB