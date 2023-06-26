import styled from 'styled-components'

export const PageBorder = styled.div`
  // border: 1px solid white;
  border-radius: 16px;
  position: absolute;
  left: 30vw;
  height: 70vh;
  width: 50vw;
  display: flex;
  flex-direction: column;
  padding: 2em;
  text-align: left;
  @media(max-width: 1400px) {
    left: 2vw;
    width: 75vw;
  }
`;
