import React from 'react'

const Todo = props => {
  return (
    <div
      className={`item${(props.item.completed === true) ? " completed" : ""}`}
        onClick={() => props.toggleItem(props.item.id)}
      >
      {console.log(`item${(props.item.completed === false) ? " completed" : ""}`)}
      <p>{props.item.task}</p>
    </div>
  )
}

export default Todo;