import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import "./styles.css";

function Navbar() {
	const [logged, isLogged] = useState(false);
	const [type, setType] = useState(null);
	const navigate = useNavigate();
	const loadData = async () => {
		try {
			const id = localStorage.getItem("id");
			const option = localStorage.getItem("type");
			if (option) setType(option);
			if (id !== null) isLogged(true);
		} catch (err) {
			console.error(err);
		}
	};
	useEffect(() => {
		(async () => await loadData())();
	}, []);

	const logout = async () => {
		localStorage.clear();
		navigate("/login");
	};

	return (
		<div className="body">
			<input type="checkbox" id="active" />
			<label htmlFor="active" className="menu-btn">
				<span></span>
			</label>
			<label htmlFor="active" className="close"></label>
			<div className="wrapper">
				<ul>
					<li>
						<a href="/home">Home</a>
					</li>

					{logged === true ? (
						<>
							<li>
								<a href={`/${type}`}>Perfil</a>
							</li>
							<li>
								<a onClick={logout}>Logout</a>
							</li>
						</>
					) : (
						<>
							<li>
								<a href="/register">Register</a>
							</li>
							<li>
								<a href="/login">Login</a>
							</li>
						</>
					)}
				</ul>
			</div>
		</div>
	);
}

export default Navbar;
