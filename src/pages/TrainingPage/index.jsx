import React, { useState, useEffect } from "react";
import {
  addStudents,
  cancelApplied,
  getTraining,
  getUser,
  nextStage,
  removeStudent,
} from "../../services/api";
import { useNavigate, useLocation } from "react-router-dom";
import moment from "moment";
import Loader from "../../Containers/Loader";
import "./styles.css";

import Navbar from "../../Containers/Navbar";

const TrainingPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { id } = state;
  const [loading, isLoading] = useState(false);
  const [error, setError] = useState(false);
  const [name, setname] = useState("");
  const [workload, setWorkload] = useState();
  const [initialInscriptionDate, setinitialInscriptionDate] = useState();
  const [finalInscriptionDate, setFinalInscriptionDate] = useState();
  const [initialTrainingDate, setinitialTrainingDate] = useState();
  const [finalTrainingDate, setFinalTrainingDate] = useState();
  const [maximumAmount, setMaximumAmount] = useState();
  const [minimumAmount, setMinimumAmount] = useState();
  const [description, setDescription] = useState();
  const [stage, setStage] = useState("");
  const [user, isUser] = useState(false);
  const [subscribed, isSubscribed] = useState(false);
  const [denied, setDenied] = useState(false);

  const loadData = async (query = "") => {
    try {
      const response = await getTraining(id);
      if (localStorage.getItem("type") === "users") {
        isUser(true);
      }
      setname(response.data.name);
      setWorkload(response.data.workload);
      setinitialInscriptionDate(
        moment(response.data.initialInscriptionDate).format("DD/MM/YYYY")
      );
      setFinalInscriptionDate(
        moment(response.data.finalInscriptionDate).format("DD/MM/YYYY")
      );
      setinitialTrainingDate(
        moment(response.data.initialTrainingDate).format("DD/MM/YYYY")
      );
      setFinalTrainingDate(
        moment(response.data.finalTrainingDate).format("DD/MM/YYYY")
      );
      setStage(response.data.stage);
      setMaximumAmount(response.data.maximumAmount);
      setMinimumAmount(response.data.minimumAmount);
      setDescription(response.data.description);
      if (response.data.students.indexOf(localStorage.getItem("id")) === -1) {
        isSubscribed(true);
      }

      const userResponse = await getUser(localStorage.getItem("id"));
      console.log(id);
      console.log(userResponse.data.disapprove);
      if (userResponse.data.disapprove.some((item) => item.trainingId === id))
        setDenied(true);
    } catch (err) {}
  };

  const handleCancelApplied = async () => {
    await cancelApplied(localStorage.getItem("id"), id, name);
  };
  useEffect(() => {
    (async () => await loadData())();
  }, []);

  if (loading) {
    return <Loader />;
  }

  const doQuiz = () => {
    navigate("/quiz", { state: { id: id } });
  };

  if (denied)
    return (
      <div className="denied-container">
        <h1>Você já foi recusado para o treinamento</h1>
        <button className="button" onClick={() => navigate("/users")}>
          Clique aqui para voltar ao seu perfil
        </button>
      </div>
    );
  return (
    <div>
      <Navbar />
      <h1 className="trainingtitle">Treinamento</h1>

      <div className="training-container">
        <h2>Nome do treinamento: {name}</h2>
        <h3>Descricao: {description}</h3>
        <h3>Carga Horária: {workload}</h3>
        <h3>Data Inicial Para inscrição: {initialInscriptionDate}</h3>
        <h3>Data Final Para inscrição: {finalInscriptionDate}</h3>
        <h3>Data Inicial do treinamento : {initialTrainingDate}</h3>
        <h3>Data Final do Treinamento: {finalTrainingDate}</h3>
        <h3>Quantidade mínima de Usuários: {minimumAmount}</h3>
        <h3>Quantidade máxima de Usuários: {maximumAmount}</h3>
        <h3>Etapa: {stage}</h3>

        {subscribed && user && (
          <input
            type="button"
            value="Inscrever-se"
            className="style-button"
            onClick={async () => {
              try {
                isSubscribed(false);
                doQuiz();
              } catch (error) {
                setError(true);
              }
            }}
          />
        )}
        {!subscribed && user && (
          <input
            type="button"
            value="desinscrever-se"
            className="style-button"
            onClick={async () => {
              try {
                isSubscribed(true);
                await removeStudent(localStorage.getItem("id"), id);
                await handleCancelApplied();
              } catch (error) {
                setError(true);
              }
            }}
          />
        )}

        {localStorage.getItem("type") === "admins" && (
          <input
            type="button"
            className="style-button"
            value="Ir para o próximo Case"
            onClick={async () => {
              const response = await nextStage(id);

              if (stage == "Treinamento Finalizado") {
                alert("Treinamento Finalizado");
              }
              setStage(response.data.stage);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default TrainingPage;
