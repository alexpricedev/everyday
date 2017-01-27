import React from 'react';

import ListView from '../../views/ListView';
import ActionView from '../../views/ActionView';
import Header from '../../components/Header';
import { LIST_VIEW } from './constants.js';

class App extends React.Component {

  componentDidMount() {
    this.props.initStore();
  }

  render() {
    const {
      error,
      loading,
      view,
      activeAction,
      actions,
      toggleView,
    } = this.props;

    if (error) {
      return (
        <div>
          { error }
        </div>
      );
    }

    if (loading) {
      return (
        <div>
          Loading...
        </div>
      );
    }

    const listView = view === LIST_VIEW;

    // console.log(props);

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
  }
}

export default App;
