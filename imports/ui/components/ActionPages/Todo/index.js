import React from 'react'

const Todo = ({ action }) => (
  <div>
    {action.text}

    <style jsx>{`
      div {
        font-size: 40px;
        font-weight: 700;
        margin: 0 0 20px;
        text-align: center;
      }
    `}</style>
  </div>
);

export default Todo;
