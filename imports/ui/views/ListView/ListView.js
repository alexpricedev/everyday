import React from 'react'

import Action from '../../components/Action';

const ListView = ({ actions }) => (
  <ul>
    { actions.map((action) => (
      <li key={action.id}>
        <Action action={action} />
      </li>
    )) }

    <style jsx>{`
      ul {
        list-style-type: none;
      }

      li {
        margin: 0 0 10px;
      }
    `}</style>
  </ul>
)

export default ListView;
