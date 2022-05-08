import { useLocation } from "react-router-dom";

export const ParkingsPage = () => {
  const location = useLocation();
  // location.state содержит ответ от предыдущего запроса, используй его
  console.log(location.state);
  return <div>Parkings Page</div>;
};
