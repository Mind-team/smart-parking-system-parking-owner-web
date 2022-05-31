import { useParams } from "react-router-dom";
import { useEffect } from "react";
import React, { useState } from "react";
import styles from "./infoParkings.page.module.css";
import { CreateCarNumbers } from "../../components/CreateCarNumbers.component.js";
import { path } from "../../utils/path";
import { LoaderWrapper, useFormatter } from "sps-ui";

export const InfoParkingsPage = () => {
  const formatter = useFormatter();
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
    }
    getResponse();
  }, []);

  return (
    <div>
      <LoaderWrapper isLoading={isLoading}>
        <div className={styles.title}>{dataTitle}</div>
        <div className={styles.now}>Сейчас на паркинге</div>
        {arrayParkingProcess.map((item, id) => {
          return (
            <CreateCarNumbers
              key={id}
              numbers={item.transport.plate}
              click={() => {
                const timeOfEntry = item.time.entry;
                setTime(
                  formatter("date", timeOfEntry) +
                    " " +
                    formatter("time", timeOfEntry)
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
      </LoaderWrapper>
    </div>
  );
};
