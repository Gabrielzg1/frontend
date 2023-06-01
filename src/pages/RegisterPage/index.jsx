import React, { useState, useContext } from "react";
import { register } from "../../services/api";
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
			const response = await register(option,username, email, password);
			localStorage.setItem('id', response.data._id);
			console.log(response.data);
			if (response.status === 201) {
				navigate("/login");
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
                    <div className="user-box">
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
					<a href="/login" className="a2">
						Login!
					</a>
				</p>
			</div>
		</div>
	);
};

export default RegisterPage;
