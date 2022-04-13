import { GET_NEW_JOKE, LOAD_ALL_JOKES } from "./types";

export const handleLoadAllJokes = () => {
  return { type: LOAD_ALL_JOKES };
};

export const handleGetNewJoke = () => {
  return { type: GET_NEW_JOKE };
};
