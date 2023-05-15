import React, { Fragment } from 'react'
import {useState, useEffect} from 'react'
import './showbutton.css'

function Displaycomponent(props) {
  useEffect(() => {
    console.log("component has mounted");

    return () => {
      console.log("component has unmounted");
    };
  },[])

  return (
    <div>
      {props.paragraph}
    </div>
  )
}

function Showbutton() {
  const [status, setStatus] = useState('nothing has happened...')
  const [mountedComponent, setMountedComponent] = useState(false)

  const hideHandler = () => {
    if (mountedComponent) {
      setMountedComponent(false)
      setStatus("component has unmounted")
    } else {
      setMountedComponent(true)
      setStatus("component has mounted")
    }
  }

  return (
    <Fragment>
      <h2>Status: { status } </h2>
      <button onClick={hideHandler} > Press Me </button>
      {mountedComponent &&
        <Displaycomponent paragraph={ status } />
      }
    </Fragment>
  )
}

export default Showbutton
