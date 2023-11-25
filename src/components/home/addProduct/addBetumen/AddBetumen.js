import React from "react";
import AddProductTemplate from "../addProductTemplate/AddProductTemplate";
import useApiRequest from "../../../../hooks/useApiRequest";

function AddBetumen() {
  const { isLoading, hasErrors, message, handleApiRequest } = useApiRequest();

  const handleAddBetumen = (tons) => {
    if (!tons) {
      return;
    }
    handleApiRequest("/api/Bitumen/AddBitumen", { tons }, "წარმატებით დაემატა");
  };

  const handleDeleteBitumen = (tons) => {
    if (!tons) {
      return;
    }
    handleApiRequest(
      "/api/Bitumen/DeleteBitumen",
      { tons },
      "წარმატებით წაიშალა"
    );
  };

  return (
    <AddProductTemplate
      productName="ბიტუმი"
      inputType="number"
      placeholder="ტონა"
      minValue={0}
      onClick={handleAddBetumen}
      onDelete={handleDeleteBitumen}
      isLoading={isLoading}
      hasErrors={hasErrors}
      message={message}
    />
  );
}

export default AddBetumen;
