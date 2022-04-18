import styled from 'styled-components';

export const PokemonListGrid = styled.aside`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 300px;
    @media (max-width: 900px){
        padding: 1rem;
        max-width: unset;
    }
`
export const PokemonListBox = styled.div`
   width: 100%;    
   ul{
    max-height: 80vh;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        width: 8px;
    }
    &::-webkit-scrollbar-track {
        background: #f1f1f1;
    }
    &::-webkit-scrollbar-thumb {
        background: #E3350D
    }
    &::-webkit-scrollbar-thumb:hover {
        filter: brightness(1.1);
    }
    @media (max-width: 900px){
        max-height: 300px;
    }
   }  
`