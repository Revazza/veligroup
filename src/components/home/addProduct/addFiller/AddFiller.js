import React from "react";
import AddProductTemplate from "../addProductTemplate/AddProductTemplate";
import useApiRequest from "../../../../hooks/useApiRequest";

function AddFiller() {
  const { isLoading, hasErrors, message, handleApiRequest } = useApiRequest();

  const handleAddFiller = (tons) => {
    if (!tons) {
      return;
    }

    handleApiRequest("/api/Filler/AddFiller", { tons }, "წარმატებით დაემატა");
  };

  const handleDeleteFiller = (tons) => {
    if (!tons) {
      return;
    }
    handleApiRequest(
      "/api/Filler/DeleteFiller",
      { tons },
      "წარმატებით წაიშალა"
    );
  };
  return (
    <AddProductTemplate
      productName="ფილერი"
      inputType="number"
      placeholder="ტონა"
      minValue={0}
      onClick={handleAddFiller}
      onDelete={handleDeleteFiller}
      isLoading={isLoading}
      hasErrors={hasErrors}
      message={message}
    />
  );
}

export default AddFiller;
