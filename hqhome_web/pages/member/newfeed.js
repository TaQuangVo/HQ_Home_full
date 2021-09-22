import Link from "next/link"
import Styles from "../../styles/Newfeed.module.css"

export default function register() {

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.elements["username"].value)
        console.log(e.target.elements["password"].value)
        console.log(e.target.elements["repeatPwd"].value)
    }

    return (
        <div className={Styles.container}>
            <p className={Styles.tittle}>New feeds</p>
            
        </div>
    )
}
