import React from "react";
import styles from "./ProductOperationHistoryItem.module.scss";
import formatDateToGeorgian from "../../../../helperFunctions/formatDateToHumanReadable";
import Button from "../../../../UI/button/Button";
import { api } from "../../../../Api";

function ProductOperationHistoryItem({ history, onHistoryDelete }) {
  const {
    id,
    status,
    actionName,
    preUpdatedQuantity,
    createdAt,
    quantityChange,
    unit,
  } = history;

  const styleId =
    status === 0
      ? styles.added
      : status === 1
      ? styles.updated
      : styles.deleted;

  const operation =
    status === 0 ? "დაემატა" : status === 1 ? "გადამუშავდა" : "მოიხმარა";
  const leftQuantity =
    status === 0
      ? `გახდა ${(preUpdatedQuantity + quantityChange)?.toFixed(2)}`
      : status === 1
      ? `დარჩა ${(preUpdatedQuantity - quantityChange)?.toFixed(2)}`
      : `დარჩა ${(preUpdatedQuantity - quantityChange)?.toFixed(2)}`;

  const handleDeleteHistory = () => {
    api.post(`/api/ProductHistory/RemoveProductHistory`, { id }).then((res) => {
      onHistoryDelete(history)
    });
  };

  const localizedTime = new Date(createdAt).toString();
  return (
    <div id={styleId} className={styles.container}>
      <div className={styles.info_wrapper}>
        <p>{actionName}</p>
        <p>
          მარაგში იყო {preUpdatedQuantity?.toFixed(2)}
          {unit}
        </p>
        <p>
          {operation} {quantityChange?.toFixed(2)}
          {unit}
        </p>
        <p>
          {leftQuantity}
          {unit}
        </p>
        <p>{formatDateToGeorgian(new Date(localizedTime))}</p>
      </div>
      <div className={styles.btn_wrapper}>
        <Button title="წაშლა" onClick={handleDeleteHistory} />
      </div>
    </div>
  );
}

export default ProductOperationHistoryItem;
