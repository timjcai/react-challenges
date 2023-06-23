import styled from 'styled-components'

type StylingProps = {
  $margin?: string;
  $padding?: string;
}

export const StyledBadge = styled.div<StylingProps>`
  display: flex;
  flex-direction: row;
  width: 160px;
  justify-content: start;
  align-items: center;
  border: 1px solid white;
  border-radius: 6px;
  margin: ${props => props.$margin};
  padding: ${props => props.$padding};
`;
