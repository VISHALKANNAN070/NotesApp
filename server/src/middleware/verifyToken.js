import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";

const verifyToken = (req,res,next)=>{
    const token = req.cookies.token

    if(!token){
        return res.status(401).json({message: "Unauthorized access"});
    }

    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({message: "Unauthorized access"});
    }
}

export default verifyToken;