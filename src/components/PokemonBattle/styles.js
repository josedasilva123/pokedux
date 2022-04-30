import styled, { css } from "styled-components";

export const MoveListBox = styled.ul`
  display: flex;
  flex-wrap: wrap;
  ${(props) =>
    props.hidden &&
    css`
      display: none;
    `}
  button:last-child {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 40px;
    margin-top: 2px;

    text-transform: uppercase;

    border: 6px solid #6e677b;
    border-radius: 8px;
    background: #fcfafb;
    -webkit-transition: 0.3s;
    transition: 0.3s;
    &:hover {
      filter: brightness(0.8);
    }
  }
`;
export const Battle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1002;

  .overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.45);
  }
`;

export const BattleGrid = styled.div`
  width: 100%;
  max-width: 450px;
  background: #000;
  border: 12px solid #496de1;
  padding: 0.6rem;
  border-radius: 16px;
`;

export const BattleBox = styled.div`
  width: 100%;
  background: linear-gradient(
    180deg,
    rgba(204, 166, 241, 1) 0%,
    rgba(255, 255, 255, 1) 34%,
    rgba(249, 249, 247, 1) 73%
  );

  & > div:first-child {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }

  & > div:last-child {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  } 
`;
export const Sprite = styled.img`
  transition: .4s;
  ${(props) => {
    if (props.owner === "player") {
      return css`
        padding: 1rem 2rem;
        animation: fadeInLeft 0.8s forwards;
      `;
    } else if (props.owner === "enemy") {
      return css`
        padding: 1rem 2rem;
        animation: fadeInRight 0.8s forwards;
      `;
    }
  }}
  ${(props) => props.fainted && css`     
      animation: faint .6s forwards;

  `}

  @keyframes faint{
    from{
      opacity: 1;
      transform: translateX(0);
    } to {
      opacity: 0;
      transform: translateY(3rem)
    }
  }
  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translateX(-4rem);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translateX(4rem);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;
export const LifeBarBox = styled.div`
  min-width: 160px;
  padding: 1rem;
`;
export const LifeBar = styled.div`
  position: relative;
  width: 100%;
  height: 9px;
  background: var(--light-gray);
  border: 3px solid #000;
  border-top: 0;
  border-radius: 2px;
  span {
    position: absolute;
    top: 0;
    left: 0;
    display: inline-flex;
    width: ${(props) => props.currentHP};
    height: 6px;
    background: var(--blue);
    transition: .6s;
  }
`;
