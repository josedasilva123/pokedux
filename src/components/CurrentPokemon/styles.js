import styled from 'styled-components';

export const CurrentPokemonBox = styled.section`
    position: relative;
    width: calc(100% - 300px);
    padding: 1rem 2rem;
    header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 2rem;
    }
    h1{
        display: flex;
        align-items: flex-end;
        gap: .6rem;
        text-transform: capitalize;
        span{
            font-size: 1.1rem;
            opacity: .5;
        }
    }
`

export const ImageGrid = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 160px;
    width: 160px;
    background: var(--light-gray);
`