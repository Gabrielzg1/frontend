import React, { useState, useContext } from "react";
import { login } from "../../services/api";
import { useNavigate, useLocation } from "react-router-dom";
import Loader from "../../Containers/Loader";
import "./styles.css";
import Buttons from "../../Containers/Buttons/index";
import Navbar from "../../Containers/Navbar";

const LoginPage = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [failError, setFailError] = useState(false);
	const [loading, isLoading] = useState(false);
	const [option, setOption] = useState("users");
	const [error, setError] = useState(false);

	const handleSelectedOption = (loginType) => {
		setOption(loginType);
		console.log(option);
	};

	const hadleLogin = async () => {
		try {
			setFailError(false);
			setError(false)
			isLoading(true);
			const response = await login(email, password, option);
			console.log(response.data);
			if (response.data.msg === true) {
				localStorage.setItem('id', response.data.id);
				navigate(`/${option}`);
			}
			else setFailError(true);
			isLoading(false);
		} catch (err) {
			console.log(err);
			setError(true);
		} finally {
			isLoading(false);
		}
	};

	if (loading) {
		return <Loader />;
	}
	return (
		<div>
			<Navbar />
			<div className="login-box">
				<p>Login</p>
				<form>
					<div className="user-box">
						<input
							type="text"
							name="email"
							id="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<label>Email</label>
					</div>
					<div className="user-box">
						<input
							type="password"
							name="password"
							id="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<label>Password</label>
					</div>
					{failError === true && (
						<p className="error">Email ou senha inválido</p>
					)}
					{error === true && <p className="error">Servidor fora do ar</p>}
					<a onClick={hadleLogin}>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						Submit
					</a>
				</form>
				<br />
				<Buttons
					handleOptionChange={handleSelectedOption}
					className="buttons"
				/>

				<p>
					Don't have an account?{" "}
					<a href="/register" className="a2">
						Sign up!
					</a>
				</p>
			</div>
		</div>
	);
};

export default LoginPage;
