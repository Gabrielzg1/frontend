import React, { useState, useContext } from "react";

import { useNavigate } from "react-router-dom";
import Loader from "../../Containers/Loader";
import "./styles.css";
import Navbar from "../../Containers/Navbar";

const CreateTrainingPage = () => {
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
		<div id="bodytrainingcreate">
			<Navbar />
			<h1 className="create-training-title"> Create Training Page</h1>

			<div id="boxcriatreino">
				<div>
					<input
						type="text"
						placeholder="Nome Comercial"
						id="input-trainingpage"
					/>
					<input
						type="text"
						placeholder="Carga Horaria"
						id="input-trainingpagehorario"
					/>
				</div>

				<label id="label">Data Inscrição</label>

				<div id="divinscricao">
					<label id="label">Inicio</label>
					<input
						type="date"
						placeholder="Inicio da Inscrição"
						id="input-trainingpagedata"
					/>

					<label id="label">Fim</label>

					<input type="date" placeholder="Fim da Inscrição" id="input-trainingpagedata" />

                    <input type="text" placeholder="Numero minimo de Participantes" id="input-trainingpageparti"/>

				</div>

                <label id="label">Data Treinamento</label>

				<div id="divtreinamento">
                
                    <label id="label">Inicio</label>
					<input type="date" placeholder="Inicio do Treinamento" id="input-trainingpagedata"/>

                    <label id="label">Fim</label>
					<input type="date" placeholder="Fim do Treinamento" id="input-trainingpagedata"/>

                    <input type="text" placeholder="Numero maximo de Participantes" id="input-trainingpageparti" />

				</div>
                <br></br>
                <br></br>

                

                <label id="label">Descrição</label>

				<div>
					<textarea name="" cols="30" rows="10" id="descricao-training">
						{" "}
					</textarea>
				</div>

				<h3>Criação do Teste de Aptidão 'Quiz'</h3>
				<input
					type="button"
					value="Criar Quiz"
                    id="botaotraining"
					onClick={() => {
						navigate("/createquiz");
					}}
				/>
			</div>
		</div>
	);
};

export default CreateTrainingPage;