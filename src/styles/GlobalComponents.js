import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  padding: .8rem;
`
export const FlexGrid = styled.div`
  display: flex;
  ${(props) => {
    switch (props.alignItems) {
      case "center":
        return css`
          align-items: center;
        `;
      case "flex-end":
        return css`
          align-items: flex-end;
        `;
      default:
        return css`
          align-items: flex-start;
        `;
    }
  }}
  ${(props) => {
    switch (props.justifyContent) {
      case "center":
        return css`
          justify-content: center;
        `;
      case "flex-end":
        return css`
          justify-content: flex-end;
        `;
       case "space-between":
        return css`
          justify-content: space-between;
        `; 
      case "space-around":
        return css`
          justify-content: space-around;
        `;     
      default:
        return css`
          justify-content: flex-start;
        `;
    }
  }}
  ${(props) => {
    switch (props.flexDirection) {
      case "column":
        return css`
          flex-direction: column;
        `;
      case "column-reverse":
        return css`
          flex-direction: column-reverse;
        `;
      case "row-reverse":
        return css`
          flex-direction: row-reverse;
          @media (max-width: 900px){
            flex-direction: column;
          }
        `;  
      default:
        return css`
          flex-direction: row;
          @media (max-width: 900px){
            flex-direction: column;
          }
        `;
    }
  }}
  ${(props) => {
    switch (props.mobileOrientation) {
      case "reverse":
        return css`
          @media (max-width: 900px){
            flex-direction: column-reverse;
          }         
        `;   
      case "row":
        return css`
          @media (max-width: 900px){
            flex-direction: row;
          }         
        `;          
      default:
        return css`
          @media (max-width: 900px){
            flex-direction: column;
          }
        `;
    }
  }}
`
export const ThemeButton = styled.button`
  cursor: pointer;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  border-radius: 255px;
  border: none;

  font-weight: 500;

  transition: .3s;

  ${(props) => {
    switch (props.buttonSize) {
      case "small":
        return css`
          font-size: .875rem;
          padding: 0 1rem;
          height: 40px;
        `;

      case "big":
        return css`
          font-size: 1rem;
          padding: 0 1.6rem;
          height: 54px;
        `;
      default:
        return css`
          font-size: 1rem;
          padding: 0 1.2rem;
          height: 48px;
        `;
    }
  }}

  ${(props) => {
      switch(props.buttonStyle){
          case "solid1":
          return css`
            background: var(--red);
            color: var(--white);
            &:hover {
                filter: brightness(1.1);
            }
            `
          case "solid2":
          return css`
            background: var(--light-red);
            color: var(--black);
            &:hover {
                filter: brightness(1.1);
            }
            `
          case "outline1":
          return css`
            background: transparent;
            color: var(--red);
            border: 1px solid var(--red);
            &:hover {
              background: var(--red);
              color: var(--white);
              filter: brightness(1.1);
            }
            &:disabled{
              cursor: not-allowed;
              opacity: .5;
              &:hover{
                background: transparent;
                color: var(--red);
                filter: none;
              }
            }
          `    
          case "outline2":
          return css`
            background: transparent;
            color: var(--white);
            border: 1px solid var(--white);
            &:hover {
                background: var(--white);
                color: var(--red);
                filter: brightness(1.1);
            }
            `  
          default:
              return;      
      }
  }}   
`;
