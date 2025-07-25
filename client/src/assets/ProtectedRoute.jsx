import api from "../lib/api.js"
import { Navigate } from "react-router"
import { useState,useEffect } from "react"

const ProtectedRoute=({children})=>{
    const [authChecked, setAuthChecked] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

   useEffect(()=>{
    const checkAuth = async()=>{
        try {
            const res = await api.get("/auth/check-auth",{
                withCredentials:true,
            })
            setIsAuthenticated(true)
        } catch (error) {
            setIsAuthenticated(false)
        }
        finally{
            setAuthChecked(true)
        }
    }

    checkAuth();
   },[])

   if(!authChecked){
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="loading loading-spinner loading-lg"></div>
        </div>
    )
   }

   return isAuthenticated ? children : <Navigate to="/login"/>
}

export default ProtectedRoute;