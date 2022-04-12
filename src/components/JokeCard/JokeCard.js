import React from "react";
import styles from './JokeCard.module.css'

export function JokeCard({joke}) {
    return <div className={styles.card}>{joke.text}</div>
}