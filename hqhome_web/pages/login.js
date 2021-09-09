import Link from "next/link"
import Styles from "../styles/Login.module.css"


export default function login() {

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.elements["username"].value)
        console.log(e.target.elements["password"].value)
    }

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
