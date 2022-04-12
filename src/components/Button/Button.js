import React from "react";
import styles from './Button.module.css'
import {useDispatch} from "react-redux";
import { GET_NEW_JOKE} from "../../redux/types";

export function Button() {
 const dispatch = useDispatch()

 const handleAddNewJoke = () => {
  dispatch({type:GET_NEW_JOKE})
 }

 return <button onClick={handleAddNewJoke} className={styles.button}>More</button>
}