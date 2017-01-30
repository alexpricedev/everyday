import React from 'react';

import Modal from '../../components/Modal';
import Error from '../../components/Error';
import Button from '../../components/Button';
import {
  Group,
  Label,
  TextInput,
  NumberInput,
} from '../../components/Forms';
import NewActionRadio from './NewActionRadio';
import {
  todoType,
  timerType,
} from '/imports/api/actions/constants';

const NewActionModal = props => {
  const {

    // from props
    onClose,

    // from state
    type,
    text,
    time,
    error,

    // from dispatch
    updateType,
    updateText,
    updateTime,
    addAction,
  } = props;

  return (
    <Modal onClose={onClose}>
      <form
        onSubmit={e => {
          e.preventDefault();
          addAction();
        }}
      >

        <Label htmlFor="actionType">Action Type</Label>
        <div className="wrapper">
          <NewActionRadio
            checked={type === todoType}
            onChange={updateType}
            text="Todo"
            value={todoType}
          />
          <NewActionRadio
            checked={type === timerType}
            onChange={updateType}
            text="Time"
            value={timerType}
          />
        </div>

        <Group>
          <Label htmlFor="text">Action Text</Label>
          <TextInput
            name="text"
            onChange={e => updateText(e.target.value)}
            placeholder="What are you trying to do?"
            value={text}
          />
        </Group>

        { type === timerType &&
          <Group>
            <Label htmlFor="time">Action Time (s)</Label>
            <NumberInput
              name="time"
              onChange={e => updateTime(e.target.value)}
              placeholder="How long do you wana do this for? (seconds)"
              value={time}
            />
          </Group> }

        { error &&
          <div className="error clearfix">
            <Error message={error.message} margin />
          </div> }

        <Button submit>Add</Button>

        <style jsx>{`
          .wrapper {
            display: flex;
            flex-wrap: wrap;
            padding: 0 0 5px;
            position: relative;
            top: 5px;
          }

          .error {
            margin-bottom: 10px;
          }
        `}</style>
      </form>
    </Modal>
  );
};

export default NewActionModal;
