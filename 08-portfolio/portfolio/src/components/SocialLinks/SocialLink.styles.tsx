import styled from 'styled-components'

interface SocialLinkProps {
  color?: string;
}

export const StyledSocialLink = styled.a<SocialLinkProps>`
  background-color: var(--primary);
  border: 1px solid ${props=>props.color};
  padding: 3px 15px;
  border-radius: 100%;
  &:hover{
    background-color: var(--white);
    color: var(--white);
  }
  &:active{
    background-color: ${props=>props.color};
  }
`;
