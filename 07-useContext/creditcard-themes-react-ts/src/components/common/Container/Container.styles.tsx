import styled from 'styled-components'

type ContainerProps = {
  $direction: string
  $width?: number
  $mt?: number;
  $mb?: number;
  $ms?: number;
  $me?: number;
  $justify?: string;
}

export const StyledContainer = styled.div<ContainerProps>`
  display: flex;
  flex-direction: ${props => props.$direction};
  justify-content: ${props => props.$justify};
  width: ${props => props.$width}vw;
  margin-top: ${props => props.$mt}em;
  margin-bottom: ${props => props.$mb}em;
  margin-left: ${props => props.$ms}em;
  margin-right: ${props => props.$me}em;
`;
