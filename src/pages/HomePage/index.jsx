import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTrainings, getUsers } from "../../services/api";
import Navbar from "../../Containers/Navbar";
import "./styles.css";

const HomePage = () => {
	const [dataError, setDataError] = useState(false);
	const loadData = async () => {
		try {
			const response = await getTrainings();
			console.log(response.data);
		} catch (err) {
			setDataError(true);
			console.error(err);
		}
	};
	useEffect(() => {
		(async () => await loadData())();
	}, []);

	const navigate = useNavigate();
	return (
		<div className="main-body">
			<h1 className="main-title">Jobtron</h1>
			<button className="main-button" onClick={() => navigate("/login")}>
				Ir para a página de login
			</button>
		</div>
	);
};
export default HomePage;
