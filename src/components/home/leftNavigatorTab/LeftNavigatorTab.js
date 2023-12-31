import React from "react";
import styles from "./LeftNavigatorTab.module.scss";
import { Link } from "react-router-dom";

function LeftNavigatorTab({ classes }) {
  const classNames = `${styles.container} ${classes}`;
  return (
    <div className={classNames}>
      <div className={styles.operations_container}>
        <div className={styles.operation_wrapper}>
          <Link to="add">ოპერაციები</Link>
        </div>
        <div className={styles.operation_wrapper}>
          <Link to="manufacture">გადამუშავება</Link>
        </div>
        <div className={styles.operation_wrapper}>
          <Link to="history">ისტორია</Link>
        </div>
        <div className={styles.operation_wrapper}>
          <Link to="stock">მარაგი</Link>
        </div>
      </div>
    </div>
  );
}

export default LeftNavigatorTab;
