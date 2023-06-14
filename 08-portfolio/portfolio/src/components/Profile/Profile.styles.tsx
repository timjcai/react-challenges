import styled from 'styled-components'

export const StyledProfile = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  padding: 10px 20px 10px;
  background: rgba(255, 255, 255, 0.39);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  width: 15vw;
  height: 85vh;
  left: 1em;
`;

export const StyledProfilePicture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  height: 35vh;
  width: 15vw;
  position: relative;
`;
