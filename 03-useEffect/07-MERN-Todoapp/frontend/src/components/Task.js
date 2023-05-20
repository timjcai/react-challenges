import React, { useEffect } from 'react'
import '../styles/style.css'
import { ImBin2, ImPencil } from 'react-icons/im'
import { IoIosSave } from 'react-icons/io'
import { useState } from 'react'
import { BsFillExclamationCircleFill, BsFillCheckCircleFill } from 'react-icons/bs'

function Task(props) {
  const { _id, completed: taskCompletionStatus, title, tag } = props.props
  const [completed, setCompleted] = useState(`${taskCompletionStatus}`)
  const [editMode, setEditMode] = useState(false)

  useEffect(() => {
    setCompleted(taskCompletionStatus)
  }, [])

  return (
    <div className="task-block">
      <div className="list-item">
        <div onClick={(e) => {setCompleted(!completed) }} className="completed" data-id={_id}>
          {!completed && <BsFillExclamationCircleFill />}
          {completed && <BsFillCheckCircleFill />}
        </div>
        <div className="todo-wrapper">
          <input className="todo title" value={ title }></input>
          <input className="todo tag" value={ tag }></input>
        </div>
        <div className="action-buttons">
          <a className="edit" onClick={(e) => { setEditMode(!editMode) }}>
            { !editMode && <ImPencil />}
            { editMode && <IoIosSave /> }
          </a>
          <a className="delete"><ImBin2 /></a>
        </div>
      </div>
    </div>
  )
}

export default Task
