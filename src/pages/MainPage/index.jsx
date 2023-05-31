import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUsers } from "../../services/api";
import Navbar from "../../Containers/Navbar";
import "./styles.css";
const MainPage = () => {
	const loadData = async (query = "") => {
		try {
			const response = await getUsers();
			console.log(response.data);
		} catch (err) {
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
