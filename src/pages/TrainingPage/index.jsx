import React, { useState, useContext } from "react";
import { register } from "../../services/api";
import { useNavigate, useLocation } from "react-router-dom";
import Loader from "../../Containers/Loader";
import "./styles.css";
import Buttons from "../../Containers/Buttons/index";
import Navbar from "../../Containers/Navbar";

const TrainingPage = () => {
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
			<h1 className="training-title">Training Page</h1>
		</div>
	);
};

export default TrainingPage;
