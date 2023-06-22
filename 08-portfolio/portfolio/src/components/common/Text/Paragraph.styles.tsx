import styled from 'styled-components';

interface ParagraphProps {
  $fontsize?: number
  $textalign?: string;
}

export const Paragraph = styled.p<ParagraphProps>`
  font-size: ${props => props.$fontsize}em;
  text-align: ${props=> props.$textalign};
  color: var(--secondary);
  margin: 0px;
`;
