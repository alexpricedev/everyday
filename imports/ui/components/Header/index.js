import React from 'react';

import Button from '../Button';

const Header = ({ toggleView, listView }) => (
  <header>
    <h1>every<strong>do</strong></h1>
    { toggleView &&
      <div>
        <Button onClick={toggleView}>
          { listView ? 'Focus' : 'List' }
        </Button>
      </div> }

    <style jsx>{`
      header {
        border-bottom: 9px solid #000000;
        margin: 0 0 20px;
        padding: 0 0 15px;
        position: relative;
      }

      h1 {
        font-weight: 300;
      }

      div {
        right: 0;
        position: absolute;
        top: 3px;
      }
    `}</style>
  </header>
);

export default Header;
