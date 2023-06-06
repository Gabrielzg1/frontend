import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../Containers/Loader";
import "./styles.css";

import Navbar from "../../Containers/Navbar";

const AdminPage = () => {
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
            <h1>Admin Page</h1>
			<button
			onClick={()=> {navigate("/createtraining")}}>
				Criar Treinamento</button>
		</div>
	);
};

export default AdminPage;
