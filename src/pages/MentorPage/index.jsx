import React, { useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Loader from "../../Containers/Loader";
import "./styles.css";
import Navbar from "../../Containers/Navbar";

const MentorPage = () => {
	const navigate = useNavigate();
	const [failError, setFailError] = useState(false);
	const [loading, isLoading] = useState(false);
	const [error, setError] = useState(false);
	const [name, setname]=useState("Nome do usuário");
	const [tasks, setTasks] = useState(["Math", "fisica","fisica","fisica","fisica","fisica","fisica","fisica","fisica","fisica","fisica","fisica","fisica"])





	if (loading) {
		return <Loader />;
	}
	return (
		<div>
            <Navbar/>
            <h1>Bem Vindo, {name}</h1>

			<div  id="boxtaskmentor">
				<ul> <h2>Students Tasks</h2>
				<div id="endtaskmentor">
					{
					tasks.map((item) => (
						<li id="boxlistamentor">
							<button
							id="botaomentor"
							onClick={()=> {navigate("/")}}>
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
