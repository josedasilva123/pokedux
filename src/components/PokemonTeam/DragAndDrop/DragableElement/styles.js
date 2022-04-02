import styled, { css } from "styled-components";

export const DragItem = styled.li`
  background: var(--white);  
  transition: .3s;
  ${(props) =>
    props.dragging &&
    css`
      opacity: 0.5;
    `}
  ${(props) =>
    props.hover &&
    css`
      background: var(--light-red);
    `}
`;
