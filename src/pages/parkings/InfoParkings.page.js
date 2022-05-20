import { useParams } from "react-router-dom";
import { useEffect } from "react";
import React, { useState } from "react";
import styles from "./infoParkings.page.module.css";
import { CreateCarNumbers } from "../../components/CreateCarNumbers.component.js";
import { path } from "../../utils/path";

export const InfoParkingsPage = () => {
  const [dataTitle, setdataTitle] = useState("");
  const [isLoading, setLoading] = useState(true);
  const [arrayParkingProcess, setArrayParkingProcess] = useState([]);
  const id = useParams();

  useEffect(() => {
    console.log(id);

    async function getResponse() {
      const response = await fetch(
        `${path}/api/v1/parking-owner/parking/${id.id}`,
        {
          headers: {
            Authorization: "Auth " + localStorage.getItem("token"),
          },
        }
      );
      const data = await response.json();
      setLoading(false);
      setdataTitle(data.title);
      setArrayParkingProcess(data.activeParkingProcess);
    }

    getResponse();
  }, []);

  if (isLoading) {
    return <div>Загрузка</div>;
  } else {
    return (
      <div>
        <div className={styles.title}>{dataTitle}</div>
        <div className={styles.now}>Сейчас на паркинге</div>
        {arrayParkingProcess.map((item, id) => {
          return <CreateCarNumbers key={id} numbers={item.transport.plate} />;
        })}
      </div>
    );
  }
};
