import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import mainLogo from './../../assets/logos/logo-example.svg'

const Header = () => {
  return (
    <>
      <div className="main">
        {/* <img className="img-logo" src={mainLogo} alt="Felipe Llerena Logo" /> */}
        <a href="/" className="logo">FLL</a>
        <div className="bar-mobile">
          {/* <FontAwesomeIcon icon={faBars} size="lg" color={'#FFFFFF'} /> */}
          <a href="https://www.linkedin.com/in/felipe-llerena-catalan-987405128/" target="_blank" className="btn-nav">Say Hello!</a>
        </div>
        <div className="bar-web">
          <a href="https://www.linkedin.com/in/felipe-llerena-catalan-987405128/" target="_blank" className="btn-nav">Say Hello!</a>
        </div>
      </div>
      <style jsx>{`
        .main {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          height: auto;
          background: #33d8a2;
          padding: 1rem 1.5rem;
        }
        .logo {
          font-size: 1.8rem;
          color: #000000;
          font-family: Nunito;
          font-weight: 700;
          cursor: pointer;
        }
        .bar-mobile {
          display: block;
        }
        .bar-web {
          display: none;
        }
        .img-logo {
          width: 2.5rem;
        }
        .btn-nav {
          font-family: Nunito;
          font-weight: 700;
          font-size: 1rem;
          color: #000000;
          padding: 0.3rem 1rem;
          border-radius: 1.5rem;
          cursor: pointer;
          background: #FFFFFF;
        }
        .btn-nav:hover {
          color: #FFFFFF;
          background: #000000;
        }
        @media screen and (min-width: 1024px) {
          .main {
            padding: 1rem 3rem;
          }
          .bar-mobile {
            display: none;
          }
          .bar-web {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            width: auto;
            height: auto;
          }
        }
      `}</style>
    </>
  );
}

export default Header