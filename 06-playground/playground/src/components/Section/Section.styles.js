import styled from "styled-components";

export const StyledSection = styled.div`
  display: flex;
  flex-direction: ${(props) => props.$row ? "column" : "row" };
`;
