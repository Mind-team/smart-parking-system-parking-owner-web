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
      // const content = await response.json();
      // let key;

      // if (response.status === 200) {
      //   // eslint-disable-next-line guard-for-in
      //   for (key in content) {
      //     return <h2>${content[key].title}</h2>;
      //   }
      // } else {
      //   // alert("Неверный логин или пароль!");
      // }
      //   function checkError() {
      //   if (response.status != 200) {
      //     return <h2>Ошибка</h2>;
      //   }
      // }
      if (response.status != 200) {
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
      {/* {checkError} */}
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
