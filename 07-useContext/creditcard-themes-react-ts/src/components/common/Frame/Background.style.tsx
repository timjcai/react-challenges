import styled from "styled-components";

interface BackgroundProps {
  $colorOne: string;
  $colorTwo: string;
  [key:string]: string;
}

export const StyledBackground = styled.div<BackgroundProps>`
  height: 25vh;
  width: 40vw;
  background: linear-gradient(0deg, ${props=> props.$colorOne},${props => props.$colorTwo});
`;
