import React from 'react'
import '../styles/style.css'
import { ImBin2, ImPencil } from 'react-icons/im'
import { IoIosSave } from 'react-icons/io'
import { useState } from 'react'
import { BsFillExclamationCircleFill, BsFillCheckCircleFill } from 'react-icons/bs'

function Task(props) {
  const { id, completed: taskCompletionStatus, title, tag } = props
  const [completed, setCompleted] = useState(`${taskCompletionStatus}`)
  const [editMode, setEditMode] = useState(false)

  return (
    <div className="task-block">
      <div>
        <div onClick={(e) => {setCompleted(!completed) }} className="completed" data-id={id}>
          {completed && <BsFillExclamationCircleFill />}
          {!completed && <BsFillCheckCircleFill />}
        </div>
        <div className="todo-wrapper">
          <input className="todo title" value={ title }></input>
          <input className="todo tag" value={ tag }></input>
        </div>
        <div className="action-buttons">
          <button onClick={(e) => { setEditMode(!editMode) }}>
            { !editMode && <ImPencil />}
            { editMode && <IoIosSave /> }
          </button>
          <button><ImBin2 /></button>
        </div>
      </div>
    </div>
  )
}

export default Task
