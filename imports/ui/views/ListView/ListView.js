import React from 'react'

import Action from '../../components/Action';
import Button from '../../components/Button';
import NewActionModal from '../../modules/NewActionModal';

const ListView = props => {
  const {

    // from props
    actions,

    // from state
    newActionModalVisible,

    // from dispatch
    showNewActionModal,
    hideNewActionModal,
  } = props;

  return (
    <ul>
      { actions.map((action) => (
          <li key={action._id}>
            <Action action={action} />
          </li>
        )) }

      { actions.length === 0 &&
        <li className="empty">
          No actions bro. Why don't you add one?
        </li> }

      <Button onClick={showNewActionModal} block>
        Add an action
      </Button>

      { newActionModalVisible &&
        <NewActionModal onClose={hideNewActionModal} /> }

      <style jsx>{`
        ul {
          list-style-type: none;
        }

        li {
          margin: 0 0 20px;
        }

        .empty {
          background: #000000;
          color: #ffffff;
          padding: 12px 20px;
        }
      `}</style>
    </ul>
  );
};

export default ListView;
