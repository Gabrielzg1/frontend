import React, { useState, useContext } from "react";
import { login } from "../../services/api";
import { useNavigate } from "react-router-dom";


const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false)
    const [loading, isLoading] = useState(false)
    const hadleLogin = async () => {
        isLoading(true)
        const response = await login(email, password)
        console.log(response.data);
        if(response.data.msg == true)
            navigate("/")
        else
            setError(true)
        isLoading(false)         
    }

    if(loading){
        return <h1>Loading....</h1>
    }
    return (
        <div id="login">
            <h1 className="title">Login</h1>
            <div className="form">
                <div className="field">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="field">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div className="actions">
                    <button onClick={hadleLogin}>Entrar</button>
                </div>
            </div>
            {error && <h1>Email ou senha incorreto</h1>}
        
        </div>
    )
}
export default LoginPage