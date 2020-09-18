import Head from 'next/head'
import Header from '../../components/Shared/Header'
import ProjectsView from '../../components/Projects'

const Projects = () => {
  return (
    <>
      <Head>
        <title>Felipe Llerena | My Projects</title>
      </Head>
      <div className="main">
        <Header />
        <ProjectsView />
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

export default Projects