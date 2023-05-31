import React, { useState, useContext } from "react";
import { login } from "../../services/api";
import { useNavigate, useLocation } from "react-router-dom";
import Loader from "../../Containers/Loader";
import "./styles.css";
import Buttons from "../../Containers/Buttons/index";
import Navbar from "../../Containers/Navbar";

const RegisterPage = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
    const [username, setUsername] = useState("")
	const [failError, setFailError] = useState(false);
	const [loading, isLoading] = useState(false);
	const [option, setOption] = useState("users");
	const [error, setError] = useState(false);

	const handleSelectedOption = (loginType) => {
		setOption(loginType);
		console.log(option);
	};

	const hadleRegister = async () => {
		try {
			setFailError(false);
			isLoading(true);
			const response = await login(email, password, option);
			console.log(response.data);
			if (response.data.msg === true) {
				navigate("/user", {
					state: {
						id: response.data.id
					},});
			}
			else setFailError(true);
			isLoading(false);
		} catch (err) {
			console.log(err);
		} finally {
			setError(true);
			isLoading(false);
		}
	};

	if (loading) {
		return <Loader />;
	}
	return (
		<div>
			<Navbar />
			<div class="login-box">
				<p>Login</p>
				<form>
					<div class="user-box">
						<input
							type="text"
							name="email"
							id="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<label>Email</label>
					</div>
					<div class="user-box">
						<input
							type="password"
							name="password"
							id="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<label>Password</label>
					</div>
                    <div class="user-box">
						<input
							type="text"
							name="username"
							id="username"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
						<label>Username</label>
					</div>
					{failError === true && (
						<p className="error">Email ou senha inválido</p>
					)}
					{error === true && <p className="error">Servidor fora do ar</p>}
					<a onClick={hadleRegister}>
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
					already have an account?{" "}
					<a href="/login" class="a2">
						Login!
					</a>
				</p>
			</div>
		</div>
	);
};

export default RegisterPage;
