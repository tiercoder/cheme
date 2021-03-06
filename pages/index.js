import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chem Academy</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span>ChemE</span>
        </h1>
      <Image height={400} width={392} src="/teaching.png"></Image>
      <h1 className={styles.title}>
          Don't Watch Just <span>Learn</span>
        </h1>
        <div className={styles.grid}>
          <div  className={styles.card}>
            <h2>The Begining &rarr;</h2>
            <p>Make a note about your goal </p>
          </div>

          <div  className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about chemistry in an interactive course with quizzes!</p>
          </div>

          <div
            
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover your self in a better place with examples</p>
          </div>

          <div
            className={styles.card}
          >
            <h2>Revise &rarr;</h2>
            <p>
              Revise until you get it.
            </p>
          </div>
        </div>
        <div className={styles.grid}>
          <div className={styles.card}>
          <Image width={150} height={150} src="/graduate.png"></Image>
            <h2>Skilled Instructor</h2>
            <p>Want make us to learn fast,Obviously our Teachers</p>
          </div>
          <div className={styles.card}>
          <Image width={150} height={150} src="/onlineCourses.png"></Image>
            <h2>Online Courses</h2>
            <p>Best Quality Courses available here.</p>
          </div>
          <div className={styles.card}>
          <Image width={150} height={150} src="/library.png"></Image>
            <h2>Book Library</h2>
            <p>Just pick the best book from collection</p>
          </div>
          <div className={styles.card}>
          <Image width={150} height={150} src="/online.png"></Image>
            <h2>Home Tution</h2>
            <p>Provides high quality content delivery through  virtual mode</p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <div>
          <span>{`Founded by `}<span className={styles.author}>Sadia Haque</span></span>
          {/* <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span> */}
          
        </div>
      </footer>
    </div>
  )
}
