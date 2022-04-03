import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const DragList = ({ data, listData, listIndex, dropType }) => {
  // const dispatch = useDispatch();
  // state de Hover, para efeitos visuais, pode ser passado como prop para um styled components
  //const [hover, setHover] = useState(false);
  const {draggingElement, hoverElement} = useSelector((store) => store.example);  

  function onDragOver(event) {
    event.preventDefault();
    //setHover(true);
  }

  //Exemplo de onDrop script
  function onDrop() {
    if (draggingElement.dropType === dropType) {
      const updatedData = [...data];
      const draggedItem = updatedData[draggingElement.listIndex][draggingElement.index];

      if (hoverElement) {
        updatedData[draggingElement.listIndex].splice(draggingElement.index, 1);
        updatedData[hoverElement.listIndex].splice(hoverElement.index, 0, draggedItem);
        // dispatch(setData(updatedData));
      } else {
        updatedData[draggingElement.listIndex].splice(draggingElement.index, 1);
        updatedData[listIndex].push(draggedItem);
        // dispatch(setData(updatedData));
      }
      //setHover(false);
    }
  }

  return (
    <ul onDragOver={onDragOver} onDrop={onDrop}>
       {listData && listData.map((itemData, index) => (
        <>
            Custom Drag Element Components
            {/* components props: itemData, index, listIndex, dropType */}
        </>
      ))}
    </ul>
  );
};

export default DragList;
