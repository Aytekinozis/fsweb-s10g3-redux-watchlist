import { ADD_LIST, REMOVE_FAV } from "../actions/favAction";

const initialState = {
  list: [],
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIST:
      let newState = {};
      if (state.list.find((item) => item.id === action.payload.id)) {
        newState = { ...state };
      } else {
        newState = {
          ...state,
          list: [...state.list, action.payload],
        };
      }
      return newState;

    case REMOVE_FAV:
      return {
        ...state,
        list: state.list.filter((item) => action.payload !== item.id),
      };

    default:
      return state;
  }
};

export default listReducer;
