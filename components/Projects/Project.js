import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Tag from '../Shared/Tag';

import projectImage from './../../assets/img/project-image.jpg'

const Project = () => {
  let project = {
    id: 1,
    img: projectImage,
    title: 'Project',
    description: 'I can simultaneously target both iOS and Android to build apps that feel truly native.',
    tags: ['Javascript', 'React', 'Next JS', 'Ruby', 'Ruby on Rails', 'NodeJS', 'Express.js'],
    urlWeb: '#',
    urlHosted: '#',
  }
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
            <a href={project.urlHosted} className="url" target="_blank">
              <FontAwesomeIcon icon={faGithub} size="lg" style={{color: '#000', marginRight: '0.5rem'}} />
              <span>Visit on Github</span>
            </a>
            <a href={project.urlWeb} className="url" target="_blank">
              <FontAwesomeIcon icon={faGlobe} size="lg" style={{color: '#000', marginRight: '0.5rem'}} />
              <span>View App</span>
            </a>
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
          width: 100%;
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
          background: #33d8a2;
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
            width: 30%;
            margin: 0.5rem;
          }
          .main:hover {
            transition: all ease .5s;
            transform: translateY(-5%);
          }
        }
        @media screen and (min-width: 1024px) {
          .main {
            margin: 1rem;
          }
        }
      `}</style>
    </>
  );
}
 
export default Project;