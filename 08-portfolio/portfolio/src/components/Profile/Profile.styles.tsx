import styled from 'styled-components'

export const StyledProfile = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  border: 0.5px solid rgba(255, 255, 255, 0.39);
  border-radius: 16px;
  // background: rgba(255, 255, 255, 0.39);
  // box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
  // backdrop-filter: blur(10px);
  // -webkit-backdrop-filter: blur(10px);
  width: 22.25vw;
  height: 60vh;
  left: 1em;
  overlay: fill;
  @media(max-width: 1400px) {
    display: none;
  }
`;

export const StyledProfilePicture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  border-radius: 16px;
  height: 60vh;
  width: 22.25vw;
  position: relative;
`;
