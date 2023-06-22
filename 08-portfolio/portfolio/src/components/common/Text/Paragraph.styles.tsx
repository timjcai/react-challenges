import styled from 'styled-components';

interface ParagraphProps {
  $fontsize?: number;
  $textalign?: string;
  $color?: string;
  $margin?: string;
}

export const Paragraph = styled.p<ParagraphProps>`
  font-size: ${props => props.$fontsize}em;
  text-align: ${props=> props.$textalign};
  color: ${props => props.$color};
  margin: ${props=> props.$margin};
`;
