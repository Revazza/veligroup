import React from "react";
import styles from "./LoadingRoller.module.scss";

function LoadingRoller({ classNames }) {
  const classes = `${styles.wrapper} ${classNames}`;
  return (
    <div className={classes}>
      <div className={styles["lds-roller"]}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default LoadingRoller;
