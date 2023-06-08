import React, { useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Loader from "../../Containers/Loader";
import "./styles.css";
import Navbar from "../../Containers/Navbar";

const CompanyPage = () => {
	const navigate = useNavigate();
	const [failError, setFailError] = useState(false);
	const [loading, isLoading] = useState(false);
	const [error, setError] = useState(false);

	if (loading) {
		return <Loader />;
	}
	return (
		<div>
			<Navbar />
			<h1>Company Page</h1>
			<input
				type="button"
				value="Criar vaga"
				onClick={() => navigate("/createjob")}
			/>
		</div>
	);
};

export default CompanyPage;
