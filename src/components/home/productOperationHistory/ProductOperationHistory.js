import React, { useEffect } from "react";
import styles from "./ProductOperationHistory.module.scss";
import ProductOperationHistoryItem from "./productOperationHistoryItem/ProductOperationHistoryItem";
import { useState } from "react";
import { api } from "../../../Api";
import Button from "../../../UI/button/Button";

function ProductOperationHistory() {
  const [page, setPage] = useState(0);
  const [data, setData] = useState([]);
  const [hasMoreData, setHasMoreData] = useState(true);

  useEffect(() => {
    getProductHistory();
  }, []);

  const getProductHistory = () => {
    api
      .get(`/api/ProductHistory/GetAllProductHistory?page=${page}`)
      .then((res) => {
        const history = res.data.payload.history;
        if (history.length < 25) {
          setHasMoreData(false);
        }
        setPage((prevState) => ++prevState);
        setData((prevState) => prevState.concat(history));
      });
  };

  return (
    <div className={styles.container}>
      {data?.map((history) => {
        return (
          <ProductOperationHistoryItem key={history.id} history={history} />
        );
      })}
      {hasMoreData && (
        <div className={styles.btn_wrapper}>
          <Button onClick={getProductHistory} title="მეტის ჩვენება" />
        </div>
      )}
      {!hasMoreData && <p id={styles.lastP}>მეტი ინფორმაცია არ არის</p>}
    </div>
  );
}

export default ProductOperationHistory;
