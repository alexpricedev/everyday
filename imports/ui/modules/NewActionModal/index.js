import React from 'react';

import Modal from '../../components/Modal';
import Error from '../../components/Error';
import Button from '../../components/Button';
import {
  Group,
  Label,
  TextInput,
} from '../../components/Forms';
import NewActionRadio from './NewActionRadio';
import {
  todoType,
  timerType,
} from '/imports/api/actions/constants';

const NewActionModal = ({ onClose, error }) => {
  return (
    <Modal onClose={onClose}>
      <form
        onSubmit={e => {
          e.preventDefault();
        }}
      >

        <Label htmlFor="actionType">Action Type</Label>
        <div className="wrapper">
          <NewActionRadio
            defaultChecked={true}
            text="Todo"
            value={todoType}
          />
          <NewActionRadio
            text="Timer"
            value={timerType}
          />
        </div>

        <Group>
          <Label htmlFor="text">Action Text</Label>
          <TextInput
            name="text"
            placeholder="What are you trying to do?"
          />
          { error && <Error message={error} margin /> }
        </Group>

        <Button submit>Add</Button>

        <style jsx>{`
          .wrapper {
            display: flex;
            flex-wrap: wrap;
            padding: 0 0 5px;
            position: relative;
            top: 5px;
          }
        `}</style>
      </form>
    </Modal>
  );
};

export default NewActionModal;
