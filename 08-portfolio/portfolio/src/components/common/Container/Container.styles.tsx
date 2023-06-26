import styled from 'styled-components';
import React, { FC, PropsWithChildren } from 'react'

interface ContainerProps {
  $d?: string;
  $p?: string;
  $m?: string;
  $jc?: string;
  $g?: number;
  $ai?: string;
  $w?: string;
}

interface ColumnContainerProps extends PropsWithChildren {
  numbercolumns: number;
  heading: string[];
}

export const FlexCont = styled.div<ContainerProps>`
  display: flex;
  flex-direction: ${props=>props.$d};
  padding: ${props => props.$p};
  margin: ${props => props.$m};
  justify-content: ${props => props.$jc};
  gap: ${props => props.$g}px;
  align-items: ${props => props.$ai};
  width: ${props => props.$w};
  flex-wrap: wrap;
`;

export const ColumnContainer: FC<ColumnContainerProps> = ({ numbercolumns, children }) => {
  return (
    <FlexCont $d={ 'row' }>
      {[...Array(numbercolumns)].map((e, i) => {
        return (
          <FlexCont className="column" key={i} $d={'column'}>
            {children}
          </FlexCont>
        )
      })}
    </FlexCont>
  );
}
