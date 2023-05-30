import React from 'react'
import { StyledSelectorMenu } from './Selector.styles'
import { StyledCard } from '../Card/Card.styles';

function Selector() {
  const diets = ["⛰️ Paleo","🥑 Keto/Low Carb","🥦 Vegan","🥩 Carnivore","🥚 Vegetarian","🍣 Pescatarian"]

  return (
    <StyledSelectorMenu>
      {diets.map((item) => {
        return (
          <StyledCard textalign="center" jcontent="center" width="150px" height="150px">
            <h2> { item } </h2>
          </StyledCard>
        );
      })}

    </StyledSelectorMenu>
  )
}

export default Selector
