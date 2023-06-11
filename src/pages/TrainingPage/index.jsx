import React, { useState, useContext, useEffect } from "react";
import { getTraining, getTrainings, register } from "../../services/api";
import { useNavigate, useLocation } from "react-router-dom";
import moment from "moment";
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
  const [name, setname] = useState("");
  const [workload, setWorkload] = useState();
  const [initialInscriptionDate, setinitialInscriptionDate] = useState();
  const [finalInscriptionDate, setFinalInscriptionDate] = useState();
  const [initialTrainingDate, setinitialTrainingDate] = useState();
  const [finalTrainingDate, setFinalTrainingDate] = useState();
  const [maximumAmount, setMaximumAmount] = useState();
  const [minimumAmount, setMinimumAmount] = useState();
  const [description, setDescription] = useState();
  const [students, setStudents] = useState([]);
  const [userId, setUserId] = useState();
  const [quiz, setQuiz] = useState(true);
  const [nextCase, setNextCase] = useState(false);

  const loadData = async (query = "") => {
    try {
      const response = await getTraining(id);
      console.log("UserId: " + localStorage.getItem("id"));
      console.log("Ids Registrados: " + response.data.students);

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
      setMaximumAmount(response.data.maximumAmount);
      setMinimumAmount(response.data.minimumAmount);
      setDescription(response.data.description);
      if (response.data.students.indexOf(localStorage.getItem("id")) !== -1) {
        setQuiz(false);
        setNextCase(true);
      }
    } catch (err) {}
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
  return (
    <div>
      <Navbar />
      <h1 className="training-title">Training Page</h1>

      <div className="training-container">
        <h2>Nome do treinamento: {name}</h2>
        <h3>Descricao: {description}</h3>
        <h3>worload: {workload}</h3>
        <h3>initialInscriptionDate: {initialInscriptionDate}</h3>
        <h3>finalInscriptionDate: {finalInscriptionDate}</h3>
        <h3>initialTrainingDate: {initialTrainingDate}</h3>
        <h3>finalTrainingDate: {finalTrainingDate}</h3>
        <h3>minimumAmount: {minimumAmount}</h3>
        <h3>maximumAmount: {maximumAmount}</h3>
      </div>

      {quiz && <input type="button" value="Fazer Quiz" onClick={doQuiz} />}
      {nextCase && (
        <input
          type="button"
          value="Ir para o próximo Case"
          onClick={() => console.log("case")}
        />
      )}
    </div>
  );
};

export default TrainingPage;
