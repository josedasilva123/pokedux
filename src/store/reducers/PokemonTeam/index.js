import getLocalStorage from "../../../functions/getLocalStorage";
const initialState = {
  list: getLocalStorage('POKE_TEAM', []),
  error: null,
};

const CHANGE_TEAM = "pokelist/CHANGE_TEAM";
const SET_ERROR = "pokelist/SET_ERROR";

export const changeTeam = (payload) => ({
  type: CHANGE_TEAM,
  payload: payload,
  meta: 'POKE_TEAM',
});
export const setError = (payload) => ({
  type: SET_ERROR,
  payload: payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TEAM:
      return { ...state, list: action.payload, error: null };
    case SET_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default reducer;
