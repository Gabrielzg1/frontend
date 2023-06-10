import React, { useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Loader from "../../Containers/Loader";
import "./style.css";
import Navbar from "../../Containers/Navbar";

const ShowJobPage = () => {
  const navigate = useNavigate();
  const [failError, setFailError] = useState(false);
  const [loading, isLoading] = useState(false);
  const [error, setError] = useState(false);

  const [name, setName] = useState(["AA"]);
  const [empresa,setEmpresa] = useState(["Curso1"]);
  const [salminimo, setSalminimo] = useState(["Vaga2"]);
  const [salmaximo, setSalmaximo] = useState(["Vaga2"]);
  const [descricao, setDescricao] = useState(["Vaga2"]);
  const [requisitos, setRequisitos] = useState(["Vaga2"]);



  if (loading) {
    return <Loader />;
  }
  return (
    <div>
      <Navbar />

      <div>
        <h1>Job Page</h1>
      </div>


    </div>
  );
};

export default ShowJobPage;