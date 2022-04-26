import styled, {css} from 'styled-components';

export const PokemonTeamBox = styled.ul`
    position: fixed;
    right: 0;
    top: 0;
    z-index: 1001;
    display: none;
    background: var(--white);
    width: 100%;
    max-width: 300px;
    height: 100vh;
    header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: .4rem 2rem;
        button{
            cursor: pointer;
            padding: 0;
            margin: 0;
            opacity: .3;
            border: 0;
            background: transparent;
            transition: .3s;
            &:hover{
                opacity: .6;
            }
        }
    }
    ${props => props.active && css`
        display: block;
        animation: fadeInRight .3s forwards;
  `}
   @keyframes fadeInRight{
       from{
           opacity: 0;
           transform: translateX(4rem);
       } to {
           opacity: 1;
           transform: translateX(0);
       }
   }
`

export const TeamPowerBox = styled.div`
    padding: 2rem;
    background: var(--red);
    small{
        color: var(--white);
    }
    h2{
        margin: 0;
        padding: 0;
        font-size: 2rem;
        color: var(--white)
    }
    div{
        position: relative;
        width: 100%;        
        height: .5rem;
        background: var(--white);
        
        & > span{
            position: absolute;
            top: 0;
            left: 0;    
            width: ${props => props.powerPercent};
            display: inline-flex;
            animation: expandWidth .8s forwards;
            background: var(--blue);
            height: .5rem;
            transition: .3s;
        }
    }
    
`