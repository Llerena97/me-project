import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import mainLogo from './../../assets/logos/logo-example.svg'

const Header = () => {
  const [desplegableMenu, setDesplegableMenu] = useState(false)
  return (
    <>
      <div className="main">
        {/* <img className="img-logo" src={mainLogo} alt="Felipe Llerena Logo" /> */}
        <a href="/" className="logo">FLL</a>
        <div className="bar-mobile">
          <FontAwesomeIcon
            icon={desplegableMenu ? faTimes : faBars}
            size="2x"
            color={'#000'}
            onClick={() => setDesplegableMenu(!desplegableMenu)}
          />
        </div>
        <div className="bar-web">
          <a href="/projects" className="button-normal">Projects</a>
          {/* <a className="button-normal">Blog</a> */}
          <a href="https://www.linkedin.com/in/felipe-llerena-catalan-987405128/" target="_blank" className="btn-nav">Say Hello!</a>
        </div>
      </div>
      {desplegableMenu && <div className="cont-desplegable-menu">
        <a href="/projects" className="button-normal">Projects</a>
        {/* <a className="button-normal">Blog</a> */}
        <a href="https://www.linkedin.com/in/felipe-llerena-catalan-987405128/" target="_blank" className="btn-nav">Say Hello!</a>
      </div>}
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
          font-size: 1.1rem;
          color: #000000;
          padding: 0.3rem 1rem;
          border-radius: 1.5rem;
          cursor: pointer;
          background: #FFFFFF;
        }
        .btn-nav:hover {
          color: #FFFFFF;
          background: #000000;
          transition: all ease .5s;
        }
        .cont-desplegable-menu {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          height: auto;
          background: #33d8a2;
          padding: 1rem 0;
          border-top: 0.5px solid #FAFAFA;
          transition: all ease .2s; 
        }
        .button-normal {
          font-family: Nunito;
          font-weight: 700;
          font-size: 1.1rem;
          color: #000000;
          margin-bottom: 0.8rem;
          padding: 0.2rem 1rem;
          cursor: pointer;
        }
        .button-normal:hover {
          border-bottom: 1px solid #FFF;
        }
        @media screen and (min-width: 1024px) {
          .main {
            padding: 1rem 3rem;
          }
          .bar-mobile {
            display: none;
          }
          .cont-desplegable-menu {
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
          .btn-nav {
            font-size: 1rem;
            padding: 0.3rem 1rem;
          }
          .button-normal {
            font-size: 1rem;
            margin-bottom: 0;
            margin-right: 1rem;
            padding: 0.3rem 1rem;
          }
        }
      `}</style>
    </>
  );
}

export default Header