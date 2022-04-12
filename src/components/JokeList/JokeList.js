import React from "react";
import styles from './JokeList.module.css'
import {JokeCard} from "../JokeCard/JokeCard";
import {Button} from "../Button/Button";


export function JockeList({jokes}) {
    return(
    <div className={styles.container}>
        <div className={styles.button}>
            <Button/>
        </div>
        <div className={styles.jokeList}>
            {jokes.map(joke => <JokeCard key={joke.id} joke={joke}/>)}
        </div>
    </div>
    )
}