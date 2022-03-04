import React from "react";
import styles from './Button.module.css'
import {useDispatch} from "react-redux";
import {createNewJoke} from "../../redux/actions";

export function Button() {
 const dispatch = useDispatch()
 const handleCreateNewJoke = () => {
  dispatch(createNewJoke())
 }
 return <button onClick={() => handleCreateNewJoke()} className={styles.button}>More</button>
}