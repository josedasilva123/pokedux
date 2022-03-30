import styled, {css} from "styled-components";

export const StatsBarGrid = styled.div`
    p{
      font-size: .875rem;
      font-weight: bold;
      text-transform: uppercase ;
    }
    li{
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        gap: .4rem;
    }
`
export const StatBar = styled.span`
  display: inline-block;
  width: calc(100%/18);
  height: 36px;
  animation: colorize .6s forwards;
  ${(props) =>
    props.inactive &&
    css`
      background: var(--white);
      animation: none;
    `}
   @keyframes colorize{
       from{
        background: var(--white); 
       } to {
        background: var(--blue);
       }
   } 
`;
