import Link from "next/link"
import Styles from "../styles/Register.module.css"
import axios from "axios"
import { useContext } from "react"
import { userContext } from "../context/userContext"
import {useRouter} from "next/router"

const register = () => {

    const {user,setUser} = useContext(userContext)
    const router = useRouter();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const uname = e.target.elements["username"].value
        const pwd = e.target.elements["password"].value
        const repPwd = e.target.elements["repeatPwd"].value
        
        if(pwd === repPwd){
            axios.post("http://localhost:5000/api/user/register",{
                username:uname,
                password:pwd
            }).then(res => {
                setUser({
                    user:res.data.user,
                    credential:res.data.credential
                })
                console.log(res.data)
            }).catch(err => {
                if(err.response){
                    console.log(err.response)
                }else if(err.request){
                    console.log(err.request)
                }else{
                    console.log(err.message)
                }
            })
        }
    }

    useEffect(() => {
        if(user){
            router.push("/user/feed")
        }
    }, [])
    return (
        <div className={Styles.container}>
            <p className={Styles.tittle}>Member registration</p>
            <form className={Styles.form} onSubmit={e => handleFormSubmit(e)}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" autoComplete="username"></input>
                <label htmlFor="password">New password</label>
                <input type="password" id="password"  autoComplete="new-password"></input>
                <label htmlFor="repeatPwd">Repeat password</label>
                <input type="password" id="repeatPwd" autoComplete="new-password"></input>
                <button type="submit">Register</button>
            </form>
            <Link href="/login">
                <p className={Styles.link}>Join as an old member</p>
            </Link>
            <Link href="/">
                <p className={Styles.link}>Home</p>
            </Link>
        </div>
    )


    
}
export default register;