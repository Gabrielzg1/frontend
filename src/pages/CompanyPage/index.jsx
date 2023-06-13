import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Loader from "../../Containers/Loader";
import "./styles.css";
import Navbar from "../../Containers/Navbar";
import { getCompany, getJobs } from "../../services/api";

const CompanyPage = () => {
  const navigate = useNavigate();
  const [failError, setFailError] = useState(false);
  const [loading, isLoading] = useState(false);
  const [error, setError] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [name, setName] = useState("");

  const loadData = async (query = "") => {
    try {
      const id = localStorage.getItem("id");
      const type = localStorage.getItem("type");
      if (id === null || type !== "company") {
        navigate("/login");
        localStorage.clear();
      }
      const response = await getCompany(id);
      const jobsResponse = await getJobs(id);
      setJobs(jobsResponse.data);
      console.log(jobsResponse.data);
      setName(response.data.username);
    } catch (err) {
      console.error(err);
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
    <div id="maincompany-page">
      <Navbar />

      <div id="companytitle">
        <h1>Company Page - {name}</h1>
      </div>

      <div id="boxcompany">
        <ul>
          {" "}
          <h2>Vagas Criadas.</h2>
          <div id="taskcompany">
            {jobs.map((item) => (
              <li id="boxlistacompany">
                <button
                  id="botaocompany"
                  onClick={() => {
                    navigate("/showjob", { state: { id: item._id } });
                  }}
                >
                  {item.title}
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
