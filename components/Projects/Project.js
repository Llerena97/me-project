import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Tag from '../Shared/Tag';

const Project = ({project}) => {
  return (
    <>
      <div className="main">
        <img className="img-project" src={project.img} />
        <div className="body-project">
          <span className="title">{project.title}</span>
          <span className="description">{project.description}</span>
          <div className="cont-tags">
            {project.tags.map(item => <Tag tag={item} />)}
          </div>
          <hr />
          <div className="cont-urls">
            {project.urlHosted && <a href={project.urlHosted} className="url" target="_blank">
              <FontAwesomeIcon icon={faGithub} size="lg" style={{color: '#000', marginRight: '0.5rem'}} />
              <span>Visit on Github</span>
            </a>}
            {project.urlWeb && <a href={project.urlWeb} className="url" target="_blank">
              <FontAwesomeIcon icon={faGlobe} size="lg" style={{color: '#000', marginRight: '0.5rem'}} />
              <span>View App</span>
            </a>}
          </div>
        </div>
      </div>
      <style jsx>{`
        .main {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: auto;
          margin-bottom: 1rem;
        }
        .img-project {
          object-fit: cover;
          width: 100%;
          height: 15rem;
          border-top-left-radius: 1rem;
          border-top-right-radius: 1rem;
        }
        .body-project {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          width: 100%;
          height: auto;
          background: #00E5FF;
          padding: 1.2rem 1rem;
          border-bottom-left-radius: 1rem;
          border-bottom-right-radius: 1rem;
        }
        .title {
          font-family: Nunito;
          font-size: 1.2rem;
          font-weight: 600;
        }
        .description {
          font-family: Nunito;
          font-size: 0.9rem;
          font-weight: normal;
          padding: 0.5rem 0;
        }
        .cont-tags {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          flex-wrap: wrap;
          width: 100%;
        }
        .cont-urls {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }
        .url {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          font-family: Nunito;
          font-size: 0.9rem;
          font-weight: normal;
          color: #000000;
          margin: 0.2rem 0.1rem;
          padding: 0.3rem 0.8rem;
          background: #FFF;
          text-align: center;
          border-radius: 0.3rem;
          cursor: pointer;
        }
        @media screen and (min-width: 600px) {
          .main {
            width: 42%;
            margin: 0.5rem;
          }
          .main:hover {
            transition: all ease .5s;
            transform: translateY(-5%);
          }
        }
        @media screen and (min-width: 1024px) {
          .main {
            width: 30%;
            margin: 1rem;
          }
          .img-project {
            height: 15rem;
          }
        }
      `}</style>
    </>
  );
}
 
export default Project;