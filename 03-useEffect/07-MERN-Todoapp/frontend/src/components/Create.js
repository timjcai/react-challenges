import React, { useEffect } from 'react'
import '../styles/style.css'
import { useState } from 'react'
import Form from './Form'

function Create() {
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    console.log(showForm)
  },[showForm])

  return (
    <div>
      <section className="column">
        <h1>To Do App</h1>
        <button className="create" onClick={() => { setShowForm(!showForm) }}>New Task</button>
        {showForm &&
          <Form />
        }
      </section>
    </div>
  )
}

export default Create
