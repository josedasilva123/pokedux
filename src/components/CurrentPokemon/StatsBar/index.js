/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react'

import { useParams } from 'react-router-dom';

import { StatBar, StatsBarGrid } from './styles';

const StatsBar = ({statValue, statName}) => {
  const [activeBars, setActiveBars] = useState(null);  
  const [inactiveBars, setInactiveBars]  = useState(null);
  
  const pessoa1 = {
    name: "Alex",
  }
  
  const pessoa2 = {
    name: "Andrea",
  }
  const pessoas = [pessoa1, pessoa2];

  useEffect(() => {
    const maxBars = 18;  
    const activeBarsNumber = Math.round(statValue/10);
    const inactiveBarNumber = maxBars -activeBarsNumber;
    setActiveBars(activeBarsNumber);
    setInactiveBars(inactiveBarNumber);
  },[statValue,]);

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
        <li>
            {activeBars && createBars(activeBars).map((bar, index) => <StatBar key={index} />)}   
            {inactiveBars && createBars(inactiveBars).map((bar, index) => <StatBar key={index} inactive />)}
        </li>
    </StatsBarGrid>
  )
}

export default StatsBar