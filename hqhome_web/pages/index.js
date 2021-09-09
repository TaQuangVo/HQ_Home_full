import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from "next/link"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>HQ Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to HQ Home!
        </h1>
        <Link href="/login">
          <button className={styles.button}>Enter HQ Home!</button>
        </Link>
        <Link href="/register">
          <p className={styles.registerLink}>Join HQ Home as a new member</p>
        </Link>
      </main>
    </div>
  )
}
