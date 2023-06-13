import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Loader from "../../Containers/Loader";
import "./style.css";
import Navbar from "../../Containers/Navbar";
import { max } from "moment";
import { getJob, getJobs } from "../../services/api";

const ShowJobPage = () => {
  const navigate = useNavigate();
  const [failError, setFailError] = useState(false);
  const [loading, isLoading] = useState(false);
  const [error, setError] = useState(false);
  const { state } = useLocation();
  const { id } = state;

  const [title, setTitle] = useState("");
  const [mininum, setMinimum] = useState();
  const [maximum, setMaximum] = useState();
  const [description, setDescription] = useState("");
  const [requirements, setRequirements] = useState("");
  const [type, setType] = useState();

  const loadData = async (query = "") => {
    try {
      const companyId = localStorage.getItem("id");
      setType(localStorage.getItem("type"));
      const response = await getJob(id);
      console.log(response.data);
      setTitle(response.data.title);
      setDescription(response.data.description);
      setRequirements(response.data.requirements);
      setMinimum(response.data.minimumSalary);
      setMaximum(response.data.maximumSalary);
    } catch (err) {
      console.error(err);
      //localStorage.clear();
      //navigate("/login");
    }
  };
  useEffect(() => {
    (async () => await loadData())();
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="main-showjob">
      <Navbar />
      <h1 className="show-job-title">Job Page</h1>

      <div id="boxshowjob">
        <div>
          <h1 id="input-showjobpage">{title}</h1>
        </div>

        <br></br>

        <div id="label-showjob">
          <label>Faixa Salarial</label>
        </div>

        <div id="divjobcreatesal">
          <label id="sal-showjobpage">
            R$ {mininum} - {maximum}
          </label>
        </div>

        <br></br>
        <br></br>

        <label id="label-showjob">
          Descrição das Funções a serem desempenhadas
        </label>
        <div id="descricao-showjob">
          <p>{description}</p>
        </div>

        <br></br>

        <label id="label-showjob">Requisitos para a Vaga</label>
        <div id="descricao-showjob">
          <p>{requirements}</p>
        </div>

        {type === "users" && (
          <button
            id="botaocriarjob"
            onClick={() => {
              navigate("/company");
            }}
          >
            Aplicar
          </button>
        )}
      </div>
    </div>
  );
};

export default ShowJobPage;
