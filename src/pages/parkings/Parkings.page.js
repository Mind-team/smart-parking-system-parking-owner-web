import React from "react";
import { useLocation } from "react-router-dom";
import { CreateParkingsInfo } from "../../components/CreateParkingsInfo.component";
import styles from "./Parkings.page.module.css";
import { useNavigate } from "react-router-dom";

export const ParkingsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      {location.state.map((item, id) => {
        return (
          <CreateParkingsInfo
            key={id}
            title={item.title}
            busy={item.activeParkingProcessIds.length}
            click={() => navigate(`/parkings/${item.id}`)}
          />
        );
      })}
    </div>
  );
};
