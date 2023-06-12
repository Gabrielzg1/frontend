import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import Loader from "../../Containers/Loader";
import "./styles.css";
import Navbar from "../../Containers/Navbar";
import {
  createTraining,
  getMentor,
  getMentors,
  updateMentor,
} from "../../services/api";

const CreateTrainingPage = () => {
  const navigate = useNavigate();
  const [failError, setFailError] = useState(false);
  const [loading, isLoading] = useState(false);
  const [error, setError] = useState(false);

  //Preenchendo os campos para criar o treinamento
  const [name, setName] = useState();
  const [workload, setWorkload] = useState();
  const [initialInscriptionDate, setinitialInscriptionDate] = useState();
  const [finalInscriptionDate, setFinalInscriptionDate] = useState();
  const [initialTrainingDate, setinitialTrainingDate] = useState();
  const [finalTrainingDate, setFinalTrainingDate] = useState();
  const [maximumAmount, setMaximumAmount] = useState();
  const [minimumAmount, setMinimumAmount] = useState();
  const [description, setDescription] = useState();
  const [selectedMentor, setSelectedMentor] = useState("");
  const [mentors, setMentors] = useState([]);

  const loadData = async (query = "") => {
    try {
      const mentorsResponse = await getMentors();
      setMentors(mentorsResponse.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    (async () => await loadData())();
  }, []);

  if (loading) {
    return <Loader />;
  }

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleWorload = (event) => {
    setWorkload(event.target.value);
  };
  const handleminimumAmount = (event) => {
    setMinimumAmount(event.target.value);
  };
  const handlemaximumAmount = (event) => {
    setMaximumAmount(event.target.value);
  };

  const handleinitialInscriptionDate = (event) => {
    setinitialInscriptionDate(event.target.value);
  };

  const hancdlefinalInscriptionDate = (event) => {
    setFinalInscriptionDate(event.target.value);
  };
  const handleinitialTrainingDate = (event) => {
    setinitialTrainingDate(event.target.value);
  };

  const handlefinalTrainingDate = (event) => {
    setFinalTrainingDate(event.target.value);
  };
  const handleDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleSelectMentor = (mentorId) => {
    setSelectedMentor(mentorId);
  };

  const handleMentor = async (trainingId) => {
    updateMentor(selectedMentor, trainingId, name);
  };

  const createtraining = async () => {
    try {
      const response = await createTraining(
        name,
        initialInscriptionDate,
        finalInscriptionDate,
        initialTrainingDate,
        finalTrainingDate,
        description,
        workload,
        minimumAmount,
        maximumAmount,
        selectedMentor
      );
      handleMentor(response.data._id);
      navigate("/createquiz", { state: { id: response.data._id } });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="bodytrainingcreate">
      <Navbar />
      <h1 className="create-training-title">Criar treinamento</h1>

      <div id="boxcriatreino">
        {error === true && <p className="error">Valores Indevidos</p>}

        <div>
          <input
            value={name}
            type="text"
            placeholder="Nome Comercial"
            id="input-trainingpage"
            onChange={handleName}
          />
          <input
            type="text"
            placeholder="Carga Horaria (somente o número em horas)"
            id="input-trainingpagehorario"
            onChange={handleWorload}
          />
        </div>

        <label id="label">Data Inscrição</label>

        <div id="divinscricao">
          <label id="label">Inicio</label>
          <input
            type="date"
            placeholder="Inicio da Inscrição"
            id="input-trainingpagedata"
            onChange={handleinitialInscriptionDate}
          />

          <label id="label">Fim</label>

          <input
            type="date"
            placeholder="Fim da Inscrição"
            id="input-trainingpagedata"
            onChange={hancdlefinalInscriptionDate}
          />

          <input
            type="text"
            placeholder="Numero minimo de Participantes"
            id="input-trainingpageparti"
            onChange={handleminimumAmount}
          />
        </div>

        <label id="label">Data Treinamento</label>

        <div id="divtreinamento">
          <label id="label">Inicio</label>
          <input
            type="date"
            placeholder="Inicio do Treinamento"
            id="input-trainingpagedata"
            onChange={handleinitialTrainingDate}
          />

          <label id="label">Fim</label>
          <input
            type="date"
            placeholder="Fim do Treinamento"
            id="input-trainingpagedata"
            onChange={handlefinalTrainingDate}
          />

          <input
            type="text"
            placeholder="Numero maximo de Participantes"
            id="input-trainingpageparti"
            onChange={handlemaximumAmount}
          />
        </div>
        <br></br>
        <br></br>

        <label id="label">Descrição</label>

        <div>
          <textarea
            name=""
            cols="30"
            rows="10"
            id="descricao-training"
            onChange={handleDescription}
          >
            {" "}
          </textarea>
        </div>
        <h4>Selecione um Mentor</h4>
        {mentors.map((mentor) => (
          <div key={mentor._id}>
            <label>
              <input
                type="radio"
                value={mentor._id}
                checked={selectedMentor === mentor._id}
                onChange={() => handleSelectMentor(mentor._id)}
              />
              {mentor.username}
            </label>
          </div>
        ))}
        <br />
        <br />
        <input
          type="button"
          value="Criar Treinamento"
          id="botaotraining"
          onClick={createtraining}
        />
      </div>
    </div>
  );
};

export default CreateTrainingPage;
