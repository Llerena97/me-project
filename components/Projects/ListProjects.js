import React from 'react';
import { projects } from '../../lib/projects';
import Project from './Project';

const ListProjects = () => {
  return (
    <>
      <div className="main">
        {projects.map(it => <Project key={it.id} project={it} />)}
      </div>
      <style jsx>{`
        .main {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: auto;
          margin-top: 2rem;
        }
        @media screen and (min-width: 600px) {
          .main {
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
            flex-wrap: wrap;
          }
        }
        @media screen and (min-width: 1024px) {
          .main {
          }
        }
      `}</style>
    </>
  );
}
 
export default ListProjects;