import { useParams } from "react-router-dom";
import { useEffect } from "react";
import styles from "./infoParkings.page.module.css";
function encodingToB64(str) {
  return window.btoa(unescape(encodeURIComponent(str)));
}

export const InfoParkingsPage = () => {
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
      const data = await response.json();
      localStorage.setItem("title", data.title);
      let numbers = "";
      data.activeParkingProcess.map((item) => {
        numbers += " " + item.transport.plate;
      });
      localStorage.setItem("numbers", numbers);

      // console.log(data.activeParkingProcess[0].transport.plate);
    }

    getResponse();
  });

  // const kek =
  //   "А999АА А999АА А999АА А999АА А999АА А999АА А999АА А999АА А999АА А999АА А999АА А999АА  А999АА А999АА А999АА А999АА А999АА";
  return (
    <div>
      <div className={styles.title}>{localStorage.getItem("title")}</div>
      <div className={styles.now}>Сейчас на паркинге</div>
      <div className={styles.carNumbers}>{localStorage.getItem("numbers")}</div>
    </div>
  );
};
