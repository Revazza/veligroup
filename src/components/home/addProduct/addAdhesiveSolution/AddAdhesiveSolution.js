import React from "react";
import AddProductTemplate from "../addProductTemplate/AddProductTemplate";
import useApiRequest from "../../../../hooks/useApiRequest";

function AddAdhesiveSolution() {
  const { isLoading, hasErrors, message, handleApiRequest } = useApiRequest();

  const handleAddAdhesiveSolution = (liters) => {
    if (!liters) {
      return;
    }

    handleApiRequest(
      "/api/AdhesiveSolutions/AddAdhesiveSolution",
      { liters },
      "წარმატებით დაემატა"
    );
  };

  const handleDeleteAdhesiveSolution = (liters) => {
    if (!liters) {
      return;
    }
    handleApiRequest(
      "/api/AdhesiveSolutions/DeleteAdhesiveSolution",
      { liters },
      "წარმატებით წაიშალა"
    );
  };

  return (
    <AddProductTemplate
      productName="ადგეზიური ხსნარი"
      inputType="number"
      placeholder="ლიტრი"
      minValue={0}
      onClick={handleAddAdhesiveSolution}
      onDelete={handleDeleteAdhesiveSolution}
      isLoading={isLoading}
      hasErrors={hasErrors}
      message={message}
    />
  );
}

export default AddAdhesiveSolution;
