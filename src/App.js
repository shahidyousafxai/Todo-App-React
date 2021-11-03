import React, { useState } from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const todosdata = [
    { id: 1, content: 'Shahid', status: true },
    { id: 2, content: 'Yousafxai', status: true },
    { id: 3, content: 'Aman Mohsin', status: true },
  ]

  const [todos, setTodos] = useState(todosdata)
  const deleteTodo = (id) => {
    // console.log(id)
    const todosf = todos.filter((todo) => {
      return todo.id !== id
      // console.log(todo.id !== id)
    })
    setTodos(todosf)
  }

  const [pending, setPending] = useState(todosdata)
  const toggleClick = (id) => {
    // console.log(id)
    const statusChange = pending.filter((todo) => {
      if (todo.id === id) {
        todo.status = !todo.status
      }
      return todo
    })
    setPending(statusChange)
    // console.log(pending)
  }

  const addTodo = (todo) => {
    todo.id = Math.random()
    todo.status = true
    let todosp = [...todos, todo]
    console.log(todosp)
    setTodos(todosp)
  }
  return (
    <div className='todo-app container'>
      <h1 className='center blue-text'>Todo's App</h1>
      <AddTodo addTodo={addTodo} />
      <Todos
        todos={todos}
        pending={pending}
        deleteTodo={deleteTodo}
        toggleClick={toggleClick}
      />
    </div>
  )
}
export default App
