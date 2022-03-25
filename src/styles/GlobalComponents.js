import styled, { css } from "styled-components";

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
          default:
              return;      
      }
  }}   
`;
