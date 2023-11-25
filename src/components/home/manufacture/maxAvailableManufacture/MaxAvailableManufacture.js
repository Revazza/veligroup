import React, { useState } from "react";
import styles from "./MaxAvailableManufacture.module.scss";
import Button from "../../../../UI/button/Button";
import { api } from "../../../../Api";

function MaxAvailableManufacture({ title, endpoint }) {
  const [maxTons, setMaxTons] = useState(0);
  const handleCalculationClick = () => {
    api.get(endpoint).then((res) => {
      setMaxTons(res.data);
    });
  };
  return (
    <div className={styles.container}>
      <p id={styles.title}>{title}</p>
      {maxTons && <p id={styles.title}>{maxTons} ტ</p>}
      <div className={styles.button_wrapper}>
        <Button title="გამოთვლა" onClick={handleCalculationClick} />
      </div>
    </div>
  );
}

export default MaxAvailableManufacture;
