import React from "react";
import styles from "./Input.module.scss";

function Input({ classes, type, onChange, placeholder, minValue,value }) {
  const classNames = `${styles.container} ${classes}`;
  const inputType = type ?? "text";

  return (
    <input
      type={inputType}
      spellCheck={false}
      className={classNames}
      onChange={onChange}
      placeholder={placeholder}
      min={minValue}
      value={value}
    />
  );
}

export default Input;
