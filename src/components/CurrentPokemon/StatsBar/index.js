/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import { StatBar, StatsBarGrid } from './styles';

const StatsBar = ({statValue, statName}) => {
  const [activeBars, setActiveBars] = useState(null);  
  const [inactiveBars, setInactiveBars]  = useState(null);  

  useEffect(() => {
    const maxBars = 18;  
    const activeBarsNumber = Math.round(statValue/10);
    const inactiveBarNumber = maxBars - activeBarsNumber;
    if(activeBarsNumber > maxBars){
      setActiveBars(maxBars);
    } else {
      setActiveBars(activeBarsNumber);  
    }
    
    setInactiveBars(inactiveBarNumber);
  },[statValue, ]);

  function createBars(amount){
    let bars = [];  
    for (var i = 0; i < amount; i++) {
        bars.push(1);
    }
    return bars;
  } 

  return (
    <StatsBarGrid>
        <p>{statName}</p>
        <div>
            {activeBars > 0 && createBars(activeBars).map((bar, index) => <StatBar key={index} />)}   
            {inactiveBars > 0 && createBars(inactiveBars).map((bar, index) => <StatBar key={`inactive-${index}`} inactive />)}
        </div>
    </StatsBarGrid>
  )
}

export default StatsBar