import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Loader from "../../Containers/Loader";
import "./styles.css";
import Navbar from "../../Containers/Navbar";

const MentorPage = () => {
  const navigate = useNavigate();
  const [failError, setFailError] = useState(false);
  const [loading, isLoading] = useState(false);
  const [error, setError] = useState(false);
  const [name, setname] = useState("Nome do usuário");
  const [tasks, setTasks] = useState([]);

  const loadData = async () => {
    try {
      const id = localStorage.getItem("id");
      const type = localStorage.getItem("type");
      if (id === null || type !== "mentors") {
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
    <div>
      <Navbar />
      <h1 className="mentor-title">Bem Vindo, {name}</h1>

      <div id="boxtaskmentor">
        <ul>
          {" "}
          <h2>Ultimas atividades concluídas pelos alunos.</h2>
          <div id="endtaskmentor">
            {tasks.map((item) => (
              <li id="boxlistamentor">
                <button
                  id="botaomentor"
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
    </div>
  );
};

export default MentorPage;
