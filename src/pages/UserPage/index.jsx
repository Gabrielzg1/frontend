import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getUser } from "../../services/api";
import "./styles.css";
import Navbar from "../../Containers/Navbar";

const UserPage = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [name, setname] = useState("");
  const [reason, setReason] = useState("");

  //Trainings
  const [finished, setFinished] = useState([]);
  const [disapprove, setDisapprove] = useState([]);
  const [applied, setApplied] = useState([]);

  const handleMouseEnter = () => {
    setShowPopup(true);
  };

  const handleMouseLeave = () => {
    setShowPopup(false);
  };

  const loadData = async (query = "") => {
    try {
      const id = localStorage.getItem("id");
      const type = localStorage.getItem("type");
      if (id === null || type !== "users") {
        navigate("/login");
        localStorage.clear();
      }
      const response = await getUser(id);
      setApplied(response.data.applied);
      setname(response.data.username);
      setFinished(response.data.finished);
      setDisapprove(response.data.disapprove);
      console.log(response.data);
    } catch (err) {
      console.error(err);
      navigate("/login");
    }
  };
  useEffect(() => {
    (async () => await loadData())();
  }, []);

  return (
    <div id="main">
      <Navbar />
      <h1 className="user-title">Bem vindo, {name}!</h1>

      <div id="boxtask1">
        <ul>
          {" "}
          <h2>Treinamentos que se candidatou</h2>
          <div id="endtask">
            {applied.map((item) => (
              <li id="boxtask" key={item.id}>
                <button
                  id="botao"
                  onClick={() => {
                    navigate("/training");
                  }}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </div>
        </ul>
      </div>

      <div id="boxtask1">
        <ul>
          {" "}
          <h2>Treinamentos concluidos</h2>
          <div id="endtask">
            {finished.map((item) => (
              <li id="boxtask" key={item.id}>
                <button
                  id="botao"
                  onClick={() => {
                    navigate("/training");
                  }}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </div>
        </ul>
      </div>
      <div id="boxtask1">
        <ul>
          {" "}
          <h2>Treinamentos recusados</h2>
          <div id="disapprove">
            {disapprove.map((item) => (
              <li
                key={item.id}
                id="boxtask"
                onMouseEnter={() => {
                  handleMouseEnter();
                  setReason(item.reason);
                }}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  id="botao"
                  onClick={() => {
                    navigate("/training");
                  }}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </div>
          {showPopup && (
            <div className="popup">
              <p>Motivo: {reason}</p>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};
export default UserPage;
