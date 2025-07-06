import express from "express";
// const express = require("express");
import notesRoute from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js";
import dotenv from "dotenv"
import rateLimiter from "./middleware/rateLimiter.js";
dotenv.config();
import cors from "cors"

import path from "path"

// console.log(process.env.MONGO_URI);//just for checking

const PORT = process.env.PORT || 5001;
const app = express();
const __dirname = path.resolve()

//middleware
if(process.env.NODE_ENV !== "production"){
    app.use(cors({
        origin:"http://localhost:5173",
    }));
}

app.use(express.json());
app.use(rateLimiter);

app.use("/api/notes",notesRoute);

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")));

    app.get("*",(req,res) =>{
        res.sendFile(path.join(__dirname,"../frontend","dist","index.html"));
    })
}

// app.use("api/products",proudctRoutes);
// app.use("/api/posts",postsRoutes)

//what is EndPoint??
// An endpoint is a combination of a URL+ HTTP method that lets the client interact with a specific resource

//route

// app.get("/api/notes",(req,res)=>{
//     //create the notes 
//     res.status(200).send("You got 5 Notes");
// })

// app.post("/api/notes",(req,res)=>{
//     res.status(201).json({message:"post created succesfully!"})
// })

// app.put("/api/notes/:id",(req,res)=>{
//     res.status(200).json({message:"post updated succesfully!"})
// })

// app.post("/api/notes/:id",(req,res)=>{
//     res.status(200).json({message:"post deleted succesfully!"})
// })

//http://localhost:5001/api/notes/21 -> means delete / update the 21 the note??


connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server running on PORT: ${PORT}`)
    })
});