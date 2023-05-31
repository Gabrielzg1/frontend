import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getUser } from "../../services/api";
import "./styles.css";
import Navbar from "../../Containers/Navbar";

const UserPage = () => {
    const { state } = useLocation();
	const { id } = state;
	const loadData = async (query = "") => {
		try {
            console.log(id)
			const response = await getUser(id);
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
            <Navbar/>
            <h1>User Page</h1>
		</div>
	);
};
export default UserPage;
