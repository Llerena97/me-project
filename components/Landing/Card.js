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
          style={{color: '#33d8a2'}}
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
          background: #FFFFFF;
          border-radius: 0.3rem;
          margin-bottom: 0.5rem;
          padding: 3rem 2rem;
        }
        .title-card {
          font-family: Nunito;
          font-size: 1.3rem;
          font-weight: 600;
          color: #000000;
          margin-top: 1rem;
          text-align: center;
          cursor: default;
        }
        .content-card {
          font-family: Nunito;
          font-size: 0.9rem;
          font-weight: normal;
          color: #000000;
          margin-top: 1rem;
          text-align: justify;
          cursor: default;
        }
        .text-stack {
          font-family: Nunito;
          font-size: 1rem;
          font-weight: 600;
          color: #33d8a2;
          margin-top: 1.5rem;
          margin-bottom: 1rem;
          text-align: center;
          cursor: default;
        }
        .cont-stack {
          width: 100%;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
        }
        .item-stack {
          font-family: Nunito;
          font-size: 0.9rem;
          font-weight: normal;
          color: #000000;
          margin: 0.2rem;
          padding: 0.2rem 0.5rem;
          background: #33d8a2;
          text-align: center;
          border-radius: 0.3rem;
          cursor: default;
        }
        @media screen and (min-width: 600px) {
          .main {
            width: 48%;
            margin-top: 0.5rem;
          }
          .main:hover{
            transition: all ease .5s;
            transform: translateY(-3%);
          }
        }
        @media screen and (min-width: 1024px) {
          .main {
            width: 33%;
            height: 28rem;
            margin: 0;
          }

        }
      `}</style>
    </>
  );
}
 
export default Card;