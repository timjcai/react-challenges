import styled from "styled-components";

export const StyledProgressbar = styled.div`
  width: auto;
  border-radius: 10px;
  height: 1em;
  background-color: ${(props) => props.$backgroundColor || "#FFFFFF" };
  background: linear-gradient(to right, ${(props) => props.$backgroundColor} ${(props)=>props.$percentageReached}, #32373B ${(props)=>props.$percentageReached});
`;

export const StyledPBLabel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-weight: bold;
`;
