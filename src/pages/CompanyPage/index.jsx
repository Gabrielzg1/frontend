import React, { useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Loader from "../../Containers/Loader";
import "./styles.css";
import Navbar from "../../Containers/Navbar";

const CompanyPage = () => {
  const navigate = useNavigate();
  const [failError, setFailError] = useState(false);
  const [loading, isLoading] = useState(false);
  const [error, setError] = useState(false);

  const [tasks, setTasks] = useState(["AA"]);
  const [cursos,setCursos] = useState(["Curso1"]);
  const [vagas, setVagas] = useState(["Vaga2"]);


  if (loading) {
    return <Loader />;
  }
  return (
    <div id="maincompany-page">
      <Navbar />

      <div id="companytitle">
        <h1>Company Page</h1>
      </div>

      <div id="boxcompany">

        <ul>
          
          {" "}
          <h2>Ultimas atividades concluídas pelos alunos.</h2>

          <div id="taskcompany">
                {tasks.map((item) => (
                  <li id="boxlistacompany">
                    <button
                      id="botaocompany"
                      onClick={() => {
                        navigate("/training");
                      }}
                    >
                      {item}
                    </button>
                  </li>
                ))}
          </div>
        </ul>
      </div> 

      <div id="boxcompany">

        <ul>
          
          {" "}
          <h2>Notas Cursos</h2>

          <div id="taskcompany">
                {cursos.map((item) => (
                  <li id="boxlistacompany">
                    <button
                      id="botaocompany"
                      onClick={() => {
                        navigate("/training");
                      }}
                    >
                      {item}
                    </button>
                  </li>
                ))}
          </div>
        </ul>
      </div> 

      <div id="boxcompany">

        <ul>
          
          {" "}
          <h2>Vagas de Emprego</h2>

          <div id="taskcompany">
                {vagas.map((item) => (
                  <li id="boxlistacompany">
                    <button
                      id="botaocompany"
                      onClick={() => {
                        navigate("/training");
                      }}
                    >
                      {item}
                    </button>
                  </li>
                ))}
          </div>
        </ul>
      </div>           


      <input

        id="botaocreatejobcompany"
        type="button"
        value="Criar vaga"
        onClick={() => navigate("/createjob")}
      />
    </div>
  );
};

export default CompanyPage;
