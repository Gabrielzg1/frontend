import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import "./styles.css";

function Navbar() {
	const [logged, isLogged] = useState(false);
	const navigate = useNavigate();
	const loadData = async () => {
		try {
			const id = localStorage.getItem("id");
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
						<a href="/">Home</a>
					</li>
<<<<<<< Updated upstream
=======
					
					
					{ (logged === true) ? 
					<>
					
					<li>
						<a href="/users">UserPage</a>
					</li> 
					<li>
						<a onClick={logout}>Logout</a>
					</li> 
					
>>>>>>> Stashed changes

					{logged === true ? (
						<>
							<li>
								<a href="/users">UserPage</a>
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
