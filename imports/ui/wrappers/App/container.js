import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import Actions from '../../api/actions/collection';
import Zones from '../../api/zones/collection';
import App from './App';

const AppContainer = createContainer(props => {
  const handle = Meteor.subscribe('app');
  const loading = !handle.ready();

  // const actions = Actions.find({ userId: Meteor.user()._id }).fetch();
  const actions = Actions.find({}).fetch();

  // console.log(props);

  return {
    loading,
    actions,
  };
}, App);

export default AppContainer;
