import React from 'react';

const Tag = ({tag}) => {
  return (
    <>
      <span className="main">
        {tag}
      </span>
      <style jsx>{`
        .main {
          font-family: Nunito;
          font-size: 0.9rem;
          font-weight: normal;
          color: #000000;
          margin: 0.2rem 0.1rem;
          padding: 0.2rem 0.5rem;
          background: #FFF;
          text-align: center;
          border-radius: 0.3rem;
          cursor: default;
        }
      `}</style>
    </>
  );
}
 
export default Tag;