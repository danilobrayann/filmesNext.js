import Link from "next/link"
import Head from "next/head"
export default function Animes() {

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

            <section >
                <img src="" alt="anime01" />
                <img src="" alt="anime02" />
                <img src="" alt="anime03" />
            </section>
        </>
    )
}