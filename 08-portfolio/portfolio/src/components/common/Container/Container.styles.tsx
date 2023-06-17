import styled from 'styled-components';

interface ContainerProps {
  $d?: string;
  $p?: string;
  $m?: string;
  $jc?: string;
  $g?: number;
  $ai?: string;
  $w?: string;
}

export const FlexCont = styled.div<ContainerProps>`
  display: flex;
  flex-direction: ${props=>props.$d};
  padding: ${props => props.$p};
  padding: ${props => props.$m};
  justify-content: ${props => props.$jc};
  gap: ${props => props.$g}px;
  align-items: ${props => props.$ai};
  width: ${props => props.$w};
`;
