import {link} from "./untils";

export const getNewJoke =  async () => {
    await fetch(link, {
        method: "GET",
    }).then((response) => response.json()).then((data) => console.log(data))
}