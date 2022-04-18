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
    @media (max-width: 900px){
        padding: 1rem;
        width: 100%;
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

export const StatsList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 2rem;
    background: var(--light-gray);
    padding: 2rem;
`

export const PowerLevel = styled.div`

    width: 100%;
    max-width: 375px;

    display: flex;
    align-items: center;
    gap: .6rem;

    small{
        font-family: Roboto;
        font-size: .875rem;
        text-transform: uppercase;
    }

    p{
        font-size: 1.7rem;
        font-weight: 600;
    }
    span{
        display: inline-flex;
        align-items: center;
        justify-content: center;

        width: 48px;
        height: 48px;
        border-radius: 255px;

        background: var(--blue);        

        font-size: 1.8rem;
        font-weight: 700;
        color: var(--white);        
    }
    
`