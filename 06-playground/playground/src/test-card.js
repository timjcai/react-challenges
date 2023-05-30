import React from 'react'
import Card from './components/Card/Card';

function TestCard() {
  const data = [
    { title: "hello", description: "world", tags: ['#homework', '#testing', '#anotherhashtag'] },
    { title: "Chicken Rice", description: "your favourite grilled chicken recipe", tags: ['🐔 chicken', '🤑 budget', '💪 high protein'] },
    { title: "Beef Bulgogi", description: "sweet, savoury, sliced beef", tags: ['🇰🇷 Korean', '🐮 beef', '🤤 top rated'] }
  ]
  console.log(data)

  return (
    <div>
      {data.map((item) => {
        return <Card props={ item } />
      })}
    </div>
  )
}

export default TestCard
