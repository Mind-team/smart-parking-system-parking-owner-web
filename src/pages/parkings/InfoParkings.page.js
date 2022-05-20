import { useParams } from "react-router-dom";
import { useEffect } from "react";
import React, { useState } from "react";
import styles from "./infoParkings.page.module.css";
import { CreateCarNumbers } from "../../components/CreateCarNumbers.component.js";
import { encodingToB64 } from "../../utils/encodingToB64.js";

encodingToB64();

export const InfoParkingsPage = () => {
  const [dataTitle, setdataTitle] = useState("");
  const [isLoading, setLoading] = useState(true);
  const [array, setArray] = useState([]);
  const id = useParams();

  useEffect(() => {
    console.log(id);
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
      const data = await response.json();
      setLoading(false);
      setdataTitle(data.title);
      setArray(data.activeParkingProcess);
    }

    getResponse();
  }, []);

  // const kek =
  //   "А999АА А999АА А999АА А999АА А999АА А999АА А999АА А999АА А999АА А999АА А999АА А999АА  А999АА А999АА А999АА А999АА А999АА";
  // console.log(dataData);
  // const arrayTest = [
  //   { plate: "А999УУ" },
  //   { plate: "А999УУ" },
  //   { plate: "А999УУ" },
  //   { plate: "А999УУ" },
  //   { plate: "А999УУ" },
  //   { plate: "А999УУ" },
  //   { plate: "А999УУ" },
  //   { plate: "А999УУ" },
  //   { plate: "А999УУ" },
  //   { plate: "А999УУ" },
  //   { plate: "А999УУ" },
  //   { plate: "А999УУ" },
  //   { plate: "А999УУ" },
  //   { plate: "А999УУ" },
  //   { plate: "А999УУ" },
  //   { plate: "А999УУ" },
  //   { plate: "А999УУ" },
  //   { plate: "А999УУ" },
  //   { plate: "А999УУ" },
  //   { plate: "А999УУ" },
  //   { plate: "А999УУ" },
  //   { plate: "А999УУ" },
  //   { plate: "А999УУ" },
  //   { plate: "А999УУ" },
  //   { plate: "А999УУ" },
  //   { plate: "А999УУ" },
  //   { plate: "А999УУ" },
  //   { plate: "А999УУ" },
  //   { plate: "А999УУ" },
  //   { plate: "А999УУ" },
  //   { plate: "А999УУ" },
  //   { plate: "А999УУ" },
  //   { plate: "А999УУ" },
  //   { plate: "А999УУ" },
  //   { plate: "А999УУ" },
  //   { plate: "А999УУ" },
  //   { plate: "А999УУ" },
  //   { plate: "А999УУ" },
  //   { plate: "А999УУ" },
  //   { plate: "А999УУ" },
  //   { plate: "А999УУ" },
  //   { plate: "А999УУ" },
  //   { plate: "А999УУ" },
  //   { plate: "А999УУ" },
  //   { plate: "А999УУ" },
  //   { plate: "А999УУ" },
  //   { plate: "А999УУ" },
  //   { plate: "А999УУ" },
  // ];
  if (isLoading) {
    return <div>Загрузка</div>;
  } else {
    return (
      <div>
        <div className={styles.title}>{dataTitle}</div>
        <div className={styles.now}>Сейчас на паркинге</div>
        {array.map((item, id) => {
          return <CreateCarNumbers key={id} numbers={item.transport.plate} />;
        })}
      </div>
    );
  }
};
