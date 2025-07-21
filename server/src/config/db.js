import mongoose from "mongoose"

const connectDB = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URL)
        console.log("DB connected successfully")
    } catch (error) {
        console.error("Error connecting",error);
        
    }
}

export default connectDB