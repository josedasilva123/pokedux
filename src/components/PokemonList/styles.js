import styled from 'styled-components';

export const PokemonListGrid = styled.aside`
    width: 100%;
    max-width: 300px;
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
   }  
`