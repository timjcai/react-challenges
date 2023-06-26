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

export const StyledImageWrapper = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 0.5em;
  border: 0.5px solid rgba(255, 255, 255, 0.39);
  border-radius: 16px;
  width: ${props => props.width};
  height: ${props => props.height};
  object-fit: cover;
  @media (max-width: 1400px) {
    width: 75vw;
  }
  @media (max-width: 880px) {
    width: auto;
  }
`;

export const StyledCasestudyCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3em;
  padding-top: 10px;
  border-bottom: 1px solid white;

  @media (max-width: 1400px) {
    height: auto;
  }
  @media (max-width: 880px) {
    width: auto;
  }
`;

export const CasestudyImage = styled.img`
  max-width: auto;
  max-height: 650px;
  border-radius: 16px;
  object-fit: cover;
  object-position: 0% 40%;


  @media (max-width: 880px) {
    width: auto;
    max-height: 100%;
  }
`;
