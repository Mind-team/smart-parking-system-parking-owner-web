import React, { useState } from "react";
import "./Login.page.css";

function encodingToB64(str) {
  return window.btoa(unescape(encodeURIComponent(str)));
}

export const LoginPage = () => {
  const checkResponse = function () {
    const username = currentLogin;
    const password = currentPassword;
    const path = "http://5.53.124.242:5050";

    async function getResponse() {
      const response = await fetch(
        `${path}/api/v1/parking-owner/parking-list`,
        {
          headers: {
            Authorization: "Auth " + encodingToB64(username + ":" + password),
          },
        }
      );

      const handleInput = () => {
        if (response.status != 200) {
          setError(true);
        } else {
          setError(false);
        }
      };
      handleInput();
    }

    getResponse();
  };

  const [currentLogin, setCurrentLogin] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [isError, setError] = useState(false);

  const handleChangeLogin = (event) => {
    setCurrentLogin(event.target.value);
  };

  const handleChangePassword = (event) => {
    setCurrentPassword(event.target.value);
  };

  return (
    <div>
      Login Page
      <div>
        <input
          placeholder="Логин"
          value={currentLogin}
          onChange={handleChangeLogin}
        ></input>
        <input
          placeholder="Пароль"
          value={currentPassword}
          onChange={handleChangePassword}
          type="password"
        ></input>
        <button onClick={checkResponse}>Войти</button>
        {isError && <div className="error">Неправильный логин или пароль!</div>}
      </div>
    </div>
  );
};
