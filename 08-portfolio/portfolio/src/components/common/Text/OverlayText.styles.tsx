import styled from 'styled-components'

type OverlayProps = {
  $fontcolor?: string;
}

export const TextOverlay = styled.div<OverlayProps>`
  display: flex;
  flex-direction: column;
  text-align:left;
  position: absolute;
  color: ${props => props.$fontcolor};
  bottom: 3px;
  left: 30px;
  margin-bottom: 10px;
`;

export const TextOverlayHeading = styled.h2`
  margin-bottom: -10px;
  font-size: 1em;
`;

export const TextOverlayParagraph = styled.p`
  font-size: 0.6em;
`;
