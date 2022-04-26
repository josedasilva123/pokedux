import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setChat } from '../../../store/reducers/PokemonBattle'
import { MdArrowRight } from 'react-icons/md';
import { ChatBox } from './styles';

const BattleChat = () => {
  const dispatch = useDispatch();
  const {battleChat} = useSelector((store) => store.pokemonBattle);

  function nextMessage(callback){    
    
    const newBattleChat = [...battleChat];
    newBattleChat.shift();
    dispatch(setChat(newBattleChat));  
    if(callback){
      callback(); 
    }    
  }
  return (
    <ChatBox>
      <p>{battleChat[0]?.text}</p>
      <button onClick={() => nextMessage(battleChat[0].callback)}>
        <MdArrowRight />
      </button>
    </ChatBox>
    
  )
}

export default BattleChat