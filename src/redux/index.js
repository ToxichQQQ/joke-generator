import {createStore} from "redux";
import {CREATE_NEW_JOKE} from "./types";
import {getNewJoke} from "../services";

const reducer = (state = [],action) => {
    switch (action.type) {
        case CREATE_NEW_JOKE:
            const result = getNewJoke()
            console.log(result)
            return [...state,{id:state.length}]
        default:
            return state
    }
}

export const store = createStore(reducer)