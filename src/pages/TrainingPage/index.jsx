import React, { useState, useContext, useEffect } from "react";
import { getTraining, getTrainings, register } from "../../services/api";
import { useNavigate, useLocation } from "react-router-dom";
import Loader from "../../Containers/Loader";
import "./styles.css";
import Buttons from "../../Containers/Buttons/index";
import Navbar from "../../Containers/Navbar";

const TrainingPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { id } = state;
  const [failError, setFailError] = useState(false);
  const [loading, isLoading] = useState(false);
  const [error, setError] = useState(false);

  const loadData = async (query = "") => {
    try {
      const response = await getTraining(id);
      console.log(response.data);
    } catch (err) {}
  };
  useEffect(() => {
    (async () => await loadData())();
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <div>
      <Navbar />
      <h1 className="training-title">Training Page</h1>
    </div>
  );
};

export default TrainingPage;
