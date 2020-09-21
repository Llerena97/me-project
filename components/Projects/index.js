import React from 'react';
import ListProjects from './ListProjects';

const ProjectsView = () => {
  return (
    <>
      <div className="main">
        <span className="main-title">My Recent Work</span>
        <span className="main-description">Here are a few development projects I've worked on recently.</span>
        <span className="main-description">I'm actively working on projects that you can see soon.</span>
        <ListProjects />
      </div>
      <style jsx>{`
        .main {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          padding: 2%;
        }
        .main-title {
          font-family: Nunito;
          font-size: 3rem;
          font-weight: 600;
        }
        .main-description {
          font-family: Nunito;
          font-size: 1rem;
          font-weight: normal;
          color: rgba(0,0,0,0.5);
          text-align: center;
        }
        @media screen and (min-width: 600px) {
          .main {
            padding: 3%;
          }
        }
        @media screen and (min-width: 1024px) {
          .main {
            padding: 3% 5%;
          }
        }
      `}</style>
    </>
  );
}
 
export default ProjectsView;