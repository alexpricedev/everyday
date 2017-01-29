import React from 'react';

import Radio from '../../components/Forms/Radio';

const NewActionRadio = ({ checked, onChange, text, value }) => {
  return (
    <label>
      <input
        checked={checked}
        id="actionType"
        name="actionType"
        onChange={e => {
          onChange(e.target.value);
        }}
        type="radio"
        value={value}
      />

      <div>{text}</div>

      <style jsx>{`
        label {
          border: 2px solid #000000;
          cursor: pointer;
          display: block;
          flex: 0 0 calc(25% - 9px);
          height: 50px;
          margin: 0 12px 12px 0;
          position: relative;
        }

        label:nth-of-type(4n) {
          margin-right: 0;
        }

        input {
          position: absolute;
          left: -9999px;
        }

        input:checked + div {
          background: #000000;
          color: #ffffff;
        }

        div {
          bottom: 0;
          left: 0;
          line-height: 45px;
          position: absolute;
          right: 0;
          text-align: center;
          top: 0;
        }
      `}</style>
    </label>
  );
};

export default NewActionRadio;
