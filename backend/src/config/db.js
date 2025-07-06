
import mongoose from "mongoose"

export const connectDB = async () =>{
    try{
        await mongoose.connect("mongodb+srv://yajit9019:tn3vaYB4eAwI7weV@cluster0.chhrhta.mongodb.net/notes_DB?retryWrites=true&w=majority&appName=Cluster0")
        console.log("MONGOOSE CONNECTED SUCCESSFULLY!")
    }catch(error){
        console.error("Error connecting to MONGODB")
        process.exit(0);//exit with failure
    }
}