import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Evert Vanderstadt</title>
        <meta name="description" content="" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Evert Vanderstadt
        </h1>

        <p className={styles.description}>
          CTO @ <a href="https://jaimy.be">Jaimy by Belfius</a>
        </p>

        <div className={styles.grid}>
          <a href="https://www.linkedin.com/in/evertvanderstadt/" className={styles.card}>
            <h2>LinkedIn &rarr;</h2>
            <p>View my professional experience</p>
          </a>

          {/* <a
            href="mailto:hello@evertvanderstadt.be"
            className={styles.card}
          >
            <h2>Contact &rarr;</h2>
            <p>
              Let&apos;s get in touch, either via email or a LinkedIn message!
            </p>
          </a> */}
        </div>
      </main>

      <footer className={styles.footer}>
        Powered by&nbsp;<strong>Belgian beers</strong>
      </footer>
    </div>
  )
}
