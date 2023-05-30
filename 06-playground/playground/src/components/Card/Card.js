import React from 'react'
import { StyledCard } from './Card.styles';
import Tag from '../Tag/Tag';
import Section from '../Section/Section';

function Card({ props }) {
  const { title, description, tags} = props
  return (
    <StyledCard width="700px">
      <h1>{title}</h1>
      <p>{description}</p>
      <Section items={tags?.map((label) => {
            return <Tag key={label} label={label} />
          })} />

    </StyledCard>
  )
}

export default Card
