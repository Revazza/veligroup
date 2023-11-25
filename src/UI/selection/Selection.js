import React from "react";
import styles from "./Selection.module.scss";

function Selection({ classes, options }) {
  const classNames = `${styles.selection} ${classes}`;
  return (
    <select className={classNames}>
      {options?.map((o) => {
        return <option value={o.value}>{o.name}</option>;
      })}
    </select>
  );
}

export default Selection;
