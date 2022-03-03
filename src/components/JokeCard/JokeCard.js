import React from "react";
import styles from './JokeCard.module.css'

export function JokeCard({text}) {
    return <div className={styles.card}>{text}</div>
}