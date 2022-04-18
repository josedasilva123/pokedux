import styled, {css} from "styled-components";

export const StatsBarGrid = styled.li`
    width: 100%;
    max-width: 375px;
    p{
      font-size: .875rem;
      font-weight: bold;
      text-transform: uppercase ;
    }
    div{
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
   @media (max-width: 480px){
     height: 24px;
   }
`;
