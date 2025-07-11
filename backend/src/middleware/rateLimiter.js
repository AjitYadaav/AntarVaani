import ratelimit from "../config/upstash.js";

const rateLimiter = async(req,res,next) =>{
    //per user => john jane 
    try{
        const {success} = await ratelimit.limit("my-rate-limit");

        if(!success){
            return res.status(429).json({message:"Too many request, pease try again later."})
        }

        next();

    }catch(error){
        console.log("rate limit error",error);
        next(error);
    }
}

export default rateLimiter;