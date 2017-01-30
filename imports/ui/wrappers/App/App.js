import React from 'react';

import Loading from '../../components/Loading';
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

      // from state
      loading,
      view,
      actions,

      // from dispatch
      toggleView,
    } = this.props;

    if (loading) {
      return <Loading />;
    }

    const listView = view === LIST_VIEW;

    return (
      <div>
        <Header
          toggleView={toggleView}
          listView={listView}
          showFocusButton={actions.length > 0}
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

        <style jsx global>{`
          .clearfix:after {
            content: '';
            display: table;
            clear: both;
          }
        `}</style>
      </div>
    )
  }
}

export default App;
