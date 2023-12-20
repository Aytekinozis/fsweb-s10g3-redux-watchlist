export const ADD_LIST = "ADD_LIST";
export const REMOVE_FAV = "REMOVE_FAV";

export const addList = (movie) => {
  return { type: ADD_LIST, payload: movie };
};

export const removeFav = (id) => {
  return { type: REMOVE_FAV, payload: id };
};
