import React, { useState, useContext } from "react";

import { useNavigate } from "react-router-dom";
import Loader from "../../Containers/Loader";
import "./styles.css";
import Navbar from "../../Containers/Navbar";
import { createJob } from "../../services/api";

const CreateJobPage = () => {
  const navigate = useNavigate();
  const [failError, setFailError] = useState(false);
  const [loading, isLoading] = useState(false);
  const [error, setError] = useState(false);

  const [title, setTitle] = useState("");
  const [mininum, setMinimum] = useState();
  const [maximum, setMaximum] = useState();
  const [description, setDescription] = useState("");
  const [requirements, setRequirements] = useState("");

  if (loading) {
    return <Loader />;
  }

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleMininum = (event) => {
    setMinimum(event.target.value);
  };
  const handleMaximum = (event) => {
    setMaximum(event.target.value);
  };
  const handleDescription = (event) => {
    setDescription(event.target.value);
  };
  const handleRequirements = (event) => {
    setRequirements(event.target.value);
  };
  const handleCreateJob = async (event) => {
    await createJob(
      title,
      localStorage.getItem("id"),
      description,
      requirements,
      mininum,
      maximum
    );
  };

  return (
    <div className="bodycreatejob">
      <Navbar />
      <h1 className="create-job-title"> Create Job Page</h1>

      <div id="boxcriatreino">
        <div>
          <input
            type="text"
            placeholder="Titulo Vaga"
            id="input-trainingpage"
            onChange={handleTitle}
          />
        </div>

        <div id="label-jobcreate">
          <label>Faixa Salarial</label>
        </div>

        <div id="divjobcreatesal">
          <form action="">
            R${" "}
            <input
              onChange={handleMininum}
              type="number"
              placeholder="Minimo"
              name="quantity"
              step="0.01"
              min="0.01"
              id="input-jobpagesal"
            />
            R${" "}
            <input
              onChange={handleMaximum}
              type="number"
              step="0.01"
              min="0.01"
              placeholder="Maximo"
              id="input-jobpagesal"
            />
          </form>
        </div>

        <br></br>
        <br></br>

        <label id="label-jobcreate">
          Descrição das Funções a serem desempenhadas
        </label>
        <div>
          <textarea
            name="descricaojobcreate"
            id="textarea-jobcreate"
            cols="30"
            rows="10"
            onChange={handleDescription}
          >
            {" "}
          </textarea>
        </div>

        <br></br>

        <label id="label-jobcreate">Requisitos para a Vaga</label>
        <div>
          <textarea
            onChange={handleRequirements}
            name="requisitosjobcreate"
            id="textarea-jobcreate"
            cols="30"
            rows="10"
          >
            {" "}
          </textarea>
        </div>

        <button
          id="botaocriarjob"
          onClick={() => {
            handleCreateJob();
            navigate("/company");
          }}
        >
          Criar Job
        </button>
      </div>
    </div>
  );
};

export default CreateJobPage;
