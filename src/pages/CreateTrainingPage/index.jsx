import React, { useState, useContext } from "react";
import { register } from "../../services/api";
import { useNavigate, useLocation } from "react-router-dom";
import Loader from "../../Containers/Loader";
import "./styles.css";
import Buttons from "../../Containers/Buttons/index";
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

                    />
                    <input 
                    type="text"
                    placeholder="Carga Horaria"
                    /> 
                </div>

                <div>
                    <input 
                    type="date"
                    placeholder="Inicio da Inscrição"
                    />
                    <input 
                    type="date"
                    placeholder="Fim da Inscrição"
                    />

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

                <div>
                    <button 
                        onClick={cria}
                    >
                        Adicionar uma Pergunta ao Quiz
                    </button>
                </div>

                <div>


                    {inputvalue.map((inputvalue, index) => (

                        <div>
                            <input
                            type="text"
                            placeholder={`Pergunta ${index+1}`}
                            />

                            <input
                            type="text"
                            placeholder="Primeira possivel resposta"
                            />

                            <input
                            type="text"
                            placeholder="Segunda possivel resposta"
                            />

                            <input
                            type="text"
                            placeholder="Terceira possivel resposta"
                            />  
                        </div>
  
                    ))}
                </div>
                

            </div>
		</div>
	);
};

export default CreateTrainingPage;