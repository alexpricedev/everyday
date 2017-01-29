import { timerType } from '/imports/api/actions/constants';
import { insertAction } from '/imports/api/actions/methods';
import { ERROR} from '../constants';
import { HIDE_NEW_ACTION_MODAL } from '../../../views/ListView/constants';

const addAction = () => {
  return (dispatch, getState) => {

    const {
      type,
      text,
      time,
    } = getState().newActionModal;

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

    insertAction.call({ text, type, time }, (err, res) => {
      if (err) {
        dispatch({
          type: ERROR,
          field: 'time',
          message: 'Eww.. something went wrong',
        });
        console.log(err);
      } else {
        dispatch({ type: HIDE_NEW_ACTION_MODAL });
      }
    });
  };
};

export default addAction;
