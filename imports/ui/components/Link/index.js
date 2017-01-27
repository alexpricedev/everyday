import React from 'react';
import { Link } from 'react-router';

const L = ({ to, children }) => (
  <Link className="link" to={to}>
    {children}

    <style jsx>{`
      :global(.link) {
        color: #000000;
        text-decoration: none;
      }
      :global(.link:hover) {
        text-decoration: underline;
      }
    `}</style>
  </Link>
);

export default L;
