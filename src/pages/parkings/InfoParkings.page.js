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
  const [time, setTime] = useState("");
  const [payment, setPayment] = useState("");

  useEffect(() => {
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
      console.log(data);
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
          return (
            <CreateCarNumbers
              key={id}
              numbers={item.transport.plate}
              click={() => {
                const timeOfEntry = item.time.entry;
                const year = timeOfEntry.substring(0, 4);
                const month = timeOfEntry.substring(5, 7);
                const day = timeOfEntry.substring(8, 10);
                const hours = timeOfEntry.substring(11, 13);
                const minutes = timeOfEntry.substring(14, 16);
                setTime(
                  hours + ":" + minutes + " " + day + "." + month + "." + year
                );
                setPayment(Math.ceil(item.payment.value));
              }}
            />
          );
        })}
        {time && <div className={styles.time}>Заехал(а) в {time}</div>}
        {payment && (
          <div className={styles.payment}>
            Сумма на текущий момент: {payment} рублей
          </div>
        )}
      </div>
    );
  }
};
