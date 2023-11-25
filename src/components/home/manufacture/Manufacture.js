import React from "react";
import styles from "./Manufacture.module.scss";
import ManufactureTemplate from "./manufactureTemplate/ManufactureTemplate";
import MaxAvailableManufacture from "./maxAvailableManufacture/MaxAvailableManufacture";

function Manufacture() {
  return (
    <div className={styles.container}>
      <MaxAvailableManufacture
        title="მაქსიმალური ქვედა ფენა"
        endpoint="/api/Common/CalculateAsphaltMaximumBottomLayer"
      />
      <MaxAvailableManufacture
        title="ზედა ფენა B ტიპი"
        endpoint="/api/Common/CalculateAsphaltMaximumTopLayer"
      />
      <ManufactureTemplate
        title="ქვედა ფენა"
        endpoint="/api/Common/CalculateAsphaltBottomLayer"
        submitEndpoint="/api/Common/ManufactureAsphaltBottomLayer"
      />
      <ManufactureTemplate
        title="ზედა ფენა B ტიპი"
        endpoint="/api/Common/CalculateAsphaltTopLayerBType"
        submitEndpoint="/api/Common/ManufactureAsphaltTopBLayer"
      />
    </div>
  );
}

export default Manufacture;
