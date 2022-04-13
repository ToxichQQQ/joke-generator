import React from "react";
import styles from "./Button.module.css";
import { useDispatch } from "react-redux";
import { handleGetNewJoke } from "../../redux/actions";

export function Button() {
  const dispatch = useDispatch();

  const handleAddNewJoke = () => {
    dispatch(handleGetNewJoke());
  };

  return (
    <button onClick={handleAddNewJoke} className={styles.button}>
      More
    </button>
  );
}
