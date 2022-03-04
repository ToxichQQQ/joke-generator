import React from "react";
import styles from './JokeList.module.css'
import {JokeCard} from "../JokeCard/JokeCard";
import {Button} from "../Button/Button";


export function JockeList({jokes}) {
    return <div className={styles.list}>
        <Button/>
        <JokeCard/>
    </div>
}