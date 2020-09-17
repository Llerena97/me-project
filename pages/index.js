import Head from 'next/head'
import Landing from '../components/Landing'
import Header from '../components/Shared/Header'

const Home = () => {
  return (
    <>
      <Head>
        <title>Felipe Llerena | Full Stack Web Developer</title>
      </Head>
      <div>
        <Header />
        <Landing />

      </div>
      <style jsx>{`
        .main {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          overflow-x: hidden;
        }
      `}</style>
    </>
  )
}

export default Home

// #61DAFB BLUE
// #20232B BLACK