import styled from 'styled-components'

export const StyledProfile = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  padding: 10px 20px 10px;
  border: 0.5px solid rgba(255, 255, 255, 0.39);
  border-radius: 16px;
  // background: rgba(255, 255, 255, 0.39);
  // box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
  // backdrop-filter: blur(10px);
  // -webkit-backdrop-filter: blur(10px);
  width: 22.25vw;
  height: 92.5vh;
  left: 1em;
`;

export const StyledProfilePicture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  border-radius: 100%;
  height: 35vh;
  width: 20vw;
  position: relative;
`;
