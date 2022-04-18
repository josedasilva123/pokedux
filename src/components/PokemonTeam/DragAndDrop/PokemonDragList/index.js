import React, { useState } from "react";
import PokemonTeamCard from "../PokemonTeamCard";
import { useDispatch, useSelector } from "react-redux";
import { changeTeam } from "../../../../store/reducers/PokemonTeam";

const PokemonDragList = ({ data, dropType }) => {
  const dispatch = useDispatch();
  const {draggingElement, hoverElement} = useSelector((store) => store.dragAndDrop);  

  function onDragOver(event) {
    event.preventDefault();    
  }

  function onDrop() {
    if (draggingElement.dropType === dropType) {
      const updatedData = [...data];
      const index = draggingElement.index;

      if (hoverElement) {
        updatedData.splice(index, 1);
        updatedData.splice(hoverElement.index, 0, data[index]);
        dispatch(changeTeam(updatedData));
      } else {
        updatedData.splice(index, 1);
        updatedData.push(data[index]);
        dispatch(changeTeam(updatedData));
      }
    }
  }

  return (
    <ul onDragOver={onDragOver} onDrop={onDrop}>
       {data && data.map((itemData, index) => (
        <PokemonTeamCard
          key={itemData.id}
          itemData={itemData}
          index={index}
          dropType={dropType}
        />
      ))}
    </ul>
  );
};

export default PokemonDragList;
