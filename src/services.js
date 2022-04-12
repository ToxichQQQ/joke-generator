import {link} from "./untils";

export const getNewJoke = async () => {
      return await fetch(link, {
        method: "GET",
    }).then((response) => response.json())
}