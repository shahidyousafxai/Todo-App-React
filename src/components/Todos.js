import React from 'react'
import './Todos.css'

function Todos({ todos, deleteTodo }) {
  // const stateVal = pending.filter((statetodo) => {
  //   return console.log(statetodo.id)
  // })

  const todoList = todos.length ? (
    todos.map((todo) => {
      return (
        <div className='collection-item' key={todo.id}>
          <span>{todo.content}</span>
          <span
            className='right font red-text'
            onClick={() => {
              deleteTodo(todo.id)
            }}
          >
            &times;
          </span>
          {/* <span className='right align'>
            <button
              className='btnd blue white-text'
              onClick={() => {
                toggleClick(todo.id)
              }}
            >
              stateVal
            </button>
          </span> */}
        </div>
      )
    })
  ) : (
    <p className='center'>You have no todo's left, yay!</p>
  )
  return <div className='todos collection'>{todoList}</div>
}

export default Todos
