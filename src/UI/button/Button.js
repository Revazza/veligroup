import React from "react";
import styles from "./Button.module.scss";

function Button({ classes, title, onClick, type }) {
  const btnClasses = `${styles.wrapper} ${classes}`;

  return (
    <button type={type ?? "button"} onClick={onClick} className={btnClasses}>
      {title ?? "Button"}
    </button>
  );
}

export default Button;
