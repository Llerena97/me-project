import React from 'react';
import { frontend, backend, mobile } from './../../lib/skills'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHdd, faDesktop, faMobile } from '@fortawesome/free-solid-svg-icons';

const Card = ({skill}) => {
  let info = skill === 'frontend' ? frontend : (skill === 'backend' ? backend : mobile)
  let icon = skill === 'frontend' ? faDesktop : (skill === 'backend' ? faHdd : faMobile)
  return (
    <>
      <div className="main">
        <FontAwesomeIcon
          icon={icon}
          size="3x"
          style={{color: '#FFF'}}
          onClick={() => window.open('https://github.com/Llerena97')}
        />
        <span className="title-card">{info.title}</span>
        <span className="content-card">{info.content}</span>
        <span className="text-stack">Stack:</span>
        <span className="cont-stack">
          {info.stack.map(it => <span className="item-stack">{it}</span>)}
        </span>
      </div>
      <style jsx>{`
        .main {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 90%;
          height: auto;
          border: 2px solid rgba(255,255,255,0.4);
          border-radius: 0.3rem;
          margin-bottom: 0.5rem;
          padding: 3rem 1rem;
        }
        .title-card {
          font-family: Nunito;
          font-size: 1.3rem;
          font-weight: 700;
          color: #000000;
          margin-top: 1rem;
          text-align: center;
        }
        .content-card {
          font-family: Nunito;
          font-size: 0.9rem;
          font-weight: normal;
          color: #000000;
          margin-top: 1rem;
          text-align: center;
        }
        .text-stack {
          font-family: Nunito;
          font-size: 1rem;
          font-weight: 600;
          color: #FFF;
          margin-top: 1.5rem;
          margin-bottom: 1rem;
          text-align: center;
        }
        .cont-stack {
          width: 100%;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          flex-wrap: wrap;
        }
        .item-stack {
          font-family: Nunito;
          font-size: 0.9rem;
          font-weight: normal;
          color: #000000;
          margin: 0.2rem;
          padding: 0.2rem 0.5rem;
          background: #FFF;
          text-align: center;
          border-radius: 0.3rem;
          cursor: pointer;
        }
        @media screen and (min-width: 600px) {
          .main {
            width: 33%;
            margin: 0;
          }

        }
        @media screen and (min-width: 1024px) {

        }
      `}</style>
    </>
  );
}
 
export default Card;