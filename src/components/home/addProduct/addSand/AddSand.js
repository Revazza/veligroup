import React from "react";
import AddProductTemplate from "../addProductTemplate/AddProductTemplate";
import useApiRequest from "../../../../hooks/useApiRequest";

function AddSand({ fraction }) {
  const { isLoading, hasErrors, message, handleApiRequest } = useApiRequest();

  const handleAddSand = (tons) => {
    if (!tons) {
      return;
    }

    handleApiRequest(
      "/api/Sand/AddSand",
      { tons, fraction:fraction },
      "წარმატებით დაემატა"
    );
  };

  const handleDeleteSand = (tons) => {
    if (!tons) {
      return;
    }

    handleApiRequest(
      "/api/Sand/DeleteSand",
      { tons, fraction:fraction },
      "წარმატებით დაემატა"
    );
  };

  return (
    <AddProductTemplate
      productName="ქვიშა"
      inputType="number"
      placeholder="ტონა"
      minValue={0}
      onClick={handleAddSand}
      onDelete={handleDeleteSand}
      isLoading={isLoading}
      hasErrors={hasErrors}
      message={message}
    >
      <p>ფრაქცია {fraction}</p>
    </AddProductTemplate>
  );
}

export default AddSand;
