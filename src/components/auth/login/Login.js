import React, { useState } from "react";
import styles from "./Login.module.scss";
import Input from "../../../UI/Input/Input";
import Button from "../../../UI/button/Button";
import { api } from "../../../Api";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    api
      .post("/api/Auth/Login", { userName, password })
      .then((res) => {
        const data = res.data;
        const payload = data.payload;
        if (data.status !== 1) {
          setErrorMsg(data.errors[0]);
          return;
        }

        const token = payload.token;
        Cookies.set("token", token);
        navigate("/");
      })
      .catch((err) => {
        setErrorMsg(err);
      });
  };

  return (
    <form className={styles.container} onSubmit={handleLogin}>
      <div className={styles.wrapper}>
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
          <Button type="submit" title="შესვლა" />
        </div>
        <Link id={styles.registerLink} to="/auth/register">
          რეგისტრაცია
        </Link>
      </div>
    </form>
  );
}

export default Login;
