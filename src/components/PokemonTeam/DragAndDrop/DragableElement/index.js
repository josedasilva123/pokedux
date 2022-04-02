import React, { useState } from "react";
import {
  setDraggingElement,
  setHoverElement,
} from "../../../../store/reducers/DragAndDrop";
import { useDispatch, useSelector } from "react-redux";
import { DragItem } from "./styles";

const DragableElement = ({ children, index, listIndex, dropType }) => {
  const dispatch = useDispatch();

  const { draggingElement } = useSelector((store) => store.dragAndDrop);
  const [dragging, setDragging] = useState(false);
  const [hover, setHover] = useState(false);

  function onDragStart() {
    const currentItem = {
      index,
      listIndex,
      dropType,
    };
    dispatch(setDraggingElement(currentItem));
    setDragging(true);
  }

  function onDragEnd() {
    dispatch(setDraggingElement(null));
    setDragging(false);
  }

  function onDragOver(e) {
    if (draggingElement.dropType === dropType) {
      if (!dragging) {
        const currentHoverCard = {
          index,
          listIndex,
          dropType,
        };
        const card = e.currentTarget.getBoundingClientRect();
        const offset = e.clientY - card.top - card.height / 2;
        if (offset < 0) {
          dispatch(setHoverElement(currentHoverCard));
          setHover(true);
        } else {
          dispatch(setHoverElement(false));
          setHover(false);
        }
      }
    }
  }

  function clearHoverElement() {
    if (draggingElement.dropType === dropType) {
      dispatch(setHoverElement(false));
      setHover(false);
    }
  }
 
  return (
    <DragItem
      dragging={dragging}
      hover={hover}
      draggable="true"
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDragOver={onDragOver}
      onDragLeave={clearHoverElement}
      onDrop={clearHoverElement}
    >
      {children}
    </DragItem>
  );
};

export default DragableElement;
