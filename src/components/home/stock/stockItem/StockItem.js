import React from "react";
import styles from "./StockItem.module.scss";

function StockItem({ product }) {
  return (
    <div className={styles.container}>
      <p>{product?.title}</p>
      <p>
        {product?.quantity}
        {product?.unit}
      </p>
    </div>
  );
}

export default StockItem;
