import React, { useState, useContext } from "react";

import { useNavigate } from "react-router-dom";
import Loader from "../../Containers/Loader";
import "./styles.css";
import Navbar from "../../Containers/Navbar";

const CreateJobPage = () => {
	const navigate = useNavigate();
	const [failError, setFailError] = useState(false);
	const [loading, isLoading] = useState(false);
	const [error, setError] = useState(false);

	const [inputvalue, setInputvalue] = useState([""]);

	if (loading) {
		return <Loader />;
	}

	const cria = () => {
		setInputvalue([...inputvalue, ""]);
	};

	return (
		<div className="bodycreatejob">
			<Navbar />
			<h1 className="create-job-title"> Create Job Page</h1>

			<div id="boxcriatreino">
				<div>
					<input
						type="text"
						placeholder="Titulo Vaga"
						id="input-trainingpage"
					/>
					<input
						type="text"
						placeholder="Empresa"
						id="input-trainingpagehorario"
					/>
				</div>

				<div id="label-jobcreate">
					<label >Faixa Salarial</label>
				</div>

				<div id="divjobcreatesal">
					<form action="">
						R$ <input
						type="number" placeholder="Minimo" name="quantity"
						step="0.01" min="0.01"  id="input-jobpagesal"
						/>

						R$ <input type="number" step="0.01"
						min="0.01" placeholder="Maximo" id="input-jobpagesal"/>	
					</form>
				</div>

				<br></br>
        		<br></br>

				<label id="label-jobcreate">Descrição das Funções a serem desempenhadas</label>
				<div>
					<textarea name="descricaojobcreate" id="textarea-jobcreate" cols="30" rows="10">
						{" "}
					</textarea>
				</div>

				<br></br>

				<label id="label-jobcreate">Requisitos para a Vaga</label>
				<div>
					<textarea name="requisitosjobcreate" id="textarea-jobcreate" cols="30" rows="10">
						{" "}
					</textarea>
				</div>


				<button 

					id="botaocriarjob"
					onClick={() => {
						navigate("/company");}}
				>
					Criar Job
				</button>
				
			</div>
		</div>
	);
};

export default CreateJobPage;
