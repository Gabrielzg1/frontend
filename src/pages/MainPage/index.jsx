import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const MainPage = () => {
  const [dataError, setDataError] = useState(false);
  const loadData = async () => {
    try {
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
    <div className="main-body">
      <h1 className="main-title">Jobtron</h1>
      <button className="main-button" onClick={() => navigate("/login")}>
        Ir para a página de login
      </button>
    </div>
  );
};
export default MainPage;
