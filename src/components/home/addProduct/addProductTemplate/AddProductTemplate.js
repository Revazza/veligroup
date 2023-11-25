import React, { useState } from "react";
import styles from "./AddProductTemplate.module.scss";
import Input from "../../../../UI/Input/Input";
import Button from "../../../../UI/button/Button";
import LoadingRoller from "../../../../UI/loadingRoller/LoadingRoller";

function AddProductTemplate({
  productName,
  inputType,
  placeholder,
  minValue,
  onClick,
  isLoading,
  message,
  hasErrors,
  children,
  onDelete,
}) {
  const [inputValue, setInputValue] = useState("");

  const onChangeInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const onAddClick = () => {
    onClick(inputValue);
    setInputValue("");
  };

  const onDeleteClick = () =>{
    onDelete(inputValue);
    setInputValue("");
  }

  const msgstyleId = hasErrors ? styles.errorMsg : styles.sucessMsg;
  return (
    <React.Fragment>
      <div className={styles.item_wrapper}>
        {isLoading && <LoadingRoller classNames={styles.loading} />}
        <div className={styles.item_info}>
          <p>{productName}</p>
          <Input
            type={inputType}
            classes={styles.item_info_input}
            placeholder={placeholder}
            minValue={minValue}
            onChange={onChangeInputValue}
            value={inputValue}
          />
          {children}
        </div>
        <div className={styles.add_button}>
          <Button onClick={onAddClick} title="დამატება" />
          <Button
            onClick={onDeleteClick}
            title="წაშლა"
            classes={styles.update_btn}
          />
        </div>
      </div>
      {message && <p id={msgstyleId}>{message}</p>}
    </React.Fragment>
  );
}

export default AddProductTemplate;
