import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getUser } from "../../services/api";
import "./styles.css";
import Navbar from "../../Containers/Navbar";

const UserPage = () => {
	const navigate= useNavigate()
	const [applied, setApplied] = useState(["Math", "fisica"])
	const [name, setname]=useState("Nome do usuário")
	const [finished, setFinished] = useState(["Math", "fisica"])
    const { state } = useLocation();
	const { id } = state;

	const loadData = async (query = "") => {
		try {
           	if(localStorage.getItem("id") !== id || id === null)
		   		navigate("/login")	
			const response = await getUser(id);
			//setApplied(response.data.applied)
			//setname(response.data.username)
			//setFinished(response.data.finished)
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
            <h1>Bem vindo, {name}!</h1>


				<ul> <h2>Applied Tasks</h2>
				<div id="endtask">
				{
				applied.map((item) => (
					<li  id="boxtask"><a href="/">{item}</a></li>

				))}

				</div>
				</ul>
			
		
			
				<ul> <h2>Finished Tasks</h2>
				<div id="endtask">
				{
				finished.map((item) => (
					<li  id="boxtask"><a href="/">{item}</a></li>

				))}

				</div>
				</ul>
			</div>
		
	);
};
export default UserPage;
