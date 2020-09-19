import React from 'react';
import Card from './Card'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

import { other } from './../../lib/skills'
import colombiaImg from './../../assets/img/co.svg'
// import userImg from './../../assets/img/user-mock.png'
import userImg from './../../assets/img/photo-me.jpg'
import appmeup from './../../assets/img/appmeup-logo.png'
import koombea from './../../assets/img/koombea-logo.jpg'

const Landing = () => {
  return (
    <>
      <div className="main">
        <div className="cont-presentation">
          <img className="image-map" src={colombiaImg} alt="colombia map"/>
          <div className="cont-intro">
            <span className="sub-intro">
              <h2>Full Stack Developer</h2>
              <span className="main-description-work">I'm based in Barranquilla, Colombia.</span>
              <span className="main-description-work">I have a passion for web development and love to create for web and mobile devices.</span>
              <img src={userImg} className="photo-me" />
            </span>
          </div>
        </div>
        <div className="cont-info">
          <h3>Hi, I’m Felipe.<br className="linejump" /> Nice to meet you.</h3>
          <p>
            Since beginning my journey as a developer nearly 3 years ago, 
            I've done remote work for agencies, and collaborated with talented people 
            to create digital products for both business and consumer use. I'm quietly confident, 
            naturally curious, and perpetually working on improving my chops one development problem at a time.
          </p>
        </div>
        <div className="cont-my-skills">
          <h4>My Skills</h4>
          <div className="cont-cards">
            <Card skill={'frontend'} />
            <Card skill={'backend'} />
            <Card skill={'mobile'} />
          </div>
          <div className="other-skills">
            <span className="text-stack">Other Skills:</span>
            <span className="cont-stack">
              {other.map(it => <span className="item-stack">{it}</span>)}
            </span>
          </div>
        </div>
        <div className="cont-companies">
          <h4>I'm proud to have collaborated with some awesome companies:</h4>
          <div className="list-companies">
            <a href="https://www.koombea.com/" target="_blank">
              <img className="" src={koombea} alt="colombia map"/>
            </a>
            <a href="https://appmeup.co/" target="_blank">
              <img className="" src={appmeup} alt="colombia map"/>
            </a>
          </div>
        </div>
        <div className="cont-networks">
          <a href="/" className="logo">FLL</a>
          <span>Living, learning, & leveling up one day at a time.</span>
          <div className="networks">
            <FontAwesomeIcon
              icon={faGithub}
              size="2x"
              style={{color: '#000', margin: '0.8rem', cursor: 'pointer'}}
              onClick={() => window.open('https://github.com/Llerena97')}
            />
            <FontAwesomeIcon
              icon={faLinkedin}
              size="2x"
              style={{color: '#000', margin: '0.8rem', cursor: 'pointer'}}
              onClick={() => window.open('https://www.linkedin.com/in/felipe-llerena-catalan-987405128/')}
            />
            <FontAwesomeIcon
              icon={faTwitter}
              size="2x"
              style={{color: '#000', margin: '0.8rem', cursor: 'pointer'}}
              onClick={() => window.open('https://twitter.com/Llerena97')}
            />
          </div>
        </div>
      </div>
      <style jsx>{`
        .logo {
          font-size: 1.8rem;
          color: #000000;
          font-family: Nunito;
          font-weight: 700;
          cursor: pointer;
        }
        .linejump {
          display: block;
        }
        .main {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
        }
        .cont-presentation {
          width: 100%;
          height: 80vh;
          position: relative;
        }
        .cont-intro {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          width: 100%;
          height: 100%;
          padding: 5%;
        }
        .sub-intro {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          width: 100%;
          height: 100%;
          padding: 5%;
          text-align: center;
        }
        .cont-intro img {
          width: 70%;
          margin-top: 2rem;
          border-radius: 50%;
        }
        .cont-intro h2 {
          font-weight: 800;
          font-family: Nunito;
          color: #000000;
        }
        .main-description-work {
          font-family: Nunito;
          font-size: 0.9rem;
          font-weight: normal;
          color: rgba(0,0,0,0.5);
        }
        .cont-info {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: auto;
          padding: 5%;
          background: #FFFFFF;
          border-top: 1px solid #E5E5E5;
        }
        .image-map {
          width: 200vw;
          position: absolute;
          right: 0;
          z-index: -1;
        }
        .cont-info h3, .cont-info p {
          font-family: Nunito;
          font-weight: normal;
          color: #000000;
          text-align: center;
        }
        .cont-info h3 {
          font-weight: 600;
        }
        .cont-companies {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: auto;
          padding: 3% 5% 5% 5%;
          background: #FFFFFF;
        }
        .cont-companies h4 {
          color: #20232B;
          font-family: Nunito;
          font-weight: 600;
          text-align: center;
          margin-bottom: 3rem;
        }
        .list-companies {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: auto;
        }
        .list-companies a {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: auto;
        }
        .list-companies a img {
          width: 70%;
          height: auto;
          padding: 1rem 0;
        }
        .cont-networks {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: auto;
          padding: 3%;
          background: #33d8a2;
        }
        .cont-networks h4, .cont-my-skills h4 {
          color: #000000;
          font-family: Nunito;
          font-weight: 700;
          cursor: pointer;
        }
        .cont-networks span {
          color: rgba(0,0,0,0.5);
          font-family: Nunito;
          font-weight: normal;
        }
        .networks {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
        }
        .cont-my-skills {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: auto;
          background: #33d8a2;
          padding: 3%;
        }
        .cont-cards {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: auto;
          margin-top: 1rem;
        }
        .other-skills {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          flex-wrap: wrap;
          width: 100%;
          padding: 1% 5%;
        }
        .text-stack {
          font-family: Nunito;
          font-size: 1.2rem;
          font-weight: 700;
          color: #000000;
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
          margin: 0.3rem;
          padding: 0.2rem 0.5rem;
          background: #FFF;
          text-align: center;
          border-radius: 0.3rem;
          cursor: pointer;
        }
        @media screen and (min-width: 600px) {
          .cont-my-skills {
            padding: 1.5%;
            padding-bottom: 3%;
          }
          .cont-cards {
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: space-between;
            width: 95%;
            height: auto;
            flex-wrap: wrap;
          }
          .linejump {
            display: none;
          }
          .cont-presentation {
            height: 50rem;
          }
          .cont-intro img {
            width: 40%;
          }
          .main-description-work {
            font-size: 1rem;
          }
          .image-map {
            width: 140vw;
          }
          .list-companies {
            flex-direction: row;
            justify-content: space-around;
          }
          .list-companies a {
            width: 50%;
            height: auto;
          }
          .list-companies a img {
            width: 50%;
            height: auto;
            padding: 0;
          }
        }
        @media screen and (min-width: 1024px) {
          .cont-presentation {
            height: 90vh;
          }
          .cont-cards {
            width: 90%;
            flex-wrap: nowrap;
          }
          .cont-intro {
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
            padding: 0;
            width: auto;
          }
          .cont-intro img {
            width: 25%;
            margin-top: 2rem;
          }
          .sub-intro {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            width: auto;
            height: auto;
            text-align: center;
            padding: 5%;
          }
          .image-map {
            width: 50vw;
            right: 5rem;
          }
          .cont-info {
            padding: 3% 10%;
          }
          .cont-networks {
            padding: 1.5%;
          }
        }
      `}</style>
    </>
  );
}
 
export default Landing;