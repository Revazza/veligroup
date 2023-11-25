import React from "react";
import styles from "./AddProduct.module.scss";
import AddGourd from "./addGourd/AddGourd";
import AddFiller from "./addFiller/AddFiller";
import AddSand from "./addSand/AddSand";
import AddBetumen from "./addBetumen/AddBetumen";
import AddAdhesiveSolution from "./addAdhesiveSolution/AddAdhesiveSolution";

function AddProduct() {
  return (
    <div className={styles.container}>
      <AddBetumen />
      <AddFiller />
      <AddGourd size="5x10" />
      <AddGourd size="10x20" />
      <AddSand fraction="0.5" />
      <AddSand fraction="0.8" />
      <AddAdhesiveSolution />
    </div>
  );
}

export default AddProduct;
