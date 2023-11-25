import React from "react";
import styles from "./Stock.module.scss";
import StockItem from "./stockItem/StockItem";
import useFetch from "../../../hooks/useFetch";
import LoadingRoller from "../../../UI/loadingRoller/LoadingRoller";

function Stock() {
  const { isLoading, data } = useFetch({ endpoint: "/api/Common/GetStock" });

  console.log(data);
  return (
    <div className={styles.container}>
      {isLoading && <LoadingRoller classNames={styles.loading} />}
      {!isLoading &&
        data?.stock.map((product) => {
          return <StockItem key={product.id} product={product} />;
        })}
    </div>
  );
}

export default Stock;
