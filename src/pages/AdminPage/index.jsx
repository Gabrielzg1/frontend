import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../Containers/Loader";
import "./styles.css";

import Navbar from "../../Containers/Navbar";

const AdminPage = () => {
  const navigate = useNavigate();
  const [failError, setFailError] = useState(false);
  const [loading, isLoading] = useState(false);
  const [error, setError] = useState(false);
  const loadData = async (query = "") => {
    try {
      const id = localStorage.getItem("id");
      const type = localStorage.getItem("type");
      if (id === null || type !== "admins") {
        navigate("/login");
        localStorage.clear();
      }
    } catch (err) {
      console.error(err);
      navigate("/login");
    }
  };
  useEffect(() => {
    (async () => await loadData())();
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <div id="body-admin">
      <div>
        <Navbar />
        <h1>Admin Page</h1>
        <button
          onClick={() => {
            navigate("/createtraining");
          }}
        >
          Criar Treinamento
        </button>
      </div>
    </div>
  );
};

export default AdminPage;
