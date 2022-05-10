import { useLocation } from "react-router-dom";
import { CreateParkingsInfo } from "../../components/parkings";
import "./Parkings.css";

export const ParkingsPage = () => {
  const location = useLocation();
  console.log(location.state);

  return (
    <div className="container">
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
