import { createContext, useState, useEffect} from "react"
import {useRouter} from "next/router"

export const userContext = createContext()



const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const router = useRouter()

    useEffect(()=>{
        if(user){
            router.push("/member/newfeed");
        }else{
            router.push("/login")
        }
    },[user]);

    return (
        <userContext.Provider value={{user,setUser}}>
            {children}
        </userContext.Provider>
    )
}   

export default UserContextProvider
