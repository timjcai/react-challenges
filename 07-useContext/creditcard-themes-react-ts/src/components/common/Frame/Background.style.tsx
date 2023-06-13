import styled from "styled-components";

interface BackgroundProps {
  $colorOne: string;
  $colorTwo: string;
  $height: number;
  $radius?: number;
  $overlap?: number;
  $zindex?: number;
}

export const StyledBackground = styled.div<BackgroundProps>`
  height: ${props=>props.$height}vh;
  width: inherit;
  background: linear-gradient(0deg, ${props => props.$colorOne} 20%,${props => props.$colorTwo});
  border-radius: ${props => props.$radius}px;
  margin-top: ${props => props.$overlap}px;
  z-index: ${props => props.$zindex};
`;

export const BackgroundWrapper = styled.div`
  margin-top: 20px;
  width: 466px;
`;
