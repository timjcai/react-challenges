import { Heading } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Teamcard from './Teamcard'

// normally you would handle logic on the backend and send it to an endpoint. But I wanted to practice javascript logic inside this component

function Conference() {
  const [east, setEast] = useState([])
  const [west, setWest] = useState([])

  useEffect(() => {
    const url = 'http://localhost:3000/api/v1/teams'
    const allWest = [];
    const allEast = [];

    fetch(url)
      .then(response => {
        const data = response.json()
        return data;
      })
      .then(data => {
        data.map((item) => {
          console.log(item.conference)
          if (item.conference === 'West') {
            allWest.push(item)
          } else {
            allEast.push(item)
          }
        })
        console.log(allEast)
        setEast(allEast)
        setWest(allWest)
      })
      .catch(error => {console.log(error)})
  }, [])

  return (
    <div>
      <Heading>West</Heading>
      {west.map((items) => {
        return (<Teamcard id={items.id} name={items.name} slug={items.slug} winsandlosses={items.winsandlosses} conference={ items.conference } />);
      })}
      <Heading>East</Heading>
      {east.map((items) => {
        return (<Teamcard id={items.id} name={items.name} slug={items.slug} winsandlosses={items.winsandlosses} conference={ items.conference } />);
      })}
    </div>
  );
}

export default Conference
