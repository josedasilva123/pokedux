const initialState = {
    draggingElement: null,
    hoverElement: null,
}

const SET_DRAGGING_ELEMENT = 'dnd/SET_DRAGGING_ELEMENT';
const SET_HOVER_ELEMENT = 'dnd/SET_HOVER_ELEMENT';

export const setDraggingElement = (payload) => ({ type: SET_DRAGGING_ELEMENT, payload: payload});
export const setHoverElement = (payload) => ({ type: SET_HOVER_ELEMENT, payload: payload});

const reducer = (state = initialState, action) => {
    switch(action.type){
        case SET_DRAGGING_ELEMENT:
            return {...state, draggingElement: action.payload};
        case SET_HOVER_ELEMENT:
            return {...state, hoverElement: action.payload}
        default:
            return state;    
    }
}

export default reducer;