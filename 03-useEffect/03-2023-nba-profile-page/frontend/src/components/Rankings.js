import React from 'react'
import { useState, useEffect } from 'react'
import Teamcard from './Teamcard'

function Rankings() {
  const [rankings, setRankings] = useState([])

  useEffect(() => {
    const url = 'http://localhost:3000/api/v1/teams'

    fetch(url)
      .then(response => {
        const data = response.json()
        return data
      })
      .then(data => {
          data.sort((a, b) =>
            b.winsandlosses.split('-')[0] - a.winsandlosses.split('-')[0]
          )
          setRankings(data)
      })
      .catch(error => { console.log(error)})
  },[])

  return (
    <div>
      {rankings.map((items) => {
        return (<Teamcard id={items.id} name={items.name} slug={items.slug} winsandlosses={items.winsandlosses} conference={ items.conference } />);
      })}
    </div>
  )
}

export default Rankings
