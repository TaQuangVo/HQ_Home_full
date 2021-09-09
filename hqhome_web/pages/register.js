import Link from "next/link"
import Styles from "../styles/Register.module.css"

export default function register() {

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.elements["username"].value)
        console.log(e.target.elements["password"].value)
        console.log(e.target.elements["repeatPwd"].value)
    }

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
        </div>
    )
}
