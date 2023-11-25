import React from "react";
import styles from "./Register.module.scss";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../../Api";
import Input from "../../../UI/Input/Input";
import Button from "../../../UI/button/Button";

function Register() {
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    api
      .post("/api/Auth/Register", { userName, firstName, password })
      .then((res) => {
        const data = res.data;
        if (data.status !== 1) {
          setErrorMsg(data.errors[0]);
          return;
        }

        navigate("/auth/login");
      })
      .catch((err) => {
        setErrorMsg(err);
      });
  };

  return (
    <form className={styles.container} onSubmit={handleLogin}>
      <div className={styles.wrapper}>
        <div id={styles.firstNameInput} className={styles.input_wrapper}>
          <Input onChange={handleFirstNameChange} />
          <p>სახელი</p>
        </div>
        <div id={styles.usernameInput} className={styles.input_wrapper}>
          <Input onChange={handleUserNameChange} />
          <p>მომხმარებელი</p>
        </div>
        <div id={styles.passwordInput} className={styles.input_wrapper}>
          <Input type="password" onChange={handlePasswordChange} />
          <p>პაროლი</p>
        </div>
        {errorMsg.length > 0 && (
          <div className={styles.error_wrapper}>
            <p>{errorMsg}</p>
          </div>
        )}
        <div className={styles.button_wrapper}>
          <Button type="submit" title="რეგისტრაცია" />
        </div>
        <Link id={styles.registerLink} to="/auth/login">
          შესვლა
        </Link>
      </div>
    </form>
  );
}

export default Register;
