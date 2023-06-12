import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTrainings } from "../../services/api";
import Navbar from "../../Containers/Navbar";
import "./styles.css";

const HomePage = () => {
  const [dataError, setDataError] = useState(false);
  const [trainings, setTrainings] = useState([]);
  const loadData = async () => {
    try {
      const response = await getTrainings();
      setTrainings(response.data);
      console.log(response.data);
    } catch (err) {
      setDataError(true);
      console.error(err);
    }
  };
  useEffect(() => {
    (async () => await loadData())();
  }, []);

  const navigate = useNavigate();
  return (
    <div className="container">
      <Navbar />
      <div className="title">Feed de Treinamento</div>
      {trainings.map((training) => (
        <div className="training-item" key={training._id}>
          <input
            type="button"
            className="home-training-title"
            value={training.name}
            onClick={() =>
              navigate("/training", { state: { id: training._id } })
            }
          />
        </div>
      ))}
    </div>
  );
};
export default HomePage;
