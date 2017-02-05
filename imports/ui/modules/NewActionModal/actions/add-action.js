import { timerType } from '/imports/api/actions/constants';
import { morningZone } from '/imports/constants';
import { insertAction } from '/imports/api/actions/methods';
import { ERROR, INIT } from '../constants';
import { HIDE_NEW_ACTION_MODAL } from '../../../views/ListView/constants';
import {
  INSERT_ACTION,
  REMOVE_ACTION,
} from '../../../wrappers/App/constants';

const addAction = () => {
  return (dispatch, getState) => {
    const { app, newActionModal } = getState();

    const { zone, morningActions, eveningActions } = app;
    const { type, text, time } = newActionModal;

    const actionsForZone = zone === morningZone ?
                           morningActions :
                           eveningActions;

    if (!text) {
      dispatch({
        type: ERROR,
        field: 'text',
        message: 'You need some text dude...',
      });
      return;
    }

    if (type === timerType && !time) {
      dispatch({
        type: ERROR,
        field: 'time',
        message: 'Enter the number of seconds for your timer pls',
      });
      return;
    }

    // Don't add the time if we're not creating a timer action
    const action = {
      zone,
      text,
      type,
      time: type === timerType ? time : undefined,
      complete: false,
      order: actionsForZone.length
    };

    insertAction.call(action, (err, _id) => {
      if (err) {
        dispatch({
          type: ERROR,
          field: 'submit',
          message: 'Eww.. something went wrong',
        });
      } else {
        dispatch({
          type: INSERT_ACTION,
          action: { ...action, _id }
        });
        dispatch({ type: HIDE_NEW_ACTION_MODAL });
        dispatch({ type: INIT });
      }
    });
  };
};

export default addAction;
