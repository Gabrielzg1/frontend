import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getUser } from "../../services/api";
import "./styles.css";
import Navbar from "../../Containers/Navbar";

const UserPage = () => {
  const navigate = useNavigate();
  const [applied, setApplied] = useState([
    "Math",
    "fisica",
    "fisica",
    "fisica",
    "fisica",
    "fisica",
    "fisica",
    "fisica",
    "fisica",
    "fisica",
    "fisica",
    "fisica",
    "fisica",
  ]);
  const [showPopup, setShowPopup] = useState(false);

  const handleMouseEnter = () => {
    setShowPopup(true);
  };

  const handleMouseLeave = () => {
    setShowPopup(false);
  };
  const [name, setname] = useState("Nome do usuário");
  const [reason, setReason] = useState("");
  const [finished, setFinished] = useState(["Quimica", "fisica"]);
  const [disapprove, setDisapprove] = useState([
    { name: "Estrutura", reason: "presença" },
    { name: "POO", reason: "nota" },
  ]);
  const loadData = async (query = "") => {
    try {
      const id = localStorage.getItem("id");
      if (id === null) navigate("/login");
      const response = await getUser(id);
      //setApplied(response.data.applied)
      //setname(response.data.username)
      //setFinished(response.data.finished)
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
      <h1 className="title">Bem vindo, {name}!</h1>

      <div id="boxtask1">
        <ul>
          {" "}
          <h2>Applied Tasks</h2>
          <div id="endtask">
            {applied.map((item) => (
              <li id="boxtask">
                <button
                  id="botao"
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

      <div id="boxtask1">
        <ul>
          {" "}
          <h2>Finished Tasks</h2>
          <div id="endtask">
            {finished.map((item) => (
              <li id="boxtask">
                <button
                  id="botao"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  {item}
                </button>
              </li>
            ))}
          </div>
        </ul>
      </div>
      <div id="boxtask1">
        <ul>
          {" "}
          <h2>Disapprove Tasks</h2>
          <div id="disapprove">
            {disapprove.map((item) => (
              <li
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
                    navigate("/");
                  }}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </div>
          {showPopup && (
            <div className="popup">
              <p>{reason}</p>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};
export default UserPage;
