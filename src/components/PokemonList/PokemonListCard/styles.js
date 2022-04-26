import styled, { css } from "styled-components";

export const PokemonCardBox = styled.li`
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.3rem 1rem;
  transition: 0.4s background;
  &:nth-child(even) {
    background-color: var(--light-gray);
  }
  &:hover,
  &:nth-child(even):hover {
    background: var(--light-red);
  }
  &,
  &:hover,
  &:nth-child(even),
  &:nth-child(even):hover {
    ${(props) =>
      props.active &&
      css`
        background: var(--red);
        color: var(--white);
      `}
  }
  h3 {
    font-size: 1rem;
    text-transform: capitalize;
  }
  img {
    width: 1.5rem;
    height: 1.5rem;
  }
  div {
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }
`;
