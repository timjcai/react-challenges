import styled from 'styled-components';

type HeadingProps = {
  $fontsize?: string;
  $textalign?: string;
  $margin?: string;
}


export const Heading = styled.h1<HeadingProps>`
  font-size: ${props => props.$fontsize};
  text-align: ${props => props.$textalign};
  color: var(--white);
  margin: ${props => props.$margin};
`;
