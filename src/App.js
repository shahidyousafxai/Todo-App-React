import React, { useState } from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const todosdata = [
    { id: 1, content: 'Shahid', status: true },
    { id: 2, content: 'Yousafxai', status: true },
    { id: 3, content: 'Aman Mohsin', status: true },
  ]

  // Delete Todos useState
  const [todos, setTodos] = useState(todosdata)

  // Delete Todos function
  const deleteTodo = (id) => {
    const todosf = todos.filter((todo) => {
      return todo.id !== id
    })
    setTodos(todosf)
  }

  // // Todos Updating
  // const [pending, setPending] = useState(todos)
  // useEffect(() => {
  //   setPending(todos)
  // }, [todos])

  // // Todos Status change
  // const toggleClick = (id) => {
  //   const statusChange = pending.filter((todo) => {
  //     if (todo.id === id) {
  //       todo.status = !todo.status
  //     }
  //     return todo
  //   })
  //   setPending(statusChange)
  // }

  // return status

  //Add Todos function
  const addTodo = (todo) => {
    todo.id = Math.random()
    todo.status = true
    var todosp = [...todos, todo]
    setTodos(todosp)
  }
  return (
    <div className='todo-app container'>
      <h1 className='center blue-text'>Todo's App</h1>
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} deleteTodo={deleteTodo} />
    </div>
  )
}
export default App
