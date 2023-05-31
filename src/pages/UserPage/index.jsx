import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getUser } from "../../services/api";
import "./styles.css";
import Navbar from "../../Containers/Navbar";

const UserPage = () => {
	const [applied, setApplied] = useState([])
	const [finished, setFinished] = useState([])
    const { state } = useLocation();
	const { id } = state;
	const loadData = async (query = "") => {
		try {
            console.log(id)
			const response = await getUser(id);
			setApplied(response.data.applied)
			setFinished(response.data.finished)
			console.log(response.data);
		} catch (err) {
			console.error(err);
		}
	};
	useEffect(() => {
		(async () => await loadData())();
	}, []);

	return (
		<div id="main">
            <Navbar/>
            <h1>User Page</h1>
			<ul> <span>Finished Tasks</span>
			{
              finished.map((item) => (
				<li>{item}</li>

			  ))}
			
			</ul>
			<ul> <span>Applied Tasks</span>
			{
              applied.map((item) => (
				<li>{item}</li>

			  ))}
			
			</ul>
            
		</div>
	);
};
export default UserPage;
