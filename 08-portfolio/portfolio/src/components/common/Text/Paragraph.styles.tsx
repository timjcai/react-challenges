import styled from 'styled-components';

interface ParagraphProps {
  $fontsize?: number
}

export const Paragraph = styled.p<ParagraphProps>`
  font-size: ${props => props.$fontsize}em;
  text-align: center;
  color: var(--secondary)
`;
