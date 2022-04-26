import styled from 'styled-components';

export const PokemonTeamCardBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    min-width: 300px;
    padding: .5rem 1rem;
    div{
        display: flex;
        align-items: center;
        gap: .6rem;
        h3{
            font-weight: 500;
            text-transform: capitalize;
        }
    }
    img{
        width: 70px;
    }
    button{
        cursor: pointer;
        background: transparent;
        border: none;
        opacity: .2;
        transition: .3s;
        &:hover{
            opacity: .6;
        }
    }
`