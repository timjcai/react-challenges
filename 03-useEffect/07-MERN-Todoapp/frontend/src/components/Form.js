import React, { useEffect } from 'react'
import '../styles/style.css'
import { AiFillPlusCircle } from 'react-icons/ai'

function Form() {
  useEffect(() => {
    console.log('we are in the form useEffect')
  },[])

  return (
    <div className="create-todo content">
      <form className="create-form" action="/" method="POST">
        <div className="create-todo content title">
          <label htmlFor="title">Task:</label>
          <input type="text" id="title" name="title" required />
        </div>
        <div className="create-todo content tag">
          <label htmlFor="tag">Tags:</label>
          <input type="text" id="tag" name="tag" required />
        </div>
        <input
          type="checkbox"
          id="completed"
          name="completed"
          value="false"
          hidden
        />
        <button className="create plus"><AiFillPlusCircle /></button>

      </form>
    </div>
  );
}

export default Form
