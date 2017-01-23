import React from 'react'

const Action = ({ action, toggleAction }) => (
  <div>
    <input
      type="checkbox"
      checked={action.complete}
      onChange={() => toggleAction(action.id)}
    />
    <label>
      { action.text }
    </label>

    <style jsx>{`
      input {
        position: relative;
        top: -3px;
      }

      label {
        font-size: 22px;
        font-weight: 700;
        margin: 0 0 0 10px;
      }
    `}</style>
  </div>
)

export default Action;
