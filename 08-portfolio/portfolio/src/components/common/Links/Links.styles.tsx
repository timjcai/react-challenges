import styled from 'styled-components';
import {Link} from "react-router-dom"

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  color: var(--text);
  text-decoration: none;
  font-size: 20px;
  margin: 10px 5px 10px;
  :hover {
    color: var(--accent);
    transition: ease-in 0.3s;

  }
`;
