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
            setInputvalue([...inputvalue, ""])
    }
    
    
	return (
		<div>
            <Navbar/>
            <h1> Create Training Page</h1>
            
            <div id="boxcriatreino">

                <div>
                    <input 
                    type="text"
                    placeholder="Nome Comercial"
                    id = "input-trainingpage"
                    />
                    <input 
                    type="text"
                    placeholder="Carga Horaria"
                    id="input-trainingpagehorario"
                    /> 
                </div>

                <label>Data Inscrição</label>

                <div>

                    <label id="label">Inicio</label>
                    <input
                    type="date"
                    placeholder="Inicio da Inscrição"
                    id="input-trainingpagedata"
                    />

                    <label id="label">Fim</label>

                    <input 
                    type="date"
                    placeholder="Fim da Inscrição"
                    />
                </div>

                <div>
                    <input 
                    type="date"
                    placeholder="Inicio do Treinamento"
                    />
                    <input 
                    type="date"
                    placeholder="Fim do Treinamento"
                    />
                </div>

                <div>
                    <textarea name="" id="" cols="30" rows="10"> </textarea>
                </div>

                <div>

                    <input 
                    type="text"
                    placeholder="Numero minimo de Participantes"
                    />
                    <input 
                    type="text"
                    placeholder="Numero maximo de Participantes"
                    />

                </div>

                <h2>Criação do Teste de Aptidão 'Quiz'</h2>
                <input type="button"  value="Criar Quiz"onClick={() => {
                    navigate("/createquiz")
                }} />

            </div>
		</div>
	);
};

export default CreateTrainingPage;