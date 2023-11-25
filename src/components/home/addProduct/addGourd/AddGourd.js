import React from "react";
import AddProductTemplate from "../addProductTemplate/AddProductTemplate";
import useApiRequest from "../../../../hooks/useApiRequest";

function AddGourd({ size }) {
  const { isLoading, hasErrors, message, handleApiRequest } = useApiRequest();

  const handleAddGourd = (tons) => {
    if (!tons) {
      return;
    }
    handleApiRequest(
      "/api/Gourd/AddGourd",
      { tons, size },
      "წარმატებით დაემატა"
    );
  };

  const handleDeleteGourd = (tons) => {
    if (!tons) {
      return;
    }
    handleApiRequest(
      "/api/Gourd/DeleteGourd",
      { tons, size },
      "წარმატებით წაიშალა"
    );
  };

  return (
    <AddProductTemplate
      productName="ღორღი"
      inputType="number"
      placeholder="ტონა"
      minValue={0}
      onClick={handleAddGourd}
      onDelete={handleDeleteGourd}
      isLoading={isLoading}
      hasErrors={hasErrors}
      message={message}
    >
      <p>ზომა {size}</p>
    </AddProductTemplate>
  );
}

export default AddGourd;
