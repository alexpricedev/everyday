import React from 'react';

import Header from '../../components/Header';

const PublicApp = ({ children }) => (
  <div>
    <Header />

    {children}

    <style jsx>{`
      @media (min-width: 500px) {
        div {
          margin: 0 auto;
          max-width: 500px;
        }
      }
    `}</style>
  </div>
);

export default PublicApp;
