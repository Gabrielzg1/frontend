import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Loader from "../../Containers/Loader";
import "./styles.css";
import Navbar from "../../Containers/Navbar";
import { getMentor } from "../../services/api";

const MentorPage = () => {
  const navigate = useNavigate();
  const [failError, setFailError] = useState(false);
  const [loading, isLoading] = useState(false);
  const [error, setError] = useState(false);
  const [name, setname] = useState("Nome do usuário");
  const [tasks, setTasks] = useState([]);
  const [empty, isEmpty] = useState(true);

  const loadData = async () => {
    try {
      const id = localStorage.getItem("id");
      const type = localStorage.getItem("type");
      if (id === null || type !== "mentors") {
        navigate("/login");
        localStorage.clear();
      }

      const response = await getMentor(id);
      console.log(response.data);
      setname(response.data.username);
      setTasks(response.data.trainings);
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

  if (empty) {
    return (
      <div>
        <Navbar />
        <h1 className="mentor-title">Bem Vindo, {name}</h1>
        {tasks.length !== 0 ? (
          <div id="boxtaskmentor">
            <ul>
              {" "}
              <h2>Ultimas atividades</h2>
              <div id="endtaskmentor">
                {tasks.map((item) => (
                  <li id="boxlistamentor">
                    <button
                      id="botaomentor"
                      onClick={() => {
                        navigate("/training", {
                          state: { id: item.trainingId },
                        });
                      }}
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </div>
            </ul>
          </div>
        ) : (
          <div className="empty-container">
            <h1 className="empty-title">Nenhum Treinamento Cadastrado</h1>
            <h2>
              Aguarde algum administrador te registrar como mentor de algum
              treinamento
            </h2>
          </div>
        )}
      </div>
    );
  }
};

export default MentorPage;
