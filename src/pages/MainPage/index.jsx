import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUsers } from "../../services/api";
import Navbar from "../../Containers/Navbar";
import "./styles.css";
import DeleteButton from "../../Containers/DeleteButton";
const MainPage = () => {
	const [dataError, setDataError] = useState(false)
	const loadData = async () => {
		try {
			const response = await getUsers();
			console.log(response.data);
		} catch (err) {
			setDataError(true)
			console.error(err);
		}
	};
	useEffect(() => {
		(async () => await loadData())();
	}, []);

	const navigate = useNavigate();
	return (
		<div id="main">
			<Navbar />
			<h1>Main Page</h1>
		</div>
	);
};
export default MainPage;
