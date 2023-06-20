import styled from 'styled-components';

type HeadingProps = {
  $fontsize?: string;
}


export const Heading = styled.h1<HeadingProps>`
  font-size: ${props => props.$fontsize};
  text-align: center;
  color: var(--white);
  margin: 0px;
`;
