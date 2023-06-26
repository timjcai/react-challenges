import styled from 'styled-components'

type CardContainerProps = {
  width: string;
  height: string;
}

export const CardContainer = styled.div<CardContainerProps>`
  width: ${props => props.width};
  height: ${props => props.height};
  border: 1px solid white;
  border-radius: 16px;
`;

export const CasestudyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: inherit;
  height: auto;
`;

type CardProps = {
  height: string;
  width: string;
}

export const StyledCasestudyCard = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  position: relative;
  border: 0.5px solid rgba(255, 255, 255, 0.39);
  margin-bottom: 1em;
  border-radius: 16px;
  width: ${props => props.width};
  height: ${props => props.height};
  object-fit: cover;
  @media (max-width: 1400px) {
    width: 75vw;
  }
  @media (max-width: 880px) {
    width: auto;
    height: auto;
  }
`;
