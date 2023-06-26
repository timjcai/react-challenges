import styled from 'styled-components';

export const StyledNavbar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1em;
  position: fixed;
  width: auto;
  right: 1em;
  border-radius: 16px;
  border: 0.5px solid rgba(255, 255, 255, 0.39);

  @media (max-width: 880px) {
    bottom: 0.5em;
    width: auto;
    left: 0.5em;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background: white;
    position: fixed;
    background: rgba(255, 255, 255, 0.39);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }
`;
;
