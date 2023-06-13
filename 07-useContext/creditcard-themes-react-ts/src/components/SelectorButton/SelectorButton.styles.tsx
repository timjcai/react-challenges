import styled from 'styled-components'

export const StyledSelectorButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid black;
  border-radius: 10px;
  padding-left: 20px;
  padding-right: 20px;
  background: grey;
  height: 50px;
  width: 25vw;
  align-items: center;
  font-size: 16px;
  margin-bottom: 10px;
  z-index: 10;
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
