import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div style={styles.wrapper}>
      <Head>
        <title>Wantedspace og:image</title>
        <meta name="description" content="찰칵" />
      </Head>
      <h1 style={styles.title}>📸</h1>
    </div>
  )
}

const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  title: {
    fontSize: 128,
  },
}

export default Home
