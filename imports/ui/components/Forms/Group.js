import React from 'react';

const Group = ({ children }) => (
  <div>
    {children}

    <style jsx>{`
      div {
        margin: 0 0 20px;
      }
    `}</style>
  </div>
);

export default Group;
