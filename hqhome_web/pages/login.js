import Link from "next/link"
import axios from "axios"
import Styles from "../styles/Login.module.css"
import { useContext, useEffect } from "react"
import { userContext } from "../context/userContext"
import {useRouter} from "next/router"


export default function login() {
    const {user,setUser} = useContext(userContext)
    const router = useRouter();
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const uname = e.target.elements["username"].value
        const pwd = e.target.elements["password"].value
        axios.post("http://localhost:5000/api/user/login",{
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
    useEffect(() => {
        if(user){
            router.push("/user/feed")
        }
    }, [])

    return (
        <div className={Styles.container}>
            <p className={Styles.tittle}>Member login</p>
            <form className={Styles.form} onSubmit={e => handleFormSubmit(e)}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" autoComplete="username"></input>
                <label htmlFor="password">New password</label>
                <input type="password" id="password"  autoComplete="password"></input>
                <button type="submit">Login</button>
            </form>
            <Link href="/register">
                <p className={Styles.link}>Join as a new member</p>
            </Link>
        </div>
    )
}
