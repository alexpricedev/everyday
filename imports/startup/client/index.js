/* global document */
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import './useraccounts-configuration';
import routes from './routes';

Meteor.startup(() => {
  render(routes, document.getElementById('root'));
});
