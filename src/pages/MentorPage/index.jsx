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



	if (loading) {
		return <Loader />;
	}
	return (
		<div>
            <Navbar/>
            <h1>Mentor Page</h1>
		</div>
	);
};

export default MentorPage;
