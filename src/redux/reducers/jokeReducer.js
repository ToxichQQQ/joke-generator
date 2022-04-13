import { ADD_NEW_JOKE, LOAD_ALL_JOKES } from "../types";

export const jokeReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_NEW_JOKE:
      const newState = [...state, action.payload];
      localStorage.setItem("jokes", JSON.stringify(newState));
      return newState;
    case LOAD_ALL_JOKES:
      const jokeList = JSON.parse(localStorage.getItem("jokes"));
      return jokeList || [];
    default:
      return state;
  }
};
