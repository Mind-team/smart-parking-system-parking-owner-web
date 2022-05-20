import { useParams } from "react-router-dom";
import { useEffect } from "react";
import React, { useState } from "react";
import styles from "./infoParkings.page.module.css";
import { CreateCarNumbers } from "../../components/CreateCarNumbers.component.js";
function encodingToB64(str) {
  return window.btoa(unescape(encodeURIComponent(str)));
}

export const InfoParkingsPage = () => {
  const [dataTitle, setdataTitle] = useState("");
  const [dataData, setdataData] = useState("");
  const id = useParams();
  // const id = 972269a0-b317-4318-9c54-4652ce57d419;

  useEffect(() => {
    // console.log(id);
    const path = "http://5.53.124.242:5050";

    async function getResponse() {
      const response = await fetch(
        `${path}/api/v1/parking-owner/parking/${id.id}`,
        {
          headers: {
            Authorization:
              "Auth " +
              encodingToB64(
                localStorage.getItem("login") +
                  ":" +
                  localStorage.getItem("password")
              ),
          },
        }
      );
      // const data = await response.json();
      setdataData(await response.json());
      // localStorage.setItem("title", data.title);
      setdataTitle(dataData.title);
      // let numbers = "";
      // dataData.activeParkingProcess.map((item) => {
      //   // numbers += " " + item.transport.plate;
      //   setdataCarNumbers(item.transport.plate);
      // });
      // localStorage.setItem("numbers", numbers);

      // console.log(data.activeParkingProcess[0].transport.plate);
    }

    getResponse();
  });

  // const kek =
  //   "А999АА А999АА А999АА А999АА А999АА А999АА А999АА А999АА А999АА А999АА А999АА А999АА  А999АА А999АА А999АА А999АА А999АА";
  // console.log(dataData);
  return (
    <div>
      <div className={styles.title}>{dataTitle}</div>
      <div className={styles.now}>Сейчас на паркинге</div>
      {dataData.activeParkingProcess.map((item, id) => {
        return <CreateCarNumbers key={id} numbers={item.transport.plate} />;
      })}
      {/* <div className={styles.carNumbers}>{dataCarNumbers}</div> */}
    </div>
  );
};
