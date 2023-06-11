import React, { useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Loader from "../../Containers/Loader";
import "./style.css";
import Navbar from "../../Containers/Navbar";

const ShowJobPage = () => {
  const navigate = useNavigate();
  const [failError, setFailError] = useState(false);
  const [loading, isLoading] = useState(false);
  const [error, setError] = useState(false);

  const [name, setName] = useState(["Programador Full Stack"]);
  const [empresa,setEmpresa] = useState(["Apple"]);
  const [salminimo, setSalminimo] = useState(["12000"]);
  const [salmaximo, setSalmaximo] = useState(["15000"]);
  const [descricao, setDescricao] = useState(["Tags são estruturas de linguagem de marcação contendo instruções, tendo uma marca de início e outra de fim para que o navegador possa renderizar uma página. Há uma tendência nos dias atuais para se usar as tags apenas como delimitadores de estilo e/ou conteúdo, tanto em HTML quanto em XML."]);
  const [requisitos, setRequisitos] = useState(["C e Python"]);



  if (loading) {
    return <Loader />;
  }
  return (
    <div className="main-showjob">
			<Navbar />
			<h1 className="show-job-title">Job Page</h1>

			<div id="boxshowjob">
				<div>
					<h1 id="input-showjobpage">{name}</h1>
				</div>

				<br></br>
				<br></br>

				<div>
					<label>Empresa</label>
				</div>

				<div>
					<h2 id="input-showjobpage">{empresa}</h2>
				</div>

				<div id="label-showjob">
					<label >Faixa Salarial</label>
				</div>

				<div id="divjobcreatesal">
					<label id="sal-showjobpage">R$ {salminimo} - {salmaximo}</label>				
				</div>

				<br></br>
        		<br></br>

				<label id="label-showjob">Descrição das Funções a serem desempenhadas</label>
				<div id="descricao-showjob">
					<p>{descricao}</p>
				</div>

				<br></br>

				<label id="label-showjob">Requisitos para a Vaga</label>
				<div id="descricao-showjob">
					<p>{requisitos}</p>
				</div>


				<button 

					id="botaocriarjob"
					onClick={() => {
						navigate("/company");}}
				>
					Aplicar
				</button>
				
			</div>
		</div>
  );
};

export default ShowJobPage;