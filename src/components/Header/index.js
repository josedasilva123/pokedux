import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleModal } from '../../store/reducers/PokemonTeam';
import { ThemeButton } from '../../styles/GlobalComponents';

const Header = () => {
  const dispatch = useDispatch();
  const {modal} = useSelector((store) => store.pokemonTeam);

  function handleClick(){
    if(modal){
        dispatch(toggleModal(false));
    } else {
        dispatch(toggleModal(true));   
    }    
  }

  return (
    <header>
        <ThemeButton buttonSize="medium" buttonStyle="solid1" onClick={handleClick}>Time</ThemeButton>
    </header>    
  )
}

export default Header