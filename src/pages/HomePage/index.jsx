import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUsers } from "../../services/api";
import Navbar from "../../Containers/Navbar";
import "./styles.css";

const HomePage = () => {
  const [dataError, setDataError] = useState(false);
  const [trainings, setTrainings] = useState([
    { name: "Treinamento 1" },
    { name: "Treinamento 2" },
    { name: "Treinamento 3" },
    { name: "Treinamento 4" },
    { name: "Treinamento 5" },
    { name: "Treinamento 6" },
  ]);
  const loadData = async () => {
    try {
      const response = await getUsers();
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
      <div className="title">Feed de Treinamento</div>
      {trainings.map((training, index) => (
        <div className="training-item" key={index}>
          <input
            type="button"
            className="training-title"
            value={training.name}
            onClick={() => navigate("/training")}
          />
        </div>
      ))}
    </div>
  );
};
export default HomePage;
