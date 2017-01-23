import React from 'react';

import ListView from '../views/ListView';
import ActionView from '../views/ActionView';
import Button from '../components/Button';
import { LIST_VIEW } from './constants.js';

const App = props => {
  const {
    error,
    view,
    activeAction,
    actions,
    toggleView,
  } = props;

  if (error) {
    return (
      <div>
        { error }
      </div>
    );
  }

  const listView = view === LIST_VIEW;

  return (
    <div>
      <Header
        toggleView={toggleView}
        listView={listView}
      />

      { listView ?
        <ListView actions={actions} /> :
        <ActionView actions={actions} /> }

      <style jsx>{`
        @media (min-width: 500px) {
          div {
            margin: 0 auto;
            max-width: 500px;
          }
        }
      `}</style>
    </div>
  )
};

const Header = ({ toggleView, listView }) => (
  <header>
    <h1>every<strong>do</strong></h1>
    <div>
      <Button onClick={toggleView}>
        { listView ? 'Focus' : 'List' }
      </Button>
    </div>

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
)

export default App;
