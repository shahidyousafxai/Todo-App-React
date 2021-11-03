import React, { useState } from 'react'

function AddTodo(props) {
  const [content, setContent] = useState('')

  const handleChange = (e) => {
    setContent(e.target.value)
    // console.log(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.addTodo({ content })
    setContent('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor=''>Add New Todo:</label>
        <input type='text' onChange={handleChange} value={content} />
      </form>
    </div>
  )
}
export default AddTodo
