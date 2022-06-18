import {allMoves, pokemonMoves} from './data';
    
function loadMoves(moveList){    
    const loadedMoves = moveList.map(move => {
        const loadedMove = allMoves.find(newMove => newMove.name === move);
        return loadedMove;
    })
    return loadedMoves;
}

export function getMainMoves(id){
    // Pega a lista moves padrão
    const pokemon = pokemonMoves.find(list => list.id === id);    
    
    if(pokemon){
        //Retorna os moves com as informações completas
        const loadedMoves = loadMoves(pokemon.moveList);
        return loadedMoves;
    } else {
        console.log('Pokémon inválido.');
    }
}