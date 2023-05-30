import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  text-align: ${(props) => props.textalign || "left" } ;
  padding: 1em;
  margin-bottom: 1em;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  justify-content: ${(props) => props.jcontent || "left"} ;

  &:hover {
    outline: 4px solid #FEFFFE;
    outline-offset: 1px;
    background: rgba(255,255,255, 0.4);
  }
`;
