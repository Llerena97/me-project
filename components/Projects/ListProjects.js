import React from 'react';
import Project from './Project';

const ListProjects = () => {
  return (
    <>
      <div className="main">
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
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
            align-items: center;
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