import styled from 'styled-components'

export const StyledSocialLink = styled.a`
  color: var(--secondary);
  border: 0.5px solid var(--secondary);
  padding: 3px 15px;
  border-radius: 100%;
  &:hover{
    background-color: var(--true);
    color: var(--white);
  }
  &:active{
    background-color: var(--true);
  }
`;
