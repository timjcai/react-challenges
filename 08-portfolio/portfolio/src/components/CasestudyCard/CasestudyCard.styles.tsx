import styled from 'styled-components'

type CardContainerProps = {
  column: string;
  row: string;
}

export const CardContainer = styled.div<CardContainerProps>`
  grid-column: ${props => props.column};
  grid-row: ${props => props.row};
  border: 1px solid white;
  border-radius: 16px;
`;

export const CasestudyWrapper = styled.div`
  display: grid;
  grid-template-columns: 25vw;
  grid-template-rows: 25vh 25vh 25vh;
  column-gap: 10px;
  row-gap: 10px;
  padding: 10px 0px 10px 0px;
`;

type CardProps = {
  height: string;
  width: string;
}

export const StyledCasestudyCard = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  position: absolute;
  border: 0.5px solid rgba(255, 255, 255, 0.39);
  border-radius: 16px;
  width: ${props => props.width};
  height: ${props => props.height};
  object-fit: cover;
`;
