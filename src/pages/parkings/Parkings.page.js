import { useLocation } from "react-router-dom";
import { CreateParkingsInfo } from "../../components/CreateParkingsInfo.component";
import styles from "./Parkings.page.module.css";

export const ParkingsPage = () => {
  const location = useLocation();
  console.log(location.state);

  // const test = [
  //   { title: "Привет", activeParkingProcessIds: [1, 2, 3] },
  //   { title: "Привет", activeParkingProcessIds: [1, 2, 3] },
  //   { title: "Привет", activeParkingProcessIds: [1, 2, 3] },
  //   { title: "Привет", activeParkingProcessIds: [1, 2, 3] },
  //   { title: "Привет", activeParkingProcessIds: [1, 2, 3] },
  //   { title: "Привет", activeParkingProcessIds: [1, 2, 3] },
  //   { title: "Привет", activeParkingProcessIds: [1, 2, 3] },
  //   { title: "Привет", activeParkingProcessIds: [1, 2, 3] },
  //   { title: "Привет", activeParkingProcessIds: [1, 2, 3] },
  //   { title: "Привет", activeParkingProcessIds: [1, 2, 3] },
  //   { title: "Привет", activeParkingProcessIds: [1, 2, 3] },
  //   { title: "Привет", activeParkingProcessIds: [1, 2, 3] },
  //   { title: "Привет", activeParkingProcessIds: [1, 2, 3] },
  //   { title: "Привет", activeParkingProcessIds: [1, 2, 3] },
  // ];

  return (
    <div className={styles.container}>
      {location.state.map((item, id) => {
        return (
          <CreateParkingsInfo
            key={id}
            title={item.title}
            busy={item.activeParkingProcessIds.length}
          />
        );
      })}
    </div>
  );
};
