import React from 'react';

import { Label } from '../../components/Forms';
import Button from '../../components/Button';

const ListActionInput = ({ list, updateListItem }) => {
  return (
    <div>
      <Label largeMargin>
        List Items
      </Label>

      { list.map((item, i) => (
        <div className="group clearfix" key={i}>
          <label htmlFor={`listItem${i}`}>
            {i + 1}.
          </label>
          <input
            autoComplete="off"
            id={`listItem${i}`}
            onChange={e => {
              updateListItem(i, e.target.value);
            }}
            placeholder={`Text for list item ${i + 1}`}
            type="text"
            value={item}
          />

          { i === list.length - 1 &&
            <a
              href="#"
              title="Add another item"
              onClick={() => updateListItem(i + 1, '')}
            >
              +
            </a> }
        </div>
      )) }

      <style jsx>{`
        .group {
          display: flex;
          margin: 0 0 10px;
        }

        label {
          flex: 0 0 35px;
          font-size: 16px;
          font-weight: 700;
          line-height: 40px;
          min-width: 35px;
          text-align: center;
        }

        input {
          -webkit-appearance: none; // Remove border-radius on iOS
          background: transparent;
          border: 2px solid #000000;
          color: #000000;
          display: block;
          flex: 1 0 100px;
          font-size: 16px;
          letter-spacing: 0.7px;
          margin: 0 0 4px;
          padding: 10px;
        }

        a {
          border: 2px solid #000000;
          border-left: none;
          color: #000000;
          cursor: pointer;
          display: inline-block;
          flex: 0 0 42px;
          font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
          font-size: 16px;
          font-weight: 700;
          height: 42px;
          line-height: 36px;
          text-align: center;
          text-decoration: none;
          width: 42px;
        }

        a:hover {
          background: #000000;
          color: #ffffff;
        }
      `}</style>
    </div>
  );
};

export default ListActionInput;
