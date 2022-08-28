import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Centipede</title>
        <meta name='description' content='A drag and drop HTML generator' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Centipede 🐛</h1>
      </main>
    </div>
  )
}

export default Home
