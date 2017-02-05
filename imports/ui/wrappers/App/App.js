import React from 'react';

import { morningZone } from '/imports/constants';
import Loading from '../../components/Loading';
import Header from '../../components/Header';
import ZoneSwitch from '../../components/ZoneSwitch';
import ListView from '../../views/ListView';
import ActionView from '../../views/ActionView';
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
      zone,
      morningActions,
      eveningActions,

      // from dispatch
      toggleView,
      toggleZone,
      reset,
    } = this.props;

    if (loading) {
      return <Loading />;
    }

    const listView = view === LIST_VIEW;
    const isMorning = zone === morningZone;
    const actions = isMorning ? morningActions : eveningActions;

    return (
      <div>
        <Header
          toggleView={toggleView}
          listView={listView}
          showFocusButton={actions.length > 0}
        />

        { listView &&
          <ZoneSwitch
            isMorning={isMorning}
            toggleZone={toggleZone}
          /> }

        { listView ?
          <ListView
            actions={actions}
            reset={reset}
          /> :
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
