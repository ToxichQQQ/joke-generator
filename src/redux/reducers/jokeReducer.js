import {ADD_NEW_JOKE} from "../types";

export const jokeReducer = (state=[],action) => {
    switch (action.type) {
        case ADD_NEW_JOKE:
            return [...state,action.payload]
        default:
            return state
    }
}