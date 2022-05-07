import React, { useState } from "react";
import "./Login.page.css";

export const LoginPage = () => {
  const checkResponse = function () {
    const username = currentLogin;
    const password = currentPassword;
    const path = "http://5.53.124.242:5050";
    // eslint-disable-next-line camelcase
    function utf8_to_b64(str) {
      return window.btoa(unescape(encodeURIComponent(str)));
    }

    async function getResponse() {
      const response = await fetch(
        `${path}/api/v1/parking-owner/parking-list`,
        {
          headers: {
            Authorization: "Auth " + utf8_to_b64(username + ":" + password),
          },
        }
      );
      const content = await response.json();
      let key;

      if (response.status === 200) {
        // eslint-disable-next-line guard-for-in
        for (key in content) {
          console.log(content[key].title);
        }
      } else {
        alert("Неверный логин или пароль!");
      }
    }

    getResponse();
  };

  const [currentLogin, setCurrentLogin] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");

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
      </div>
    </div>
  );
};
