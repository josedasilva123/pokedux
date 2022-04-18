import { type } from '@testing-library/user-event/dist/type';
import React, {useEffect , useState} from 'react'
import {MdHelp} from 'react-icons/md'

const Moves = ({move}) => {
  const [loading, setLoading] = useState(); 
  const [currentPP, setCurrentPP] = useState(0);
  const [maxPP, setMaxPP] = useState(0);
  const [currentMove, setCurrentMove] = useState(null); 
  useEffect(() => {
    async function getMove(){
        try {
            setLoading(true);
            const response = await fetch(move.url);
            const json = await response.json();
            setCurrentMove(json);
            setCurrentPP(json.pp);
            setMaxPP(json.pp);
        } catch (error) {
            setCurrentMove(null);
            setCurrentPP(0);
            setMaxPP(0);
        } finally {
            setLoading(false);
        }
    }
    getMove();
  }, [move])  

  function handleClick(){
      if(currentPP > 0){
          const newPP = currentPP - 1;
          setCurrentPP(newPP);
      }
  }

  return (
    <>
        {currentMove && (
            <button onClick={handleClick}>
                <span>{currentPP}/{maxPP}</span>
                <h3>{currentMove.name}</h3>
                <small>{currentMove.type.name}</small>
                <button>
                    <MdHelp size={21}/>
                </button>
            </button>
        )}
    </>
  )
}

export default Moves