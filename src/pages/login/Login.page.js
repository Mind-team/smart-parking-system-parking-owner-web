import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.page.module.css";

function encodingToB64(str) {
  return window.btoa(unescape(encodeURIComponent(str)));
}

export const LoginPage = () => {
  const navigate = useNavigate();
  const [currentLogin, setCurrentLogin] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [isError, setError] = useState(false);

  const checkResponse = function () {
    const path = "http://5.53.124.242:5050";

    async function getResponse() {
      const response = await fetch(
        `${path}/api/v1/parking-owner/parking-list`,
        {
          headers: {
            Authorization:
              "Auth " + encodingToB64(currentLogin + ":" + currentPassword),
          },
        }
      );
      const data = await response.json();

      if (response.ok) {
        navigate("/parkings", { state: data });
      } else {
        setError(true);
      }
    }

    getResponse();
  };

  const handleChangeLogin = (event) => {
    setCurrentLogin(event.target.value);
  };

  const handleChangePassword = (event) => {
    setCurrentPassword(event.target.value);
  };

  return (
    <div>
      <input
        placeholder="Логин"
        value={currentLogin}
        onChange={handleChangeLogin}
      />
      <input
        placeholder="Пароль"
        value={currentPassword}
        onChange={handleChangePassword}
        type="password"
      />
      <button className={styles.checkResponse} onClick={checkResponse}>
        Войти
      </button>
      {isError && (
        <div className={styles.error}>Неправильный логин или пароль!</div>
      )}
    </div>
  );
};
