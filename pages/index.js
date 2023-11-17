import Head from "next/head"
import styles from '../styles/Home.module.css'
import Link from "next/link"
export default function Home() {
  return (
    <>
      <Head>
        <title>Animes</title>

      </Head>
      <Link href="/">
        <h1>Home</h1>
      </Link>
      <Link href='/animes'>
        <h1>Animes</h1>
      </Link>
      <h1 className={styles.cor}>hello</h1>
    </>
  )
}