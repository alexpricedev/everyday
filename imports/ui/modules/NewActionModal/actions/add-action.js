import { timerType, listType } from '/imports/api/actions/constants';
import { morningZone } from '/imports/constants';
import { cleanArray } from '/imports/helpers/clean-array';
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
    const { type, text, time, list } = newActionModal;

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
      complete: false,
      order: actionsForZone.length,

      // Optional
      time: type === timerType ? time : undefined,
      list: type === listType ? cleanArray(list) : undefined,
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
