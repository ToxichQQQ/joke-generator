import {link} from "./untils";

export const getNewJoke =  () => {
    return fetch(link, {
        method: "GET",
    }).then((response) => response.json())
}